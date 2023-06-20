import { Routes, Route } from "react-router-dom";
import BoletimPage from "./pages/BoletimPage";
import HomePage from "./pages/HomePage";
import InqueritoPage from "./pages/InqueritoPage";
import LandingPage from "./pages/LandingPage";
import SancoesPage from "./pages/SancoesPage";
import CertificadoPage from "./pages/CertificadoPage";
import ConvocacaoPage from "./pages/ConvocacaoPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/BoletimPage" element={<BoletimPage />} />
      <Route path="/InqueritoPage" element={<InqueritoPage />} />
      <Route path="/SancoesPage" element={<SancoesPage />} />
      <Route path="/CertificadoPage" element={<CertificadoPage />} />
      <Route path="/ConvocacaoPage" element={<ConvocacaoPage />} />
    </Routes>
  );
};

export default Router;
