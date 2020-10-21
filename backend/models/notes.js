/**
 * Data model for saved notes. 
 * Notes contain an id, Title, Body, and owner
 */

module.exports = function (sequelize, DataTypes) {
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

	Notes.associate = function (models) {
		Notes.belongsTo(models.Users, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Notes;

}