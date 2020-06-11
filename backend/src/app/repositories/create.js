const connection = require('../../infra/database/connection');

async function create(table, data) {
    try {
        return await connection(table).insert(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    create
}
