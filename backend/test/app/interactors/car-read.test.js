// Test libraries setup
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const tableNames = require('../../../src/lib/table-names');

const read = require('../../../src/app/repositories/read');
const carList = require('../../../src/app/interactors/car-list.bs');
const carDetail = require('../../../src/app/interactors/car-detail.bs');

const carId = 615;

const returnedData = [
    {
        "entitie_id": 12,
        "first_property": "this is the first property",
        "second_property": "this is the second property",
        "nth_property": "this is the nth property",
    },
    {
        "entitie_id": 13,
        "first_property": "this is the first property",
        "second_property": "this is the second property",
        "nth_property": "this is the nth property",
    }
]

describe('Read Cars Test', () => {

    it('Should returns an existing cars list', async () => {
        let getListStub = sinon.stub(read, 'getList');
        let stubReturns = Promise.resolve(returnedData);
        getListStub.withArgs(tableNames.cars).returns(stubReturns);

        let returnedCarList = await carList.execute();
        expect(returnedCarList).to.be.equal(returnedData);
    })

    it('Should returns an existing car', async () => {
        let getCarDetailStub = sinon.stub(read, 'getDataById');
        let stubReturns = Promise.resolve(returnedData[0]);
        getCarDetailStub.withArgs(tableNames.cars, carId).returns(stubReturns);

        let returnedCarDetail = await carDetail.execute(carId);
        expect(returnedCarDetail).to.be.equal(returnedData[0])
    })
})
