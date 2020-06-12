// Repositories
const read = require('../repositories/read');

// Table Names
const tableNames = require('../../lib/table-names');

async function execute(req, res) {
    try {
        let cars = await read.getList(tableNames.cars);
        res.send(cars);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

module.exports = {
    execute
}
