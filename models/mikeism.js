const orm = require("../config/orm.js");

const mikeism = {
    all: function (cb) {
        orm.selectAll("mikeisms", function (res) {
            cb(res);
        });
    },
    create: function (column, value, cb) {
        orm.insertOne("mikeisms", column, value, function (res) {
            cb(res);
        })
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne("mikeisms", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = mikeism;