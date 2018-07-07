var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.send('H3llooooo00000 world!!!!!!!');
});

app.listen(3000, function() {
  console.log('App running on port 3000!');
});
