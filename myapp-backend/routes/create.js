var express = require('express');
var router = express.Router();

var Document = require('../documents');
exports.create = function (req, res, next) {
	var document = new Document();
	document.createDocument(function (err, createdocument) {
		res.createdocument('create', {
			title: req.document.title,
			body: req.document.body
		});
	});
	next();
};

module.exports = router;