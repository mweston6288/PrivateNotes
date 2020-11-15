/**
 * API routes related to notes
 */
const db = require("../models");

module.exports = function (app) {
	// Create a new note
	app.post("/api/newNote", function (req, res) {
		db.Notes.create({
			title: req.body.title,
			body: req.body.body,
			userId: req.body.userId
		}).then(function (results) {
			res.json(results);
			res.end();
		}).catch(function(err){
			res.json(err)
		});
	});
	// get notes associated to a specific userId
	app.get("/api/notes/:userId", function (req, res) {
		db.Notes.findAll({
			where: {
				UserId: req.params.userId
			},
			// include an array of all the cateogires each note is associated with
			include: {
				model: db.Categories,
				attributes: ["title"]
			},
			// return results in order of last updated
			order:[
				["updatedAt", "DESC"]
			]
		}).then(function (results) {
			res.json(results);
		});
	});
	// update a note
	app.put("/api/notes", function (req, res) {
		db.Notes.update({
			title: req.body.title,
			body: req.body.body
			},{
				where: {
					notesId: req.body.noteId
				}
			}).then(function () {
				// return the updated note
				db.Notes.findOne({where: {notesId:req.body.noteId}})
				.then(function(response){
					res.json(response);
				})
			}).catch(function(err){
				res.json(err);
			});
	});
};