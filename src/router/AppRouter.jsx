import { Route, Routes } from "react-router-dom"; // Importación correcta
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />



      //rutas privadas
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }
      />
      {/* <Route path="/*" element={<HeroesRoutes />} /> */}
       
    </Routes>
  );
};
