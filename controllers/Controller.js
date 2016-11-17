var express = require('express');
var router = express.Router();
var models = require('../models');
var stormpath = require('express-stormpath')
models.sequelize.sync();


router.get('/', function (req, res) {
    res.redirect('/index');
});

router.get('/about', stormpath.getUser, function (req, res) {
    if (req.user) {
        res.render('about', {username: req.user.fullName});
        } else {
        res.render('about', {username : 'Your Account'});
        }
});

router.get('/add', stormpath.getUser, function (req, res) {
        if (req.user) {
        res.render('add', {username: req.user.fullName});
        } else {
        res.render('add', {username : 'Your Account'});
        }
});

router.get('/contact', stormpath.getUser, function (req, res) {
        if (req.user) {
        res.render('contact', {username: req.user.fullName});
        } else {
        res.render('contact', {username : 'Your Account'});
        }
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

// Generate a simple dashboard page.
router.get('/dashboard', stormpath.loginRequired, stormpath.getUser, function(req, res) {
  res.send('Hi: ' + req.user.fullName +'<'+ req.user.email + '>. Logout <form action="/logout" method="POST"><button type="submit">Logout</button></form>');

});

router.get('/athletics', function (req, res) {
     models.products.findAll({where:{departmentname: 'Athletics'}})
    .then(function(result) {
        if (req.user) {
            res.render('Athletics', {products: result,
                username: req.user.fullName});
        } else {
        res.render('Athletics', {products: result, username : 'Your Account'});
        }
    })
});

router.get('/technology', function (req, res) {
     models.products.findAll({where:{departmentname: 'Technology'}})
    .then(function(result) {
        if (req.user) {
            res.render('Technology', {products: result,
                username: req.user.fullName});
        } else {
        res.render('Technology', {products: result, username : 'Your Account'});
        }
    })
});

router.get('/gaming', function (req, res) {
    models.products.findAll({where:{departmentname: 'Gaming'}})
    .then(function(result) {
        if (req.user) {
            res.render('Gaming', {products: result,
                username: req.user.fullName});
        } else {
        res.render('Gaming', {products: result, username : 'Your Account'});
        }
    })
});

router.get('/home', function (req, res) {
    models.products.findAll({where:{departmentname: 'Home'}})
    .then(function(result) {
        if (req.user) {
            res.render('Home', {products: result,
                username: req.user.fullName});
        } else {
        res.render('Home', {products: result, username : 'Your Account'});
        }
    })
});

router.get('/cooking', function (req, res) {
    models.products.findAll({where:{departmentname: 'Cooking'}})
    .then(function(result) {
        if (req.user) {
            res.render('Cooking', {products: result,
                username: req.user.fullName});
        } else {
        res.render('Cooking', {products: result, username : 'Your Account'});
        }
    })
});

router.get('/toys', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Toys/figures'}})
    .then(function(result) {
        if (req.user) {
            res.render('Toys', {products: result,
                username: req.user.fullName});
        } else {
        res.render('Toys', {products: result, username : 'Your Account'});
        }
    })
});

router.get('/outdoor', stormpath.getUser ,function (req, res) {
    models.products.findAll({where:{departmentname: 'Outdoor'}})
    .then(function(result) {
        if (req.user) {
            res.render('Outdoor', {products: result,
                username: req.user.fullName});
        } else {
        res.render('Outdoor', {products: result, username : 'Your Account'});
        }
    })
});

router.get('/books', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Books'}})
    .then(function(result) {
        if (req.user) {
            res.render('Books', {products: result,
                username: req.user.fullName});
        } else {
        res.render('Books', {products: result, username : 'Your Account'});
        }
    })
});

router.get('/music', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Music'}})
    .then(function(result) {
        if (req.user) {
            res.render('Music', {products: result,
                username: req.user.fullName});
        } else {
        res.render('Music', {products: result, username : 'Your Account'});
        }
    })
});

router.get('/automotive', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Automotive'}})
    .then(function(result) {
        if (req.user) {
            res.render('Automotive', {products: result,
                username: req.user.fullName});
        } else {
        res.render('Automotive', {products: result, username : 'Your Account'});
        }
    })
});

router.get('/clothing', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Clothing'}})
    .then(function(result) {
        if (req.user) {
            res.render('Clothing', {products: result,
                username: req.user.fullName});
        } else {
        res.render('Clothing', {products: result, username : 'Your Account'});
        }
    })
});

router.get('/custom_makes', function (req, res) {
    models.products.findAll({where:{departmentname: 'Custom Makes'}})
    .then(function(result) {
        if (req.user) {
            res.render('Custom Makes', {products: result,
                username: req.user.fullName});
        } else {
        res.render('Custom Makes', {products: result, username : 'Your Account'});
        }
    })
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