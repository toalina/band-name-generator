'use strict';

// a JSON file looks like this: changed into strings,
// property names have DOUBLE quotes,
// everything else is quoted how you would
// '{"prop":"string", "prop1":2, "propAgain":true}'

var express = require('express');
var bodyparser = require('body-parser');
var Adjective = require('./lib/adjective.js'); //contains the constructor function
var Verb = require('./lib/verb.js');
var Noun = require('./lib/noun.js');
var getRandomWord = require('./lib/getRandomWord.js');
var postRandomWord = require('./lib/postRandomWord.js');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser.json());  // use the json part of bodyparser
app.use(bodyparser.urlencoded({
  extended: true
})); // use it... just copy it for all projects with apps!
app.use(express.static(__dirname + '/app/'));
// static vs dynamic server, we're using a static server
// __dirname: whatever this file is now, start here
// '/app': and a relative path to this app folder


// make an instance of that adjective object
var adjective = new Adjective();

// make an instance of that verb object
var verb = new Verb();

// make an instance of that noun object
var noun = new Noun();

// this endpoint is the /
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// this endpoint is /adjective
app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});
// res.json will make this thing into a JSON object and send it out
// This is an Express method

app.post('/adjective', function(req, res) {
  console.log(req.body); // check to see if post route works and body parser works
  res.json(postRandomWord(req.body.word, adjective));
});
// endpoint is /verb
app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.post('/verb', function(req, res) {
  console.log(req.body); // check to see if post route works and body parser works
  res.json(postRandomWord(req.body.word, verb));
});


// endpoint is /noun
app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.post('/noun', function(req, res) {
  console.log(req.body); // check to see if post route works and body parser works
  res.json(postRandomWord(req.body.word, noun));
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});






