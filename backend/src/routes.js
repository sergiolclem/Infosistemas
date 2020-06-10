const express = require('express');

const routes = express.Router();

/** 
 * Recursos CRUD 
*/
routes.get('/', (req, res) => {
    return res.send('teste inicial')
})

module.exports = routes;
