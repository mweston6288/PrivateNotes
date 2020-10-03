/*
	Data model for saved notes. Notes contain an id, Title, Body, and owner
*/

// set up Sequelize data
const {Sequelize, DataTypes} = require ("sequelize");
const sequelize = new Sequelize("notes_DB", "root", "", {
	host: "localhost",
	port: 3306,
	dialect: "mysql"
});



const Notes = sequelize.define("Notes",{
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true
	},
	Title: DataTypes.TEXT,
	Body: DataTypes.TEXT,
	Date: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	}
});

	// TODO: associate notes with owners

	
Notes.sync();

module.exports = Notes;