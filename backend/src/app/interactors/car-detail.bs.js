// Repositories
const read = require('../repositories/read');

// Table Names
const tableNames = require('../../lib/table-names');

async function execute(req, res) {
    try {
        let id = req.params.id;
        let carDetail = await read.getDataById(tableNames.cars, id);
        res.send(carDetail || []);
    } catch (error) {
        console.log(error);
        send.status(500);
    }
}

module.exports = {
    execute
}
