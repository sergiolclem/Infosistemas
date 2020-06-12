// Repositories
const read = require('../repositories/read');

// Table Names
const tableNames = require('../../lib/table-names');

async function execute() {
    try {
        return await read.getList(tableNames.cars);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    execute
}
