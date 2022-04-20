const express = require("express");
const { appendFile } = require("fs");
const path = require("path")

const app = express();
const publicPath = path.join(__dirname,"/public");

app.use(express.static(publicPath));

app.listen(3001,() => {
    console.log("Server running");
});

app.get("/" , (req,res) =>{
    res.sendFile(path.join(__dirname,"/views/index.html"));
})

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

