# PrivateNotes
Goal: This will be an app that lets users create, save,and organize notes.

This is made as a class assignment.

## Current Status
New Note field created
Save Button created
Note database created
User can create an account but cannot currently log into a new one

## Next steps
Enable login
Find notes based on user

## TO-DO
[x] create database
[x] create main body
[x] create saved notes page
[x] Add a user database
[x] Create a user context
[] Update login context
[] Update notes GET

## Components
* Server.js: Manages communication between front and backend. Connects the API routes with the React build files
* backend/models: Stores the database models. Uses Sequelize for construction and sanitation
* backend/models/notes;js: Sequelize model for saved notes. Outlines fields and default fields. On activation, it creates a Notes table.
* backend/routes: Files for API connections. Organized into files of related API calls
* backend/routes/notesApi.js: Uses notes model file. Handles API calls realted to notes
* client/public: React-created frontend code
* client/src: all React elements made for the application
* client/src/components: Contains the React elements that make web objects
* client/src/components/newNotes: Components associated with the new notes section
* client/src/components/newNotes/NewNote.js: An input field that user can use to write a note. Stores the note contents in a state. Contains a SaveButton component
* client/src/components/newNotes/SaveButton.js: Produces a button component. Uses the SavedNotesContext. On click, makes a POST request to the Notes table and updates SavedNotesContext to require an update.
* client/src/components/savedNotes: Components associated with displaying saved notes
* client/src/components/savedNotes/Note.js: Receives a single Notes database object from savedNotes and displays the note
* client/src/components/savedNotes/SavedNotes.js: Container to display all notes. Uses the SavedNotesContext and has 0 or more Note objects. If SavedNotesContext requires an update, SavedNotes makes a GET request from Notes table. Then creates a Note object for each element returned.
* client/src/uitls: Contains React elements that store data used acroos multiple components
* client/src/utils/SavedNotesContext.js: Used by SaveButton and SavedNotes. When SaveButton saves a note, SavedNoteContext updates so SavedNotes is aware it needs to make a new API call.
* client/app.js: Primary React component. Has SavedNotesContext, NewNote, and SavedNotes components