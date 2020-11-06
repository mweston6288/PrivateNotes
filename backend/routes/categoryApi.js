/**
 * API routes related to categories
 */
const db = require("../models");

module.exports = function (app) {
	// Post a new category
	app.post("/api/newCategory", function (req, res) {
		db.Category.create({
			Title: req.body.Title,
			UserId: req.body.UserId
		}).then(function (results) {
			res.json(results);
			res.end();
		});
	});
	// Get categories owned by a user
	app.get("/api/categories/:Userid", function (req, res) {
		db.Category.findAll({
			where: {
				UserId: req.params.Userid
			}
		}).then(function (results) {
			res.json(results);
		});
	});
}