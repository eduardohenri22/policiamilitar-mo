import { Routes, Route } from "react-router-dom";
import BoletimPage from "./pages/BoletimPage";
import HomePage from "./pages/HomePage";
import InqueritoPage from "./pages/InqueritoPage";
import LandingPage from "./pages/LandingPage";
import Bole from "./pages/BoletimGeralPage";
import CertificadoPage from "./pages/CertificadoPage";
import ConvocacaoPage from "./pages/ConvocacaoPage";
import BoletimGeralPage from "./pages/BoletimGeralPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/BoletimPage" element={<BoletimPage />} />
      <Route path="/InqueritoPage" element={<InqueritoPage />} />
      <Route path="/BoletimGeralPage" element={<BoletimGeralPage />} />
      <Route path="/CertificadoPage" element={<CertificadoPage />} />
      <Route path="/ConvocacaoPage" element={<ConvocacaoPage />} />
    </Routes>
  );
};

export default Router;
