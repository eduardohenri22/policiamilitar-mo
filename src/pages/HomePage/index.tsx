import { Link } from "react-router-dom";
import { StyledHome } from "./tyled";

const HomePage = () => {
  return (
    <StyledHome>
      <h1>Qual documento gostaria de gerar?</h1>
      <div className="div_btn">
        <Link className="btn_home" to={"/BoletimPage"}>
          Boletim
        </Link>
        <Link className="btn_home" to={"/InqueritoPage"}>
          Inquérito
        </Link>
        <Link className="btn_home" to={"/SancoesPage"}>
          Sancões
        </Link>
      </div>
    </StyledHome>
  );
};

export default HomePage;
