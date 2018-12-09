const express = require("express");
const router = express.Router();
const burger = require("../models/burger");


router.get("/", function(req, res){
    console.log("router.get in burger controller")
    burger.all(function(data){
        console.log("router.get>burger.all")
        console.log("========================");
        let hbsObject = {
            burgers: data
        };
        // console.log("hbsObject :", hbsObject);
        res.render("index", hbsObject);
    });
});

// if (!devoured){put in not devoured}
// if (devoured){put in devoured}

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function (result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    console.log("req.body", req.body);
    burger.update(req.body
    , condition, function(result){
        console.log("burger.update IN burger_controller.JS");
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.put("/api/burgers/devour/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("Condition: " + condition);

    burger.update({
        devoured: 1
    }, condition, function(result){
        console.log("burger.update IN burger_controller.JS");
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


router.delete("/api/burgers/:id", function(req, res){
    let condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        console.log("burger.delete IN burger_controller.JS");
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

// module.exports = router;
module.exports = router;



// router.post("/api/cats", function(req, res) {
//   cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update(
//     {
//       sleepy: req.body.sleepy
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });

// // Export routes for server.js to use.
// module.exports = router;
