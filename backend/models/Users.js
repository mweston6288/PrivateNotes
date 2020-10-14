const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("notes_DB", "root", "", {
	host: "localhost",
	port: 3306,
	dialect: "mysql"
});

const Users = sequelize.define("Users",{
	username: DataTypes.STRING,
	password: DataTypes.STRING
})

Users.sync();
module.exports = Users;