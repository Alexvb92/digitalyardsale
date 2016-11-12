/*
Here is where you set up your server file.
express middleware.
*/

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var Sequelize = require('sequelize');
var models  = require('./models');
var app = express();
var config = require('./config/config');

var sequelizeConnection = models.sequelize;

var stormpath = require('express-stormpath');

app.use(stormpath.init(app, {
  apiKey: {
    id: '34DDNU8D32CBHF0PMO98BBOEA',
    secret: 'McMybH49PcBUZ0AKTDMjEuaRR4qqJOd60LjSX2UtIw8'
  },
  application: {
    href: `https://api.stormpath.com/v1/applications/5qY13dmWRIvw8b5toe9PjP`
  }
}));


// // We run this query so that we can drop our tables even though they have foreign keys
// sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// // sync the tables
// .then(function(){
// 	return sequelizeConnection.sync({force:true})
// })

// sync the tables
sequelizeConnection.sync()

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// app.get('/secret', stormpath.loginRequired, function (req, res) {

	var routes = require('./controllers/Controller.js');
	app.use('/', routes);

// });
// app.get('/', function (req, res) {
// 	res.render('index');
// });
app.on('stormpath.ready', function () {

var PORT = process.env.PORT || 3000;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
});