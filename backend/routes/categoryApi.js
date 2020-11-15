/**
 * API routes related to categories
 */
const db = require("../models");

module.exports = function (app) {
	// Create a new category
	app.post("/api/newCategory", function (req, res) {
		db.Categories.create({
			title: req.body.title,
			userId: req.body.userId
		}).then(function (results) {
			res.json(results);
			res.end();
		});
	});
	// Get categories owned by a user
	app.get("/api/categories/:userId", function (req, res) {
		db.Categories.findAll({
			where: {
				userId: req.params.userId
			}
		}).then(function (results) {
			res.json(results);
		});
	});
}