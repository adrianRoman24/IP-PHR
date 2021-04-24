const medic_routes = require('./medic.routes');
const patient_routes = require('./patient.routes');

module.exports = app => {
    medic_routes(app);
    patient_routes(app);
}
