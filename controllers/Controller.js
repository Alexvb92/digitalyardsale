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
            username : ''});
        }
    });
});

router.get('/Athletics', function (req, res) {
    res.render('athletics');
});

router.get('/technology', function (req, res) {
    res.render('technology');
});

router.get('/gaming', function (req, res) {
    res.render('gaming');
});

router.get('/home', function (req, res) {
    res.render('home');
});

router.get('/cooking', function (req, res) {
    res.render('cooking');
});

router.get('/toys', function (req, res) {
    res.render('toys');
});

router.get('/outdoor', function (req, res) {
    res.render('outdoor');
});

router.get('/books', function (req, res) {
    res.render('books');
});

router.get('/music', function (req, res) {
    res.render('music');
});

router.get('/automotive', function (req, res) {
    res.render('automotive');
});

router.get('/clothing', function (req, res) {
    res.render('clothing');
});

router.get('/custom_makes', function (req, res) {
    res.render('custom_makes');
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