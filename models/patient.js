module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define("patient", {
        cnp: Sequelize.STRING,
        name: Sequelize.STRING,
        surname: Sequelize.STRING,
        birth_date: Sequelize.DATE,
        sex: Sequelize.STRING,
        address: Sequelize.STRING
    });

    return Patient;
};
