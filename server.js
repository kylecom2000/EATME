// EXPRESS
const express = require("express");

// PORT for application to use
let PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));


// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const routes = require("./controllers/burger_controller");

app.use(routes);



// WORKING CODE WITHOUT app.use(routes);
// const connection = require("./config/connection");

// // Use Handlebars to render the main index.html page with the todos in it.
// app.get("/", function(req, res) {                    //burger_controller.js
//     console.log("get function called");
//     connection.query("SELECT * FROM burgers;", function(err, data) {
//         if (err) {
//         return res.status(500).end();
//         }
//         res.render("index", { burgers: data });      //burger_controller.js
//     });
// });

// // Create a new burger
// app.post("/burgers", function(req, res) {
//     connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [req.body.burger, false], function(err, result) {
        
//         if (err) {
//         return res.status(500).end();
//         }
//         // Send back the ID of the new burger
//         res.json({ id: result.insertId });
//     });
// });

// // Update a burger
// app.put("/burgers/:id", function(req, res) {
//     connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [req.body.burger, req.params.id], function(err, result) {
//         if (err) {
//             // Generic server failure
//             return res.status(500).end();
//         }
//         else if (result.changedRows === 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         }
//         res.status(200).end();
//     });
// });

// // TO DO Create a PUT request for DEVOUR. which changes the devoured to true.
// // Update a burger
// app.put("/burgers/devour/:id", function(req, res) {
//     console.log(req.params.id);
//     connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [true, req.params.id], function(err, result) {
//         if (err) {
//             // Generic server failure
//             return res.status(500).end();
//         }
//         else if (result.changedRows === 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         }
//         res.status(200).end();
//     });
// });

// // Delete a burger.
// app.delete("/burgers/:id", function(req, res) {
//   connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server failure
//       return res.status(500).end();
//     }
//     else if (result.affectedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();

//     });
// });



// Server listening.
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});