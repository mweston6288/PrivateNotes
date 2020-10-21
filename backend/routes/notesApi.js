/**
 * API routes related to notes
 */
const db = require("../models");

module.exports = function (app) {
	// Post a new note
	// TODO: associate created note with a user
	app.post("/api/new", function (req, res) {
		db.Notes.create({
			Title: req.body.Title,
			Body: req.body.Body,
		}).then(function (results) {
			res.json(results);
			res.end();
		});
	});
	// For now, this will get all saved notes
	// In future, this will filter by user
	app.get("/api/notes", function (req, res) {
		db.Notes.findAll({}).then(function (results) {
			res.json(results);
		});
	});
}