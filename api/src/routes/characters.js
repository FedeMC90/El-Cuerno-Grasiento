const { Router } = require('express');
const router = Router();

console.log("Entra 1")

const {
    postCharacter,
    getCharacters, 
} = require('../controllers/index.js')

router
    .post('/', postCharacter)
    .get('/', getCharacters)

module.exports = router;