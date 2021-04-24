module.exports = app => {
    const patient = require("../controller/patient.controller.js");

    var router = require("express").Router();

    // Create a new Patient
    router.post("/", patient.create);

    app.use('/api/patient', router);
};
