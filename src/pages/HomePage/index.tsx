import { Link } from "react-router-dom";
import { StyledHome } from "./styled";
import AnimatedBackgroundDois from "../../components/AnimatedBackgroundHome";
import LogoPMESP from "../../assets/logoPMESP.png";
import DesenvolvidoPor from "../../components/DesenvolvidoPor";

const HomePage = () => {
  return (
    <StyledHome>
      <AnimatedBackgroundDois />
      <h1>Qual documento gostaria de gerar?</h1>
      <div className="div_btn">
        <Link className="btn_home" to={"/BoletimPage"}>
          Boletim
        </Link>
        <Link className="btn_home" to={"/ConvocacaoPage"}>
          Convocação
        </Link>
        <Link className="btn_home" to={"/InqueritoPage"}>
          Inquérito
        </Link>
        <Link className="btn_home" to={"/SancoesPage"}>
          Sancões
        </Link>
        <Link className="btn_home" to={"/CertificadoPage"}>
          Certificados
        </Link>
      </div>
      <div className="divImg">
        <img src={LogoPMESP} alt="logo" />
      </div>
      <DesenvolvidoPor />
    </StyledHome>
  );
};

export default HomePage;
