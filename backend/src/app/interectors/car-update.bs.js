// Repositories
const update = require('../repositories/update');

// Table Names
const tableNames = require('../../lib/table-names');

async function execute(req, res) {
    try {
        const { id, license_plate, chassi, renavam, model, company, year } = req.body;
        let response = await update.update(tableNames.cars, {
            id,
            license_plate,
            chassi,
            renavam,
            model,
            company,
            year
        });
        response ? res.sendStatus(200) : res.sendStatus(404);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

module.exports = {
    execute
}
