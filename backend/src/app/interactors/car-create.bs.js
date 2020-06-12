// Repositories
const create = require('../repositories/create');

// Table names
const tableNames = require('../../lib/table-names');

async function execute(car) {
    try {
        let newCarId = await create.create(tableNames.cars, car)
        return newCarId;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    execute
}
