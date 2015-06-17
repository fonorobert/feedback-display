var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var convert = require("./lib/convert.js");
var arrange = require("./lib/arrange.js");
var config = require("./lib/config.js");

var file = config.file;

var object = arrange.byAuthor(convert.toObject(file));

var app = express();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  console.log("Rendering index page");
  res.render('index',
  { title : 'Home', data: object}
  )
});

app.get('/api', function (req, res) {
  console.log("Rendering JSON api");
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(object));
});

app.get('/uh/:uh', function (req, res) {
  this.data = object[req.params.uh];
  this.title = this.data.receiver;
  console.log("Rendering feedbacks for " + title);
  res.render('feedback',
  { title : this.title, data: this.data}
  )
});

app.get('/singlepage', function (req, res) {
  console.log("Rendering singlepage view");
  res.render('singlepage',
  { title : 'All feedbacks', data: object}
  )
});
app.listen(config.port);
