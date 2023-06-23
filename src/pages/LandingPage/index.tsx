import { StyledLanding } from "./styled";
import { Link } from "react-router-dom";
import LogoPMESP from "../../assets/logos/logoPMESP.png";
import LogoMorumbi from "../../assets/logos/logoMorumbi.png";
import AnimatedBackground from "../../components/AnimatedBackground";

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
    </StyledLanding>
  );
};

export default LandingPage;
