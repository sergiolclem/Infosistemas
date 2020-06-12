// Repositories
const read = require('../repositories/read');

// Table Names
const tableNames = require('../../lib/table-names');

async function execute(id) {
    try {
        let carDetail = await read.getDataById(tableNames.cars, id);
        return carDetail || [];
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    execute
}
