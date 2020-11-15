/**
 * Data model for saved notes. 
 * Notes contain an id, title, and body; and is associated to a user
 */

module.exports = function (sequelize, DataTypes) {
	const Notes = sequelize.define("Notes",{
		notesId: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true
		},
		title: {
			type:DataTypes.TEXT,
			allowNull: false,
			defaultValue:"(No subject)"
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	});

	Notes.associate = function (models) {
		// Each note belongs to a single User
		Notes.belongsTo(models.Users, {
			foreignKey: "userId"
		}),
		// Each note can be associated to 0 or more categories
		Notes.belongsToMany(models.Categories,{
			through: models.Notes_Category,
			foreignKey: "notesId"
		})
	};
	return Notes;

}