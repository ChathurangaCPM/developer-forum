const express = require('express')
const app =  express()

const mysql = require("mysql")

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password: '',
    database:'forum_app'
})


app.get('/', (req, res)=>{
    res.send('Hello API')
})

app.listen('3001', () => {
    console.log('Running Server..')
})