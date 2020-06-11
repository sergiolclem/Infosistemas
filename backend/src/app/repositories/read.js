const connection = require('../../infra/database/connection');

async function getList(table) {
    try {
        return await connection(table).select('*');
    } catch (error) {
        console.log(error);
    }
}

async function getDataById(table, id) {
    try {
        let car = await connection(table).where('id', id).first();
        return car;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getList,
    getDataById
}
