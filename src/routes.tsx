import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
