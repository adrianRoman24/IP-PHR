module.exports = app => {
    const medic = require("../controller/medic.controller.js");

    var router = require("express").Router();

    // Create a new Medic
    router.post("/", medic.create);

    // Retrieve all Medics
    router.get("/", medic.findAll);

    // Retrieve all published Medics
    router.get("/published", medic.findAllPublished);

    // Retrieve a single Medic with id
    router.get("/:id", medic.findOne);

    // Update a Medic with id
    router.put("/:id", medic.update);

    // Delete a Medic with id
    router.delete("/:id", medic.delete);

    // Delete all Medics
    router.delete("/", medic.deleteAll);

    app.use('/api/medic', router);
};
