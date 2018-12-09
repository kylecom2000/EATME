const connection = require("./connection");
// const express = require("express");
// var router = express.Router();

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// SQL STATEMENT FUNCTIONS

let orm = {
    all: function(tableInput, cb) {
        console.log("all IN ORM.JS");
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        console.log("create IN ORM.JS");
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            console.log("connection.query")
            if (err) {throw err};
            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {
        console.log("update IN ORM.JS");
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    delete: function(table, condition, cb) {
        console.log("DELETE IN ORM.JS");
        let queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};
module.exports = orm;


// // Object for all our SQL statement functions.
// var orm = {
//   all: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
//   create: function(table, cols, vals, cb) {
//     var queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";

//     console.log(queryString);

//     connection.query(queryString, vals, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   },
//   // An example of objColVals would be {name: panther, sleepy: true}
//   update: function(table, objColVals, condition, cb) {
//     var queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   }
// };

// // Export the orm object for the model (cat.js).
// module.exports = orm;
