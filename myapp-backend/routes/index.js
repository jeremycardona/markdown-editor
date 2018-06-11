var express = require('express');
var router = express.Router();

var documentdata = require('../documents');
exports.index = function (req, res) {
  documentdata.allDocuments(function (err, allDocuments) {
    res.render('index', {
      title: allDocuments.dtitle,
      body: allDocuments.dbody
    });
  });
};

module.exports = router;
