// Interactors
const carCreate = require('../interectors/car-create.bs');
const carList = require('../interectors/car-list.bs');
const carDetail = require('../interectors/car-detail.bs');
const carUpdate = require('../interectors/car-update.bs');
const carDelete = require('../interectors/car-delete.bs');

function createCar(req, res) {
    try {
        carCreate.execute(req, res);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

function listCars(req, res) {
    try {
        carList.execute(req, res);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

function getCar(req, res) {
    try {
        carDetail.execute(req, res);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

function updateCar(req, res) {
    try {
        carUpdate.execute(req, res);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

function deleteCar(req, res) {
    try {
        carDelete.execute(req, res);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

module.exports = {
    createCar,
    listCars,
    getCar,
    updateCar,
    deleteCar
}
