"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const Article = require('../models/article');

const router = express.Router();
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


router.get('/articles', (req, res) => {
    Article.find({}, (err, articles) => {
        if(err){
            return res.status(400).json({status: false, message: "Error while fetching articles", error: err});
        }
        res.send({status:true, articles});
    });
});

router.post('/articles', (req, res) => {
    let body = req.body;
    let article = new Article();
    article = body;

    article.save((err, )=>{
        if (err) {
            return res.status(400).json({status: false, message: "Error inserting articles", error: err});
        }
        else{
            res.send({status: true, message: "Articles inserted", article});
        }
    });
});

router.post('/articles/edit/:id', (req, res) => {

    let article ={};
    let body = req.body;
    article = body;

    let query = {_id: req.params.id};

    Article.update(query, article, function (err) {
        if (err) {
            return res.status(400).json({status: false, message: "Error while updating articles", error: err});
        }
        else{
            res.send({status: true, message: "Articles Updated", article});
        }
    });
});

router.delete('/articles/delete/:id', (req, res) => {
    let query = {_id: req.params.id};
    Article.remove(query, (err) => {
        if (err) {
            return res.status(400).json({status: false, message: "Error while deleting articles", error: err});
        }
        else{
            res.send({status: true, message: "Article Deleted"});
        }
    });
});


module.exports = router;
