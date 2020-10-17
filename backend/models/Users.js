const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = new Sequelize("notes_DB", "root", "", {
	host: "localhost",
	port: 3306,
	dialect: "mysql"
});

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

Users.sync();
module.exports = Users;