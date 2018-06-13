var express = require('express');
var router = express.Router();

var Document = require('../documents');
exports.index = function (req, res, next) {
  Document.allDocuments(function (err, document) {
    res.render('index', {
      title: req.document.title,
      body: req.document.body
    });
  });
  next();
};

module.exports = router;
