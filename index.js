// Add express and mongoose
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

//setting up the app
const app = express()

//middleware that makes the server accept data in JSON
app.use(express.json());


// we need to add another middleware to use the route
// here /api refers to the base endpoint
// all our endpoints start from /api
//also note that the path is localhost:3000/api/get
app.use('/api',routes);


//setting up the server to listen on port 3000
app.listen(3000, () => {
    console.log("The app is listening on port 3000")
})

// importing the dburi from .env file
require('dotenv').config();
const mongostring = process.env.DATABASE_URL;

// connecting to the database using mongoose
const database = () => mongoose.connect(mongostring)

database().then((result) => {
    console.log('connected to the database')
}).catch((error) => {
    console.log(error);
})



