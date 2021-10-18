const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const path= require('path');


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));
app.use( express.static( "public" ) );

app.get('/home',(req,res)=>{
    res.render("home");
})
app.get('/Cuisines',(req,res)=>{
    res.render("Cuisines");
})
app.get('/Special',(req,res)=>{
    res.render("Special");
})
app.get('/Contacts',(req,res)=>{
    res.render("Contacts");
})

//const hostname='127.0.0.1';
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/home`);
})
