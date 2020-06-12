module.exports = {
    extractCarToCreate: req => {
        let { license_plate, chassi, renavam, model, company, year } = req.body;
        return { license_plate, chassi, renavam, model, company, year };
    },

    extractId: req => {
        return req.params.id;
    },
    extractCarToUpdate: req => {
        let { id, license_plate, chassi, renavam, model, company, year } = req.body;
        return { id, license_plate, chassi, renavam, model, company, year };
    }
}