const db = require("../models");

module.exports = function (app) {
	app.post("/api/newUser", function (req, res) {

		db.Users.create({
			username: req.body.username,
			password: req.body.password,
		}).then(function (results) {
			const response = {userID: results.dataValues.id, username: results.dataValues.username};
			res.json(response);
			res.end();
		}).catch(function(err){
			res.json(err);
		});
	});
	/*app.get("/api/user", function (req, res) {
		Users.find({}).then(function (results) {
			res.json(results);
		});
	});*/
}