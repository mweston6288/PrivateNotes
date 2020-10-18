const bcrypt = require("bcrypt");


module.exports = function (sequelize, DataTypes) {

const Users = sequelize.define("Users",{
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: DataTypes.STRING,
		set(value) {
			const hash = bcrypt.hashSync(value, 10);
			this.setDataValue('password', hash);
		}
	}
})
return Users;
}