// Interactors
const carCreate = require('../interactors/car-create.bs');
const carList = require('../interactors/car-list.bs');
const carDetail = require('../interactors/car-detail.bs');
const carUpdate = require('../interactors/car-update.bs');
const carDelete = require('../interactors/car-delete.bs');

module.exports = {
    createCar: (req, res) => {
        try {
            carCreate.execute(req, res);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    },

    listCars: (req, res) => {
        try {
            carList.execute(req, res);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    },

    getCar: (req, res) => {
        try {
            carDetail.execute(req, res);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    },

    updateCar: (req, res) => {
        try {
            carUpdate.execute(req, res);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    },

    deleteCar: (req, res) => {
        try {
            carDelete.execute(req, res);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }
}
