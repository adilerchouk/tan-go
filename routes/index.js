var express = require('express');
var router = express.Router();
var http = require('http');

var request = require("request")

var url_arrets = "http://open_preprod.tan.fr/ewp/arrets.json"

request({
  url: url_arrets,
  json: true
}, function (error, response, body) {

  if (!error && response.statusCode === 200) {
    router.get('/', function (req, res) {
      res.send(response);
      res.end();
    });
  }
});

module.exports = router;
