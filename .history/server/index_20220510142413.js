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

app.use(buddyParser.urlencoded({extended:true}))

app.get('/api/insert', (req, res)=>{
    const sqlInsert = "INSERT INTO questions (title, description, type) VALUES ('Test DB', 'Test description', 'React JS');";
    db.query(sqlInsert, (error, results) => {
        res.send('Data Inserted');
    });
   
});

app.listen('3001', () => {
    console.log('Running Server..');
});