const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("client/build"));
const db = require("./backend/models");
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./backend/routes/notesApi")(app);
require("./backend/routes/userApi")(app);

// Start our server so that it can begin listening to client requests.

db.sequelize.sync({force:true}).then(() => {
	app.listen(PORT, () => {
		console.log("App listening on Port " + PORT);
	});
});
