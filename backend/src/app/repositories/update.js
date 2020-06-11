const connection = require('../../infra/database/connection');

async function update(table, data) {
    try {
        return await connection(table).where('id', data.id).update(data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    update
}
