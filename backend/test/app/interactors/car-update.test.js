// Test libraries setup
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const tableNames = require('../../../src/lib/table-names');

const update = require('../../../src/app/repositories/update');
const carUpdate = require('../../../src/app/interactors/car-update.bs');

const carToUpdate = {
    id: 312,
    license_plate: "TST-0000",
    chassi: "999999999",
    renavam: "999999999",
    model: "Test Updated Vehicle",
    company: "Other Test Company",
    year: 1988
}

describe('Update Data Test', () => {

    it('Should update an existing data', async () => {
        let updateStub = sinon.stub(update, 'update');
        let stubReturns = Promise.resolve(1);
        updateStub.withArgs(tableNames.cars, carToUpdate).returns(stubReturns);

        let updateStatus = await carUpdate.execute(carToUpdate);
        expect(updateStatus).to.be.equal(200);
    })
})
