// REST API = Representational State Transfer
//CRUD operation

const express = require('express');
const ejs = require('ejs');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./src/routes/users.js")

const app = express();

app.set('view engine', "ejs");

app.use(bodyParser.urlencoded());
app.use(userRoutes);    //connecting all routes to nodejs 

app.get('/', (req, res) => {
    res.send("This is node Server");
})



app.listen(process.env.PORT, (err) => {
    if (!err) {
        mongoose
            .connect(process.env.MONGODB_URL)
            .then(() => console.log("Server is up"))
            .catch((err) => {
                console.log("error in connecting to database");
            });
    }
})