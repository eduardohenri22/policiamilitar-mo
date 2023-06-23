import html2canvas from "html2canvas";
import { useState } from "react";
import { MdDownload, MdOutlineCleaningServices } from "react-icons/md";
import { toast } from "react-toastify";

import Convocacao from "../../components/Convocacao";
import logoComandoGeral from "../../assets/logos/logoComandoGeral.png";

import logoPMESP from "../../assets/logos/logoPMESP.png";
import { StyledInquerito } from "./style";
import logoMorumbi from "../../assets/logos/logoMorumbi.png";
import logoCorregedoria from "../../assets/logos/logoCorregedoria.png";

const InqueritoPage = () => {
  const [nomePolicial, setNomePolicial] = useState("");
  const [assinatura, setAssinatura] = useState("");
  const [numeroInquerito, setNumeroInquerito] = useState("");
  const [conteudoInquerito, setConteudoInquerito] = useState("");
  const [convocacaoGeradaState, setConvocacaoGeradaState] = useState<any>(null);

  const recarregarPagina = () => {
    window.location.reload();
  };

  const downloadConvocacao = () => {
    const divParaDownload: any = document.getElementById("inqueritoGeradoId"); // Substitua "id-da-div" pelo ID da sua div

    html2canvas(divParaDownload)
      .then(function (canvas) {
        const dataURL = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "Inquerito Corregedoria.png"; // Especifique o nome do arquivo e a extensão desejada

        const event = new MouseEvent("click");
        link.dispatchEvent(event);

        URL.revokeObjectURL(dataURL);
      })
      .catch(function (error) {
        console.log("Ocorreu um erro ao capturar a div como imagem:", error);
      });
  };

  const gerarConvocacao = () => {
    toast.info(
      " Perdão, A fonte não está correta? Clique na vassoura e digite os dados novamente",
      {
        position: "top-right",
        autoClose: 7800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

    toast.success("GERADO COM SUCESSO", {
      position: "top-right",
      autoClose: 3800,
    });
    const convocacaoGerada = (
      <div id="inqueritoGeradoId" className="conteudoInquerito">
        <img src={logoMorumbi} alt="" className="logoMorumbi" />

        <div className="divImgs">
          <img src={logoCorregedoria} alt="" />

          <img src={logoPMESP} alt="logo" />
        </div>
        <div className="divIntroducaoInquerito">
          <div>
            <h1>Inquérito</h1>
            <h2>Corregedoria Da Policia Militar Do Estado de São Paulo</h2>
            <div className="numeroInqueritoIntroducao">
              <span>{numeroInquerito}</span>
            </div>
          </div>
        </div>
        <div className="divMainInquerito">
          <p>
            {conteudoInquerito} <span>{numeroInquerito}</span>
          </p>
          <p>
            Policial Envolvido: <span>{nomePolicial}</span>
          </p>
        </div>
        <div className="divAssinaturasContainer">
          <div>
            <p className="pAssinaInquerito">
              <span>Assina:</span> {assinatura}
            </p>
          </div>
          <div className="divAssinaturas">
            <p>Corregedor da Policia Militar-DPM</p>
          </div>
          <img src={logoComandoGeral} alt="" className="logoComandoGeral" />
        </div>
      </div>
    );
    setConvocacaoGeradaState(convocacaoGerada);
  };

  return (
    <StyledInquerito>
      <div className="containerInquerito">
        <div className="introducao">
          <img src={logoCorregedoria} alt="logo" />
          <img src={logoComandoGeral} alt="" />
          <div>
            <h1>Inquérito</h1>
            <h2>Corregedoria Da Policia Militar</h2>
            <h2>Comando Geral</h2>
          </div>
        </div>
        <div className="divInputs">
          <label htmlFor="nomePolicial">Nome Policial:</label>
          <input
            id="nomeInquerito"
            type="text"
            placeholder="Ex: Nome Policial | RG "
            value={nomePolicial}
            onChange={(e) => setNomePolicial(e.target.value)}
            required
          />

          <label htmlFor="assinatura">Assinatura do Comandante:</label>
          <input
            id="assinatura"
            type="text"
            placeholder="Assinante"
            value={assinatura}
            onChange={(e) => setAssinatura(e.target.value)}
            required
          />

          <label htmlFor="conteudoInquerito">
            Conteudo Abertura ou fechamento:
          </label>
          <input
            id="conteudoInquerito"
            type="text"
            placeholder="EX: Venho por deste meio infor..."
            value={conteudoInquerito}
            onChange={(e) => setConteudoInquerito(e.target.value)}
            required
          />

          <label htmlFor="numeroInquerito">Número do Inquérito:</label>
          <input
            id="inquerito"
            type="text"
            placeholder="EX: N*:0002-23/SSP-23"
            value={numeroInquerito}
            onChange={(e) => setNumeroInquerito(e.target.value)}
            required
          />
        </div>
        <div className="divButtons">
          <button onClick={() => gerarConvocacao()}>Gerar</button>
          <div>
            <button onClick={downloadConvocacao}>
              <MdDownload />
            </button>
            <button onClick={recarregarPagina}>
              <MdOutlineCleaningServices />
            </button>
          </div>
        </div>
      </div>
      <Convocacao convocacao={convocacaoGeradaState} />
    </StyledInquerito>
  );
};

export default InqueritoPage;
