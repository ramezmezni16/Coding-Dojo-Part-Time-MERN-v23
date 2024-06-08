const Joke = require('../models/jokes.model');

const getAllJokes = (req, res) => {
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.status(400).json({ error: err }));
};

const getJokeById = (req, res) => {
    Joke.findById(req.params.id)
        .then(joke => res.json(joke))
        .catch(err => res.status(400).json({ error: err }));
};

const createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.status(400).json({ error: err }));
};

const updateJoke = (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.status(400).json({ error: err }));
};

const deleteJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then(deletedJoke => res.json(deletedJoke))
        .catch(err => res.status(400).json({ error: err }));
};

const getRandomJoke = (req, res) => {
    Joke.aggregate([{ $sample: { size: 1 } }])
        .then(randomJoke => res.json(randomJoke[0]))
        .catch(err => res.status(400).json({ error: err }));
};

module.exports = { getAllJokes, getJokeById, createJoke, updateJoke, deleteJoke, getRandomJoke };