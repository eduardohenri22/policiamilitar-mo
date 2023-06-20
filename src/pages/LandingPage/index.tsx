import { StyledLanding } from "./styled";
import { Link } from "react-router-dom";
import LogoPMESP from "../../assets/logoPMESP.png";
import LogoMorumbi from "../../assets/logoMorumbi.png";
import AnimatedBackground from "../../components/AnimatedBackground";
import DesenvolvidoPor from "../../components/DesenvolvidoPor";

const LandingPage = () => {
  return (
    <StyledLanding className="background">
      <AnimatedBackground />
      <h1 className="h1LandingPage">Policia Militar Do Estado de São Paulo</h1>

      <Link to="/home">
        <button>Iniciar</button>
      </Link>
      <div className="divImg">
        <img src={LogoPMESP} alt="logo" />
      </div>
      <img src={LogoMorumbi} alt="logomorumbi" className="logoMorumbi" />
      <DesenvolvidoPor />
    </StyledLanding>
  );
};

export default LandingPage;
