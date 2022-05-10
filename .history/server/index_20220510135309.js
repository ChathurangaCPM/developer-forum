const express = require('express');
const app =  express();

const mysql = require("mysql");

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password: '',
    database:'forum_app'
});



app.get('/', (req, res)=>{
    const sqlInsert = "INSERT INTO questions (title, description) VALUES ('Test DB', 'Test description);";
    db.query(sqlInsert, (error, results) => {
        res.send('Data Inserted');
        console.log(error);
    });
   
});

app.listen('3001', () => {
    console.log('Running Server..');
});