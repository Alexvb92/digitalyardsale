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

var sequelizeConnection = models.sequelize;

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

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var PORT = process.env.PORT || 3000;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});