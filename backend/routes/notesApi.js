/**
 * API routes related to notes
 */
const db = require("../models");

module.exports = function (app) {
	// Post a new note
	app.post("/api/new", function (req, res) {
		db.Notes.create({
			Title: req.body.Title,
			Body: req.body.Body,
			UserId: req.body.UserId
		}).then(function (results) {
			res.json(results);
			res.end();
		});
	});
	// For now, this will get all saved notes
	// In future, this will filter by user
	app.get("/api/notes/:id", function (req, res) {
		db.Notes.findAll({
			where: {
				UserId: req.params.id
			}
		}).then(function (results) {
			res.json(results);
		});
	});
}