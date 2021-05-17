//AIzaSyDd6ApZHAkVSZUKA7pecy1iox0tXs_gyf0 (api code)
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const { db } = require('./comments');
//import axios from 'axios';
//import React from 'react';



MongoClient.connect('mongodb+srv://koby:vang@cluster0.g5zz2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(client => {
    console.log('connected 1')
    const db = client.db('videos')
    const youtubeMusic = db.collection('videos')
})

app.use (bodyParser.urlencoded({ extended: true }))

app.listen(4000 , function() {
    console.log('listening on 4000')
})

app.get('/videos', (req, res) => {
    db.collection('videos').find().toArray()
    .then(results => {
        console.log(results)
    })
})

app.post('/videos', (req, res) => {
    youtubeMusic.insertOne(req.body)
        .then(result => {
            res.direct('/')
    })
})