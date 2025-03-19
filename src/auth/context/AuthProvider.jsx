import { useReducer } from "react";
import { AuthContext } from "./AuhContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const inicialState = {
    logged:false,
    user: null, // Inicialmente el usuario no está logueado
}

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, inicialState);
    
    //se cambio el codigo de este archivo

    const login = (name = '') => {
        const action = {
            type:types.login,
            payload:{
                id:'abs',
                name:name
            }
        }
        dispatch(action);
    };

 
    return (
      <AuthContext.Provider value={{ 
        ...authState,
        login:login,
         }}>
        {children}
      </AuthContext.Provider>
    );
  };