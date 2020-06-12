// Repositories
const del = require('../repositories/delete');

// Table Names
const tableNames = require('../../lib/table-names');

async function execute(req, res) {
    try {
        let id = req.params.id;
        let operOk = await del.del(tableNames.cars, id);
        operOk ? res.sendStatus(200) : res.sendStatus(404);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

module.exports = {
    execute
}
