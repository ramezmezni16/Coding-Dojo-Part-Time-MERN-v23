const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const dbUri = `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@${process.env.CLUSTER_ADDRESS}/${process.env.DB}?retryWrites=true&w=majority`;

mongoose.connect(dbUri)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB", err));

const jokeRoutes = require('./routes/jokes.routes');
app.use('/api', jokeRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
