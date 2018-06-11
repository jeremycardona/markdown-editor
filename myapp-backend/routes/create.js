var express = require('express');
var router = express.Router();

var documentdata = require('../documents');
exports.create = function (req, res) {
	documentdata.create(function (err, create) {
		res.create('create', {
			title: req.documentdata.dtitle,
			body: req.documentdata.dbody
		});
	});
};

module.exports = router;