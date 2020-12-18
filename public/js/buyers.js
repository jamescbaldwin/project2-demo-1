const Item = require("../models");
module.exports = function(app) {
    app.get("/api/all", (req, res) => {
        Item.findAll({}).then(function(results) {
            res.json(results);
        });
    });
};