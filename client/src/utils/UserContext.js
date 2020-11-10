import React, { useReducer, useContext, createContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
	switch (action.type){
	case "login":
		return ({...state, LoggedIn: true, Username: action.data.username, UserID: action.data.userID});
	case "categories":{
		return ({ ...state, categories: action.data});
	}
	case "categoryAdd":{
		state.categories.push(action.data)
		return ({ ...state});
	}
	case "logout":{
			return ({ ...state, LoggedIn:false, Username:"",UserID:"", categories:[] });

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
