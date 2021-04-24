module.exports = app => {
    const medic = require("../controller/medic.controller.js");

    var router = require("express").Router();

    // Create a new Medic
    router.post("/", medic.create);

    app.use('/api/medic', router);
};
