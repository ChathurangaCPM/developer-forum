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

app.psot('/api/insert', (req, res)=>{
    const getTitle  =   req.body.title;
    const getDescription = req.body.description;
    const getType = req.body.type;
    console.log(getTitle);
    // const sqlInsert = "INSERT INTO questions (title, description, type) VALUES (?, ?, ?);";
    // db.query(sqlInsert,[getTitle, getDescription, getType], (error, results) => {
    //     console.log(error);
    // });
   
});

app.listen('3001', () => {
    console.log('Running Server..');
});