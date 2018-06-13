var express = require('express');
var router = express.Router();

var Document = require('../documents');
exports.delete = function (req, res) {
	Document.delete(function (err, deleteDocumentById) {
		res.deleteDocumentById('delete', {
			title: req.Document.title,
			body: req.Document.body
		});
	});
};

module.exports = router;