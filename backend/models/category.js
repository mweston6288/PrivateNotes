module.exports = function (sequelize, DataTypes) {
	const Category = sequelize.define("Category", {
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true
		},
		Title: DataTypes.TEXT
	});

	Category.associate = function (models) {
		Category.belongsTo(models.Users, {
			foreignKey: {
				allowNull: false
			}
		}),
		Category.belongsToMany(models.Notes,{
			through: models.Notes_Category,
			foreignKey: "categoryId"
		})

	};
	return Category;

}