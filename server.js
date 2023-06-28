const express = require('express');
const path = require('path');
const planetDb = require('./data/planets-db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function (req, res){
  res.send('<h1>Hello World</h1>')
})

app.listen(3000, function(){
  console.log('Listening on port 3000');
})

app.get('/home', function(req, res){
  res.render('home');
})

app.get('/', function (req, res){
  res.redirect('/home');
})

app.get('/planets', function (req, res){
  res.render('planets/index', {
    planets: planetDb.getAll()
  });
})
