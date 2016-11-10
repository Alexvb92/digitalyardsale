var express = require('express');
var router = express.Router();
var models = require('../models');
models.sequelize.sync();


router.get('/', function (req, res) {
	res.redirect('/index');
});

router.get('/index', function (req, res) {
    models.products.findAll()
    .then(function(result) {
        res.render("index", {products: result});
    });
});


router.post('/Listproducts', function (req, res) {

    models.products.create({
        productname: req.body.productname,
        price: req.body.price,
        location: req.body.location,
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
