module.exports = app => {
    const patient = require("../controllers/patient.controller.js");

    var router = require("express").Router();

    // Create a new Patient
    router.post("/", patient.create);

    app.use('/api/patient', router);
};
