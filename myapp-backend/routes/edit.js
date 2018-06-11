var express = require('express');
var router = express.Router();

var documentdata = require('../documents');
exports.edit = function (req, res) {
	documentdata.edit(function (err, edit) {
		res.edit('edit', {
			title: req.documentdata.dtitle,
			body: req.documentdata.dbody
		});
	});
};

module.exports = router;