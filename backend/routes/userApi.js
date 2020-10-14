const Users = require("../models/Users.js");

module.exports = function (app) {
	app.post("/api/newUser", function (req, res) {
		console.log(req.body);

		Users.create({
			username: req.body.username,
			password: req.body.password,
		}).then(function (results) {
			res.json(results);
			res.end();
		});
	});
	/*app.get("/api/user", function (req, res) {
		Users.find({}).then(function (results) {
			res.json(results);
		});
	});*/
}