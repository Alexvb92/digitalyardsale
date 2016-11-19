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
            res.render('about', {username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('about', {username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
});

router.get('/add', stormpath.getUser, function (req, res) {
        if (req.user) {
            res.render('add', {username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('add', {username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
});

router.get('/contact', stormpath.getUser, function (req, res) {
        if (req.user) {
            res.render('contact', {username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('contact', {username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
});

router.get('/index', stormpath.getUser, function (req, res) {
    models.products.findAll()
        .then(function(result) {
            if (req.user) {models.User.findOrCreate({
                where: { username: req.user.fullName}
            }
         ).then(function(){
            res.render("index", {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        })
        } else {
            res.render("index", {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
    });
});

router.get('/user', stormpath.loginRequired, function(req, res) {

    if (req.user) {
        res.render("user",  {
            flag: true,
            actionurl: 'logout',
            actiontxt: 'Logout',
            username: req.user.fullName,
            useremail: req.user.email
        });
    }
    else {
        res.redirect("/login");
    }
});

// Generate a simple dashboard page.
router.get('/dashboard', stormpath.loginRequired, stormpath.getUser, function(req, res) {
  res.send('Hi: ' + req.user.fullName +'<'+ req.user.email + '>. Logout <form action="/logout" method="POST"><button type="submit">Logout</button></form>');

});

router.get('/athletics',stormpath.getUser, function (req, res) {
     models.products.findAll({where:{departmentname: 'Athletics'}})
    .then(function(result) {
        if (req.user) {
            res.render('Athletics', {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('Athletics', {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
    })
});

router.get('/technology', stormpath.getUser , function (req, res) {
     models.products.findAll({where:{departmentname: 'Technology'}})
    .then(function(result) {
        if (req.user) {
            res.render('Technology', {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('Technology', {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
    })
});

router.get('/gaming', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Gaming'}})
    .then(function(result) {
        if (req.user) {
            res.render('Gaming', {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('Gaming', {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
    })
});

router.get('/home', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Home'}})
    .then(function(result) {
        if (req.user) {
            res.render('Home', {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('Home', {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
    })
});

router.get('/cooking', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Cooking'}})
    .then(function(result) {
        if (req.user) {
            res.render('Cooking', {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('Cooking', {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
    })
});

router.get('/toys', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Toys/figures'}})
    .then(function(result) {
        if (req.user) {
            res.render('Toys', {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('Toys', {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
    })
});

router.get('/outdoor', stormpath.getUser ,function (req, res) {
    models.products.findAll({where:{departmentname: 'Yard/Outdoor'}})
    .then(function(result) {
        if (req.user) {
            res.render('Outdoor', {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('Outdoor', {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
    })
});

router.get('/books', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Books'}})
    .then(function(result) {
        if (req.user) {
            res.render('Books', {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('Books', {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
    })
});

router.get('/music', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Music'}})
    .then(function(result) {
        if (req.user) {
            res.render('Music', {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('Music', {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
    })
});

router.get('/automotive', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Automotive'}})
    .then(function(result) {
        if (req.user) {
            res.render('Automotive', {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('Automotive', {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
    })
});

router.get('/clothing', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Clothing'}})
    .then(function(result) {
        if (req.user) {
            res.render('Clothing', {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('Clothing', {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
    })
});

router.get('/custom_makes', stormpath.getUser, function (req, res) {
    models.products.findAll({where:{departmentname: 'Custom Makes'}})
    .then(function(result) {
        if (req.user) {
            res.render('Custom Makes', {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
        } else {
            res.render('Custom Makes', {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
        }
    })
});

router.get('/item/:id', stormpath.getUser, function (req, res) {
        models.products.findAll({where:{id : req.params.id}})
        .then(function(result) {
            if (req.user) {
                res.render('item', {products: result, username: req.user.fullName, flag: true, actionurl: 'logout', actiontxt: 'Logout'});
            } else {
                res.render('item', {products: result, username: 'Your Account', flag: false, actionurl: 'login', actiontxt: 'Login'});
            }
        })
    });


router.post('/Listproducts', function (req, res) {

    models.products.create({
        productname: req.body.productname,
        price: req.body.price,
        location: req.body.location,
        imageurl: req.body.imageurl,
        departmentname: req.body.departmentname,
        purchased: 0
    })
    .then(function() {
        res.redirect("/");
    });
});

router.put('/Purchaseproducts', stormpath.getUser, function (req, res)
  {

  models.products.findAll({where: {id: req.body.id}})
    .then(function(otherresult) {
         models.User.findAll({where:{username: req.user.fullName}})
        .then(function(result) {
             console.log(result[0].dataValues.money)
             models.User.update(

             {money: (result[0].dataValues.money - otherresult[0].dataValues.price)}, {where: {username: req.user.fullName}}
             )

             models.products.update(

                {Purchased: 1}, {where: {id: req.body.id}
             })
            .then(function() {
                res.redirect("/");
            });
        })
    })
})






module.exports = router;
