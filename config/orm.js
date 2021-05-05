const connection = require("../config/connection.js");
const { query } = require("express");

function objToSql(ob) {
    var arr = [];

    //loop through the keys and push the key/value as a string into arr
    for (var key in ob) {
        var value = ob[key];
        //check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            //if string has spaces, add quotations (Gandalf the Grey => 'Gandalf the Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Gandalf the Grey'} => ["name='Gandalf the Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

const orm = {
    selectAll: function (tableInput, cb) {
        connection.query(`SELECT * FROM ${tableInput};`, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (tableInput, column, value, cb) {
        let queryString = "INSERT INTO " + tableInput;
        queryString += " (";
        queryString += column.toString();
        queryString += ") ";
        queryString += "VALUES (?)";
        console.log(queryString);
        connection.query(queryString, value, (err, result) => {
            if (err) {
                throw err
            }
            cb(result);
        });
    },
    updateOne: function (tableInput, objColVals, condition, cb) {
        let queryString = "UPDATE " + tableInput;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;