// EXPRESS
var express = require("express");
var app = express();

// PORT for application to use
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




// MySQL
var mysql = require("mysql");
let connection; 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// module.exports = connection;




// Use Handlebars to render the main index.html page with the todos in it.
app.get("/", function(req, res) {
    console.log("get function called")
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
        return res.status(500).end();
        }
        console.log("data:", data);
        // if (!devoured){put in not devoured}
        // if (devoured){put in devoured}
        res.render("index", { burgers: data });
    });
});

// Create a new burger
app.post("/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [req.body.burger, false], function(err, result) {
        
        if (err) {
        return res.status(500).end();
        }
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

// Update a burger
app.put("/burgers/:id", function(req, res) {
    connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [req.body.burger, req.params.id], function(err, result) {
        if (err) {
            // Generic server failure
            return res.status(500).end();
        }
        else if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

// TO DO Create a PUT request for DEVOUR. which changes the devoured to true.
// Update a burger
app.put("/burgers/devour/:id", function(req, res) {
    console.log(req.params.id);
    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [true, req.params.id], function(err, result) {
        if (err) {
            // Generic server failure
            return res.status(500).end();
        }
        else if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

// Delete a burger.
app.delete("/burgers/:id", function(req, res) {
  connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

    });
});

// Server listening.
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});