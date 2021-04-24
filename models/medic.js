module.exports = (sequelize, Sequelize) => {
    const Medic = sequelize.define("medic", {
        cnp: Sequelize.STRING,
        name: Sequelize.STRING,
        surname: Sequelize.STRING,
        birth_date: Sequelize.DATE,
        sex: Sequelize.STRING,
        address: Sequelize.STRING,
        specialization: Sequelize.STRING,
        hospital: Sequelize.STRING,
        salary: Sequelize.FLOAT
    });

    return Medic;
};
