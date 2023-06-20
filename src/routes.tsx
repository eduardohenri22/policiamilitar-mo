import { Routes, Route } from "react-router-dom";
import BoletimPage from "./pages/BoletimPage";
import HomePage from "./pages/HomePage";
import InqueritoPage from "./pages/InqueritoPage";
import LandingPage from "./pages/LandingPage";
import SancoesPage from "./pages/SancoesPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/BoletimPage" element={<BoletimPage />} />
      <Route path="/InqueritoPage" element={<InqueritoPage />} />
      <Route path="/SancoesPage" element={<SancoesPage />} />
    </Routes>
  );
};

export default Router;
