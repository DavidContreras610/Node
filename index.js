var express = require('express');
var app = express();
var port = 3000;

app.listen(port,function(){
    console.log('listening to port',port);
})

app.get('/home',function(req,res){
    res.sendFile('./home.html',{root: __dirname})

})
// 
app.get('/about',function(req,res){
    res.sendFile('./about.html',{root: __dirname})

})

app.get('/contact',function(req,res){
    res.sendFile('./contact.html',{root: __dirname})

})

app.get('/',function(req,res){
    res.sendStatus(401)

})
