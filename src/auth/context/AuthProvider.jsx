import { useReducer } from "react";
import { AuthContext } from "./AuhContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

/* const inicialState = {
    logged:false,
    user: null, // Inicialmente el usuario no está logueado
} */

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged:!!user,
        user:user
    }
}
export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {},init);//aqui se pasaba {} inicialState pero ya no se usa
    
    //se cambio el codigo de este archivo
    

    const login = (name = '') => {
      const user = {id:'abs',name}

        const action = {
            type:types.login,
            payload:user
        }
        localStorage.setItem('user',JSON.stringify(user));
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