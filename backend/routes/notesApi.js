const Notes = require("../models/notes");

module.exports = function (app) {
	app.post("/api/new", function (req, res) {

		console.log(req.body);

		Notes.create({
			Title: req.body.Title,
			Body: req.body.Body,
		}).then(function (results) {
			res.end();
		});

	});
}