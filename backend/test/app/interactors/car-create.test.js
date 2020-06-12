// Test libraries setup
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const tableNames = require('../../../src/lib/table-names');

const create = require('../../../src/app/repositories/create');
const carCreate = require('../../../src/app/interactors/car-create.bs');

const newCar = {
    license_plate: "TST-9999",
    chassi: "999999999",
    renavam: "999999999",
    model: "Test Vehicle",
    company: "Test Company",
    year: 1988
}

describe('Create Car Test', () => {

    it('Should add a new car', async () => {
        let createStub = sinon.stub(create, 'create');
        let stubReturns = Promise.resolve([3]);
        createStub.withArgs(tableNames.cars, newCar).returns(stubReturns);

        let newCarId = await carCreate.execute(newCar);
        expect(newCarId).to.be.eql([3]);
    })
})
