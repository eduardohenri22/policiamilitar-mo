import { StyledLanding } from "./styled";
import { Link } from "react-router-dom";
import LogoPMESP from "../../assets/logoPMESP.png";

const LandingPage = () => {
  return (
    <StyledLanding className="background">
      <h1 className="h1LandingPage">Policia Militar Do Estado de São Paulo</h1>

      <Link to="/home">
        <button>Iniciar</button>
      </Link>
      <div className="divImg">
        <img src={LogoPMESP} alt="logo" />
      </div>
    </StyledLanding>
  );
};

export default LandingPage;
