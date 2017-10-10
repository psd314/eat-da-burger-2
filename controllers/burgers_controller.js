var express = require("express");
var router = express.Router();
var db = require("../models");
console.log(db.Burger);

router.get("/", function(req, res) {
    db.Burger.findAll({})
        .then(function(dbBurger) {
            var burgerArray = [];

            for (burg in dbBurger) {
                burgerArray.push(dbBurger[burg].dataValues);
            }

            var handlebarsObj = {
                burgers : burgerArray
            }
            // console.log("database: ", handlebarsObj);
            res.render("Index", handlebarsObj);
        });


});

router.put("/api/devour", function(req, res) {
    console.log("Burger ID:", req.body.burgerID);
    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.body.burgerID
        }
    }).then(function(dbBurger) {

    });
});

router.post("/api/addBurger", function(req, res) {
    console.log('req body', req.body);
    db.Burger.create({
      burger_name: req.body.burgerName
    });
});

module.exports = router;
