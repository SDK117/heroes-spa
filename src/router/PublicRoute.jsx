import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

/* export const PublicRoute = ({children}) => {
  const { logged } = useContext(AuthContext);
  console.log(logged)
  return (!logged) 
  ? children
  : <Navigate to={"/marvel"} />;

}
 */


export const PublicRoute = ({children}) => {
  const { logged } = useContext(AuthContext);
  const lastPath = localStorage.getItem("lastPath") || "/marvel";
  return logged ? <Navigate to={lastPath} /> : children;

}
