const db = require("../models");
const Medic = db.medic;
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
    const medic = {
        cnp: req.body.cnp,
        name: req.body.name,
        surname: req.body.surname,
        birth_date: Date(req.body.birth_date),
        sex: req.body.sex,
        address: req.body.address,
        specialization: req.body.specialization,
        hospital: req.body.hospital,
        salary: req.body.salary
    };

    console.log(medic);

    // Save Medic in the database
    Medic.create(medic)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Medic."
            });
        });
};

