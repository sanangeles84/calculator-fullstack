"use strict";

var properties = require("../../package.json");

var controllers = {
	help: function (req, res) {
		var help = {
			about: "http://" + req.headers.host + "/about",
			sum: "http://" + req.headers.host + "/sum/:num1/:num2",
			sum: "http://" + req.headers.host + "/sum/:num1/:num2",
			subtract: "http://" + req.headers.host + "/subtract/:num1/:num2",
			multiply: "http://" + req.headers.host + "/multiply/:num1/:num2",
			divide: "http://" + req.headers.host + "/divide/:num1/:num2",
			sum_example: "http://" + req.headers.host + "/sum/5678/1234",
			subtract_example:
				"http://" + req.headers.host + "/subtract/5678/1234",
			multiply_example:
				"http://" + req.headers.host + "/multiply/5678/1234",
			divide_example: "http://" + req.headers.host + "/divide/5678/1234",
		};
		res.json(help);
	},
	about: function (req, res) {
		var aboutInfo = {
			name: properties.name,
			version: properties.version,
		};
		res.json(aboutInfo);
	},
	sum: function (req, res) {
		var result = {
			result: parseFloat(req.params.num1) + parseFloat(req.params.num2),
		};
		res.status(200).json(result);
	},
	subtract: function (req, res) {
		var result = {
			result: parseFloat(req.params.num1) - parseFloat(req.params.num2),
		};
		res.status(200).json(result);
	},
	multiply: function (req, res) {
		var result = {
			result: parseFloat(req.params.num1) * parseFloat(req.params.num2),
		};
		res.status(200).json(result);
	},
	divide: function (req, res) {
		let result;
		let status = 200;
		if (req.params.num2 === "0") {
			status = 400;
			result = "Illegal Operation: Cannot divide by 0";
		} else
			result = parseFloat(req.params.num1) / parseFloat(req.params.num2);
		let resultJson = {
			result: result,
		};
		res.status(status).json(resultJson);
	},
};

module.exports = controllers;
