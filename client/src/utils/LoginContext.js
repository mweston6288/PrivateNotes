import React, { useReducer, useContext, createContext } from "react";

const LoginContext = createContext();
const { Provider } = LoginContext;

const reducer = (state, action) => {
	switch (action.type){
	case "reset":{
		return({...state,username: "", password:"", confirmPassword:""});
	}
	case "username":{
		return ({ ...state, username: action.username });

	}
	case "password":{
		return ({ ...state,password: action.password });

	}
	case "confirmPassword":{
		return ({ ...state,confirmPassword: action.confirmPassword });

	}
	case "close":{
		return ({ show: false, username: "", password: "", confirmPassword: "" });
	}
	case "show":{
		return ({ show: true, username: "", password: "", confirmPassword: "" });

	}
	default:{
		return({...state});
	}
	}
};


// eslint-disable-next-line no-unused-vars
const LoginProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		show: true,
		username:"",
		password:"",
		confirmPassword:""
	});
	return <Provider value={[state, dispatch]}{...props} />;
};
const useLoginContext = () => {
	return useContext(LoginContext);
};
export { LoginProvider, useLoginContext };
