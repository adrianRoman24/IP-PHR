const db = require("../models");
const Patient = db.patient;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Medic
    const patient = {
        cnp: req.body.cnp,
        name: req.body.name,
        surname: req.body.surname,
        birth_date: Date(req.body.birth_date),
        sex: req.body.sex,
        address: req.body.address,
    };

    console.log(patient);

    // Save Patient in the database
    Patient.create(patient)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Patient."
            });
        });
};

