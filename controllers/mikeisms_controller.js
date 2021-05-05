const express = require("express");
const router = express.Router();
const mikeism = require("../models/mikeism.js");

router.get("/", (req, res) => {
    mikeism.all(function (data) {
        let hbsObject = {
            mikeism: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/mikeisms", (req, res) => {
    mikeism.create("name", req.body.name, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/mikeisms/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    mikeism.update({
        understood: req.body.understood
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;