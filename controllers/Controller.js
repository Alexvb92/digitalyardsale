var express = require('express');
var router = express.Router();
var models = require('../models');
var stormpath = require('express-stormpath')
models.sequelize.sync();


router.get('/', function (req, res) {
	res.redirect('/index');
});

router.get('/about', function (req, res) {
    res.render('about');
});

router.get('/add', function (req, res) {
    res.render('add');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});

router.get('/index', stormpath.getUser, function (req, res) {
    models.products.findAll()
    .then(function(result) {
        if (req.user) {
        res.render("index", {products: result,
            username : req.user.fullName});
        } else {
        res.render("index", {products: result,
            username : 'Your Account'});
        }
    });
});

router.get('/user', stormpath.loginRequired, function(req, res) {
    if (req.user) {
        res.render("user", {
            username : req.user.fullName,
            useremail : req.user.email
        });
    } else {
        res.redirect("/login");
    }
});


router.post('/Listproducts', function (req, res) {
    console.log(req.body)

    models.products.create({
        productname: req.body.productname,
        price: req.body.price,
        location: req.body.location,
        stock: req.body.stock,
        imageurl: req.body.imageurl,
        purchased: false
    })
    .then(function() {
        res.redirect("/");
    });
});

router.put('/Purchaseproducts', function (req, res) {

    models.products.update(

        {purchased: true}, {where: {id: req.body.id}
    })
    .then(function() {
        res.redirect("/");
    });
});


module.exports = router;
