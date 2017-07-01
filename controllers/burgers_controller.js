var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    //     db.burger.all(function(data) {
    //         var hbsObject = {
    //             burgers: data
    //         };
    //         console.log(hbsObject);
    //         res.render("index", hbsObject);
    //     });
    // });
    db.burger.findAll({}).
    then(function(data) {
        // We have access to the todos as an argument inside of the callback function
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);

    });
});

router.post("/", function(req, res) {
    db.burger.create(
        // [
        //         "burger_name", "devoured"
        //     ], [
        //         req.body.burger_name, req.body.devoured
        //     ], function() {
        //         res.redirect("/");
        //     });
        // });
        {
            burger_name: req.body.burger_name,
        }).then(function(data) {
        console.log("added burger");
        res.redirect('/');
    }).catch(function(err) {
        console.log(err);
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    db.burger.update({
        //     devoured: req.body.devoured
        // }, condition, function() {
        devoured: 1,
        burger_id: req.params.id
    }, {
        where: { id: req.params.id }
    }).then(function(data) {
        res.redirect("/");
    });
});

// router.delete("/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     db.burger.delete(condition, function() {
//         res.redirect("/");
//     });
// });

// Export routes for server.js to use.
module.exports = router;