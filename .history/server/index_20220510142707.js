const express = require('express');
const app =  express();
const bodyParser = require('body-parser');

const mysql = require("mysql");

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password: '',
    database:'forum_app'
});

app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/insert', (req, res)=>{
    const getTitle  =   req.body.title;
    const getDescription = req.body.description;
    const getType = req.body.type;

    const sqlInsert = "INSERT INTO questions (title, description, type) VALUES (?, ?, ?);";
    db.query(sqlInsert,[getTitle, getDescription, getType], (error, results) => {
        res.send('Data Inserted');
    });
   
});

app.listen('3001', () => {
    console.log('Running Server..');
});