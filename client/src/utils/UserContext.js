import React, { useReducer, useContext, createContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
	switch (action.type){
		case "login":
			return ({ LoggedIn: true, Username: action.data.username, UserID: action.data.userID});
		default:
			return ({ ...state });

	}
}


const UserProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		LoggedIn: false,
		Username:"",
		UserID:""
	});
	return <Provider value={[state, dispatch]}{...props} />
}
const useUserContext = () => {
	return useContext(UserContext);
};
export { UserProvider, useUserContext };
