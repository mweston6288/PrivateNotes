import React, { useReducer, useContext, createContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
	switch (action.type){
	case "login":
		return ({...state, LoggedIn: true, Username: action.data.username, UserID: action.data.userID});
	case "categories":{
		console.log(action.data)
		return ({ ...state, categories: action.data});

	}
	default:
		return ({ ...state });

	}
};


// eslint-disable-next-line no-unused-vars
const UserProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		LoggedIn: false,
		Username:"",
		UserID:"",
		categories:[]
	});
	return <Provider value={[state, dispatch]}{...props} />;
};
const useUserContext = () => {
	return useContext(UserContext);
};
export { UserProvider, useUserContext };
