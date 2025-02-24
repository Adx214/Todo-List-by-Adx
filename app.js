const express = require('express');
const app = express();
const modals = require('./modals/user');
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {connectU,tasku} = require('./config/connectU');
const task = require('./modals/task')
const nocache = require("nocache");
app.use(nocache());


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(router);
app.set("view engine", "ejs");
app.get('/',(req,res)=>{
    res.render('index')
})
app.listen(5000)
