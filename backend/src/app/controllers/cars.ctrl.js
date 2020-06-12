// Interactors
const carCreate = require('../interactors/car-create.bs');
const carList = require('../interactors/car-list.bs');
const carDetail = require('../interactors/car-detail.bs');
const carUpdate = require('../interactors/car-update.bs');
const carDelete = require('../interactors/car-delete.bs');

// Utils
const reqUtils = require('../utils/request.util');
const { utils } = require('mocha');

module.exports = {
    createCar: async (req, res) => {
        try {
            let carToCreate = reqUtils.extractCarToCreate(req);
            let newCarId = await carCreate.execute(carToCreate);
            res.send(newCarId);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    },

    listCars: async (req, res) => {
        try {
            let cars = await carList.execute();
            res.send(cars);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    },

    getCar: async (req, res) => {
        try {
            let id = reqUtils.extractId(req);
            let car = await carDetail.execute(id);
            res.send(car);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    },

    updateCar: async (req, res) => {
        try {
            let carToUpdate = reqUtils.extractCarToUpdate(req);
            let status = await carUpdate.execute(carToUpdate);
            res.sendStatus(status);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    },

    deleteCar: async (req, res) => {
        try {
            let id = reqUtils.extractId(req);
            let operationStatus = await carDelete.execute(id);
            res.sendStatus(operationStatus);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }
}
