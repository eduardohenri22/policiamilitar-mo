import { Link } from "react-router-dom";
import { StyledHome } from "./styled";
import AnimatedBackgroundDois from "../../components/AnimatedBackgroundHome";
import LogoPMESP from "../../assets/logoPMESP.png";
import DesenvolvidoPor from "../../components/DesenvolvidoPor";
import { toast } from "react-toastify";

toast.info(" Perdão, Não carregou a página? Clique em recarregar", {
  position: "top-right",
  autoClose: 6800,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
});
const HomePage = () => {
  return (
    <StyledHome>
      <AnimatedBackgroundDois />
      <h1>Qual documento gostaria de gerar?</h1>
      <div className="div_btn">
        <Link className="btn_home" to={"/BoletimPage"}>
          Boletim Interno
        </Link>
        <Link className="btn_home" to={"/ConvocacaoPage"}>
          Convocação
        </Link>
        <Link className="btn_home" to={"/InqueritoPage"}>
          Inquérito
        </Link>
        <Link className="btn_home btEmBreve" to={"/SancoesPage"}>
          Em breve
        </Link>
        <Link className="btn_home btEmBreve" to={"/CertificadoPage"}>
          Em breve
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
