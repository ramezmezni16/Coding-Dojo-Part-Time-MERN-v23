const mongoose = require('mongoose');
require('dotenv').config();
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
console.log(dbName, username, pw);
const uri = `mongodb+srv://${username}:${pw}@YOUR_CONNECTION_STRING_HERE/${dbName}?retryWrites=true&w=majority`;

