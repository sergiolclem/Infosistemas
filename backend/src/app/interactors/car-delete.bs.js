// Repositories
const del = require('../repositories/delete');

// Table Names
const tableNames = require('../../lib/table-names');

async function execute(id) {
    try {
        let operOk = await del.del(tableNames.cars, id);
        let statusOk = 200, statusNotFound = 404;
        return operOk ? statusOk : statusNotFound;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    execute
}
