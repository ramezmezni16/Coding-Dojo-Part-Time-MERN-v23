const express = require('express');
const router = express.Router();
const {getAllJokes, getJokeById, createJoke, updateJoke, deleteJoke} = require('../controllers/jokes.controller');

router.get('/api/jokes', getAllJokes);
router.get('/api/jokes/:id', getJokeById);
router.post('/api/jokes', createJoke);
router.patch('/api/jokes/:id', updateJoke);
router.delete('/api/jokes/:id', deleteJoke);

module.exports = router;