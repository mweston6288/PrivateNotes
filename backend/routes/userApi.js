/**
 * API routes related to users
 */
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
	// create a new user account
	// If successful, return the user id and name
	// If username already exists, return the error instead
	app.post("/api/newUser", function (req, res) {
		db.Users.create({
			username: req.body.username,
			password: req.body.password,
		}).then(function (results) {
			const response = {userID: results.dataValues.id, username: results.dataValues.username};
			res.json(response);
			res.end();
		}).catch(function(err){
			res.json(err);
		});
	});
	// Using the passport.authenticate middleware with our local strategy.
	// If the user has valid login credentials, send them to the user page.
	// Otherwise the user will be sent an error
	app.post("/api/user", passport.authenticate("local"), function (req, res) {
		const response = {userID: req.user.dataValues.id, username: req.user.dataValues.username}
		res.json(response);
	});
	app.put("/api/user", passport.authenticate("local"), function(req,res){
		db.Users.update({
			password: req.body.newPassword
		},{
			where: {
				id:req.body.userId
			}
		}).then((response)=>{
			res.json(response);
		})
	})
}