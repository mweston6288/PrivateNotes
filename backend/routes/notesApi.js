/**
 * API routes related to notes
 */
const db = require("../models");

module.exports = function (app) {
	// Post a new note
	app.post("/api/new", function (req, res) {
		console.log(req.body)
		db.Notes.create({
			Title: req.body.Title,
			Body: req.body.Body,
			UserId: req.body.UserId
		}).then(function (results) {
			res.json(results);
			res.end();
		}).catch(function(err){
			res.json(err)
		});
	});
	// For now, this will get all saved notes
	// In future, this will filter by user
	app.get("/api/notes/:id", function (req, res) {
		db.Notes.findAll({
			where: {
				UserId: req.params.id
			},
			include: {
				model: db.Category,
				attributes: ["Title"]
			},
			order:[
				["updatedAt", "DESC"]
			]
		}).then(function (results) {
			res.json(results);
		});
	});
	app.put("/api/notes", function (req, res) {
		db.Notes.update({
			Title: req.body.Title,
			Body: req.body.Body
			},{
				where: {
					id: req.body.noteId
				}
			}).then(function () {
				db.Notes.findOne({where: {id:req.body.noteId}}).then((response)=>{
					res.json(response);
				})
			}).catch(function(err){
				res.json(err);
			});
	});
};