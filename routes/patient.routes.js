module.exports = app => {
    const patient = require("../controllers/patient.controller.js");

    var router = require("express").Router();

    // Create a new Patient
    router.post("/", patient.create);

    // Retrieve all Patients
    router.get("/", patient.findAll);

    // Retrieve all published Patients
    router.get("/published", patient.findAllPublished);

    // Retrieve a single Patient with id
    router.get("/:id", patient.findOne);

    // Update a Patient with id
    router.put("/:id", patient.update);

    // Delete a Patient with id
    router.delete("/:id", patient.delete);

    // Delete all Patients
    router.delete("/", patient.deleteAll);

    app.use('/api/patient', router);
};
