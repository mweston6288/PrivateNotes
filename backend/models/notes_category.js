/**
 * Link table model for categories and notes. Each entry links a note to a category
 */

module.exports = function (sequelize, DataTypes) {
	const Notes_Category = sequelize.define("Notes_Category", {
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true
		},
		notesId: {
			type: DataTypes.INTEGER,
			references:{
				model: "Notes",
				key: "notesId"
			}
		},
		categoryId: {
			type: DataTypes.INTEGER,
			references: {
				model: "Category",
				key: "categoryId"
			}
		}
	});

	Notes_Category.associate = function (models) {
		// Each entry is linked to a single noteId
		Notes_Category.belongsTo(models.Notes, {
			foreignKey: "notesId",
			targetKey: "notesId",
		}),
		// Each entry is linked to a single categoryId
		Notes_Category.belongsTo(models.Categories, {
			foreignKey: "categoryId",
			targetKey: "categoryId",
		})

	};
	return Notes_Category;

}