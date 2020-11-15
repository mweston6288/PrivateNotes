/**
 * Database model for note categories. Each category belongs to a user 
 * and each category can be associated with 0 or more notes
 *  
 */

module.exports = function (sequelize, DataTypes) {
	const Categories = sequelize.define("Categories", {
		categoryId: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true
		},
		title: DataTypes.TEXT
	});

	Categories.associate = function (models) {
		// Many-to-one relation to Users
		Categories.belongsTo(models.Users, {
			foreignKey: "userId"
		}),
		// Many-to-many relation with Notes
		Categories.belongsToMany(models.Notes,{
			through: models.Notes_Category,
			foreignKey: "categoryId"
		})

	};
	return Categories;

}