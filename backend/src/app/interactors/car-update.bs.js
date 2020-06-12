// Repositories
const update = require('../repositories/update');

// Table Names
const tableNames = require('../../lib/table-names');

async function execute(carToUpdate) {
    try {
        let response = await update.update(tableNames.cars, carToUpdate);
        let statusOk = 200, statusNotFound = 404;
        return response ? statusOk : statusNotFound;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    execute
}
