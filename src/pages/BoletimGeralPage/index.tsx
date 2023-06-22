import logoMorumbi from "../../assets/logoMorumbi.png";
import logoPMESP from "../../assets/logoPMESP.png";
import { useState } from "react";
import logoBAEP from "../../assets/4BAEPlogo.png";
import logoBPRV from "../../assets/5BPRVlogo.png";
import logoCorregedoria from "../../assets/logoCorregedoria.png";
import logoFT from "../../assets/FTlogo.png";
import logoROTA from "../../assets/ROTAlogo.png";
import logoBaep from "../../assets/baep.png";
import operacoesEspeciais from "../../assets/operacoesespeciais.png";
import logoComandoGeral from "../../assets/logoComandoGeral.png";
import trigesimoBPM from "../../assets/37bpm.png";
import logoAnchieta from "../../assets/anchieta.png";
import cavPM from "../../assets/cavPM.png";
import logoEMPM from "../../assets/logoEmPm.png";

import html2canvas from "html2canvas";
import { MdDownload, MdOutlineCleaningServices } from "react-icons/md";
import { toast } from "react-toastify";
import Convocacao from "../../components/Convocacao";
import { StyledBoletimGeral } from "./styled";

const BoletimPage = () => {
  const [servicos, setServicos] = useState<any>("");
  const [instrucao, setInstrucao] = useState<any>("");
  const [assunto, setAssunto] = useState<any>("");
  const [assinatura, setAssinatura] = useState<any>("");
  const [justica, setJustica] = useState<any>("");
  const [instituicao, setInstituicao] = useState<any>(null);
  const [documentoGerado, setDocumentoGerado] = useState<any>(null);

  const recarregarPagina = () => {
    window.location.reload();
  };

  const donwloadDocumento = () => {
    const divParaDownload: any = document.getElementById("documentoId"); // Substitua "id-da-div" pelo ID da sua div

    html2canvas(divParaDownload)
      .then(function (canvas) {
        const dataURL = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "Boletim Interno"; // Especifique o nome do arquivo e a extensão desejada

        const event = new MouseEvent("click");
        link.dispatchEvent(event);

        URL.revokeObjectURL(dataURL);
      })
      .catch(function (error) {
        console.log("Ocorreu um erro ao capturar a div como imagem:", error);
      });
  };

  const gerarDocumento = () => {
    const documentoGerado = (
      <div id="documentoId" className="conteudoBoletim">
        <div className="introducaoDoc">
          <img src={instituicao} alt="" />
          <h1>BOLETIM GERAL</h1>
          <img src={instituicao} alt="" />
        </div>
        <div className="divConteudoDoc">
          1º PARTE SERVIÇOS DIÁRIOS:
          <p>
            <p className="pDoc">{servicos}</p>
          </p>
          2º PARTE INSTRUÇÂO E OPERAÇÔES POLICIAIS MILITARES:
          <p>
            <p className="pDoc">{instrucao}</p>
          </p>
          3º PARTE ASSUNTOS GERAIS E ADMINISTRATIVOS:
          <p>
            <p className="pDoc"> {assunto}</p>
          </p>
          4º PARTE JUSTIÇA E DISCIPLINA:
          <p>
            <p className="pDoc">{justica}</p>
          </p>
          <div className="divAssina">
            <p>
              ASSINA: <span>{assinatura}</span>
            </p>
            <img src={logoMorumbi} />
          </div>
        </div>
      </div>
    );
    setDocumentoGerado(documentoGerado);
  };
  return (
    <StyledBoletimGeral>
      <div className="containerBoletim">
        <div className="introContainer">
          <img src={logoComandoGeral} alt="" />
          <h1>Alto Comando | BOLETIM GERAL</h1>
          <img src={logoEMPM} alt="" />
        </div>
        <div className="divH2">
          <h2> Preencha os campos abaixo!</h2>
        </div>
        <div className="divInputs">
          <label htmlFor="1parteservicos"> 1º Parte Serviços Diários</label>
          <input
            type="text"
            id="1parteservicos"
            placeholder="Ex: Administrativo "
            value={servicos}
            onChange={(e) => setServicos(e.target.value)}
          />
          <label htmlFor="2parteinstrucao">2º Parte Instrução e Operação</label>
          <input
            type="text"
            id="2parteinstrucao"
            placeholder="Ex: Seleção externa.. "
            value={instrucao}
            onChange={(e) => setInstrucao(e.target.value)}
          />
          <label htmlFor="3assunstosgerais">
            {" "}
            3º Parte Assuntos Gerais e Administrativos
          </label>
          <input
            type="text"
            id="3assunstosgerais"
            placeholder="Ex: Assunto "
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
          />
          <label htmlFor="4justica">4º Parte Justiça e Disciplina</label>
          <input
            type="text"
            id="4justica"
            placeholder="Justiça e disciplina "
            value={justica}
            onChange={(e) => setJustica(e.target.value)}
          />
          <label htmlFor="assinatura">Assina</label>
          <input
            type="text"
            id="assinatura"
            placeholder="Assinatura "
            value={assinatura}
            onChange={(e) => setAssinatura(e.target.value)}
          />

          <label htmlFor="instituicao">Selecione a Instituição:</label>
          <select
            id="instituicao"
            value={instituicao}
            onChange={(e) => setInstituicao(e.target.value)}
          >
            <option value="">Selecionar</option>
            <option value={logoComandoGeral}> Comando Geral</option>
            <option value={logoEMPM}> EM/PM</option>
            <option value={logoCorregedoria}>DPM</option>
          </select>
          <div className="divButtons">
            <button onClick={() => gerarDocumento()}>Gerar</button>
            <div>
              <button onClick={donwloadDocumento}>
                <MdDownload />
              </button>
              <button onClick={recarregarPagina}>
                <MdOutlineCleaningServices />
              </button>
            </div>
          </div>
        </div>
        <Convocacao convocacao={documentoGerado} />
      </div>
    </StyledBoletimGeral>
  );
};

export default BoletimPage;
