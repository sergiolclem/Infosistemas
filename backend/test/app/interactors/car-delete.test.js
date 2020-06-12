// Test libraries setup
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const tableNames = require('../../../src/lib/table-names');

const del = require('../../../src/app/repositories/delete');
const carDelete = require('../../../src/app/interactors/car-delete.bs');

const dataId = 615;

describe('Delete Car Test', () => {

    it('Should delete an existing car', async () => {
        let deleteStub = sinon.stub(del, 'del');
        let stubReturns = Promise.resolve(1);
        deleteStub.withArgs(tableNames.cars, dataId).returns(stubReturns);

        let deleteStatus = await carDelete.execute(dataId);
        expect(deleteStatus).to.be.equal(200);
    })
})
