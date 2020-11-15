/**
 * API calls associated with notes_category
 */

const db = require("../models");

module.exports = function (app) {
	// Associate a note with a category
	app.post("/api/noteCategory", function (req, res) {
		db.Notes_Category.create({
			notesId: req.body.notesId,
			categoryId: req.body.categoryId
		}).then(function (results) {
			res.json(results);
			res.end();
		});
	});
}