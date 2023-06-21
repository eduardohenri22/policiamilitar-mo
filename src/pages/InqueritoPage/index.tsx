import html2canvas from "html2canvas";
import { useState } from "react";
import { MdDownload, MdOutlineCleaningServices } from "react-icons/md";
import { toast } from "react-toastify";
import Carimbo from "../../components/Carimbo";
import Convocacao from "../../components/Convocacao";
import logoComandoGeral from "../../assets/logoComandoGeral.png";
import logoEmPm from "../../assets/logoEmPm.png";
import logoPMESP from "../../assets/logoPMESP.png";
import { StyledInquerito } from "./style";

const InqueritoPage = () => {
  const [nomePolicial, setNomePolicial] = useState("");
  const [assinatura, setAssinatura] = useState("");
  const [numeroInquerito, setNumeroInquerito] = useState("");
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
    toast.success("GERADO COM SUCESSO");

    const convocacaoGerada = (
      <div id="inqueritoGeradoId" className="conteudoInquerito">
        <div className="divImgs">
          <img src={logoComandoGeral} alt="" />
          <img src={logoEmPm} alt="logo" />
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
            A Corregedoria da Polícia Militar encerra por meio deste inquérito
            Policial Militar de Inquérito <span>{numeroInquerito}</span> Tendo
            como resultado a aplicação das sanções disciplinares, o desligamento
            do Oficial Viegas, por corrupção militar.
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
            <p>Comandante Geral da Policia Militar-CMTG-PM</p>
            <p>Corregedor Geral da Policia Militar-DPM</p>
          </div>
        </div>
      </div>
    );
    setConvocacaoGeradaState(convocacaoGerada);
  };

  return (
    <StyledInquerito>
      <div className="containerInquerito">
        <div className="introducao">
          <img src={logoPMESP} alt="logo" />
          <div>
            <h1>Inquérito</h1>
            <h2>Corregedoria Da Policia Militar</h2>
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
