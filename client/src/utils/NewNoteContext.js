import React, { useReducer, useContext, createContext } from "react";

const NewNoteContext = createContext();
const { Provider } = NewNoteContext;

const reducer = (state, action) => {
	switch (action.type) {
		case "title":
			return ({ ...state, Title: action.data });

		case "body":
			return ({ ...state, Body: action.data});
		case "update":
			return ({ ...state, Title: action.data.Title, Body: action.data.Body, noteId: action.data.id})
		default:
			return ({ ...state });

	}
};


// eslint-disable-next-line no-unused-vars
const NewNoteProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		Title:"",
		Body:"",
		noteId:""
	});
	return <Provider value={[state, dispatch]}{...props} />;
};
const useNewNoteContext = () => {
	return useContext(NewNoteContext);
};
export { NewNoteProvider, useNewNoteContext };
