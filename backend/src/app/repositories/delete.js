const connection = require('../../infra/database/connection');

async function del(table, id) {
    try {
        return await connection(table).where('id', id).del();
    } catch (error) {
        console.log(error);       
    }
}

module.exports = {
    del
};
