import { useReducer } from "react";
import { AuthContext } from "./AuhContext";
import { authReducer } from "./authReducer";

const inicialState = {
    logged:false,
}

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, inicialState);
  
    const login = (user) => {
      dispatch({ type: "LOGIN", payload: user });
    };
  
    const logout = () => {
      dispatch({ type: "LOGOUT" });
    };
  
    return (
      <AuthContext.Provider value={{ authState, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };