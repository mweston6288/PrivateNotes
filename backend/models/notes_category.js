/**
 * Link table model for categories and notes. Each entry links a note to a category
 * The notesId and categoryId are the id element in Notes and Category
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
		Notes_Category.belongsTo(models.Notes, {
			foreignKey: "notesId",
			targetKey: "id",
		}),
		Notes_Category.belongsTo(models.Category, {
			foreignKey: "categoryId",
			targetKey: "id",
		})

	};
	return Notes_Category;

}