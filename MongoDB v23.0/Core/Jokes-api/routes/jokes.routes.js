const express = require('express');
const router = express.Router();
const {getAllJokes, getJokeById, createJoke, updateJoke, deleteJoke} = require('../controllers/jokes.controller');

router.get('/jokes', getAllJokes);
router.get('/jokes/:id', getJokeById);
router.post('/jokes', createJoke);
router.patch('/jokes/:id', updateJoke);
router.delete('/jokes/:id', deleteJoke);

module.exports = router;