const { Router } = require('express');
const routeCharacters = require('./characters.js')
const router = Router();

console.log("Entra 0")

router
    .use('/characters', routeCharacters);

module.exports = router;
