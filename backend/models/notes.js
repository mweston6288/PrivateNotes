/*
	Data model for saved notes. Notes contain an id, Title, Body, and owner
*/
const Sequelize = require ("sequelize");
const sequelize = new Sequelize("notes", "root", "", {
	host: "localhost",
	port: 3306,
	dialect: "mysql"
});



const Notes = sequelize.define("Notes",{
	id: {
		type: DataTypes.NUMBER,
		autoincrement: true
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