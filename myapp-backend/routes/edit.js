var express = require('express');
var router = express.Router();

var Document = require('../documents');
exports.edit = function (req, res) {
	Document.editDocumentById(function (err, findDocumentById) {
		res.findDocumentById('edit', {
			title: req.Document.title,
			body: req.Document.body
		});
	});
	next();
};

module.exports = router;