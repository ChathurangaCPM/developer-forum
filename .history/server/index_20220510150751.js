const express = require('express');
const app =  express();
const bodyParser = require('body-parser');
const cors = require('cors');

const mysql = require("mysql");

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password: '',
    database:'forum_app'
});

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));

app.post('/api/insert', (req, res)=>{
    const sqlInsert = "INSERT INTO questions (title, description, type) VALUES (?, ?, ?);";

    db.query(sqlInsert, (error, results) => {
        console.log(error);
    });
   
});


// Get all data
app.get('/api/get', (reg, res)=>{
    const sqlSelect = "SELECT * FROM questions;";

    db.query(sqlSelect,[getTitle, getDescription, getType], (error, results) => {
        console.log(error);
    });
})


app.listen('3001', () => {
    console.log('Running Server..');
});