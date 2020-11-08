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
		Title: {
			type:DataTypes.TEXT,
			allowNull: false,
			defaultValue:"(No subject)"
		},
		Body: {
			type: DataTypes.TEXT,
			allowNull: false
		},
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
		}),
		Notes.belongsToMany(models.Category,{
			through: models.Notes_Category,
			foreignKey: "notesId"
		})
	};
	return Notes;

}