// Repositories
const create = require('../repositories/create');

// Table names
const tableNames = require('../../lib/table-names');

async function execute(req, res) {
    try {
        const { license_plate, chassi, renavam, model, company, year } = req.body;
        let queryBuilder = await create.create(tableNames.cars, {
            license_plate,
            chassi,
            renavam,
            model,
            company,
            year
        })
        res.send(queryBuilder)
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

module.exports = {
    execute
}
