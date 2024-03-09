"use strict";

var controller = require("../controller/calc.controller");

const checkApiKey = (req, res, next) => {
	if (req.headers.authorization?.replace("Bearer ", "") === process.env.API_KEY) {
		console.log(
			"Authorized request:" +
				"\nTime: " +
				new Date().toISOString() +
				"\nip: " +
				req.ip +
				"\noriginalUrl: " +
				req.originalUrl +
				"\n"
		);
		next();
	} else {
		console.log(
			"Rejected request:" + "\nip: " + req.ip + "\noriginalUrl: " + req.originalUrl + "\n"
		);
		res.status(401).send({ status: "Unauthorized" });
	}
};

module.exports = function (app) {
	app.route("/help").get(controller.help);
	app.route("/about").get(controller.about);
	app.route("/sum/:num1/:num2").get(checkApiKey, controller.sum);
	app.route("/subtract/:num1/:num2").get(checkApiKey, controller.subtract);
	app.route("/multiply/:num1/:num2").get(checkApiKey, controller.multiply);
	app.route("/divide/:num1/:num2").get(checkApiKey, controller.divide);
};
