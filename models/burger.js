const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        console.log("all IN burger.JS");
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        console.log("create IN burger.JS");
        console.log("create Cols Vals" , cols, vals);
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    
    update: function(cols, vals, condition, cb) {
        console.log("update IN burger.JS");
        // console.log("objColVals" ,objColVals);
        orm.update("burgers", cols, vals, condition, function(res) {
            cb(res);
        });
    },
    
    delete: function(condition, cb) {
        console.log("DELETE IN burger.JS");
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;