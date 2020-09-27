/*
	Data model for saved notes. Notes contain an id, Title, Body, and owner
*/

module.exports = function(sequelize, DataTypes) {
	const Notes = sequelize.define("Notes",{
		id: DataTypes.NUMBER,
		Title: DataTypes.STRING,
		Body: DataTypes.STRING
	});

	// TODO: associate notes with owners

	return Notes;
}