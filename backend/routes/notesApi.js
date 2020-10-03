const Notes = require("../models/notes.js");

module.exports = function (app) {
	app.post("/api/new", function (req, res) {


		Notes.create({
			Title: req.body.Title,
			Body: req.body.Body,
		}).then(function (results) {
			res.end();
		});

	});
}