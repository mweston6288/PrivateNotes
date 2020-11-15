# PrivateNotes
Goal: This will be an app that lets users create, save,and organize notes.

THis application uses React.js and Sequelize

This is made as a class assignment.

## Capabilities
Users can create an account that uses a username and password login.
Users can create and save notes which are linked to their account.
Users can edit any saved notes and save them.
Users can create categories to save their notes into.
Users can change their password.


## Setup
This application requires Node.js and MySQL to install and run locally. 
For Node.js, you can go to [https://github.com/mweston6288/PrivateNotes.git]
For MySQL, you can install MySQL Workbench: [https://www.mysql.com/products/workbench/]
You will also need to create a databse in mySQL using the command 'CREATE DATABASE IF NOT EXISTS notes_DB'

After installing, open your terminal and use the command 'git clone https://github.com/mweston6288/PrivateNotes.git' to download a copy of the Private Notes source code.
Finally 'cd PrivateNotes' to enter the directory, 'npm run setup' to install all dependencies and 'npm run start' to run the application.
You can use the application by opening a web browser and going to 'localhost:8080'

## Future additions
Let users delete notes and categories
Add security questions for account recovery
Let users delete their account

## Components
### Backend components
Backend is divided into three folders: config, models, and routes
* config: contains the config details needed to setup the database and authenticate users
* models: contains the sequelize models for the various database tables
* routes: the api routing paths, organized by table

### Client components
Front end compoenets made using React. Aside from /src, all files are the default files made using react init.
* /src/components: contains the HTML creating components. All folders contain their main and sub components
* /src/utils: contains non-html creating components. Each file stores an object that any component can access
