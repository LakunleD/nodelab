"use strict";
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const ArticleRoutes = require("./routes/ArticleRoutes");

mongoose.connect(process.env.MONGODB_URL);
let db = mongoose.connection;

const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(ArticleRoutes);

//check connection
db.once('open', function () {
    console.log('connected to mongodb');
    app.listen(3000, function() {
        console.log('server is running at port 3000');
    });
});

//check for error
db.on('error', function (err) {
    console.log(err);
});

