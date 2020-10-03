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
	// For now, this will get all saved notes
	// In future, this will filter by user
	app.get("/api/notes", function (req, res) {
		Notes.findAll({}).then(function (results) {
			res.json(results);
		});
	});
}