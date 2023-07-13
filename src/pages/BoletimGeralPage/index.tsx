import { useState } from "react";

import logoMorumbi from "../../assets/logos/logoMorumbi.png";
import logoCorregedoria from "../../assets/logos/logoCorregedoria.png";
import logoComandoGeral from "../../assets/logos/logoComandoGeral.png";
import logoEMPM from "../../assets/logos/logoEmPm.png";

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

  const renderText = (text: string) => {
    const paragraphs = text.split("\n");
    return paragraphs.map((paragraph: any, index: any) => (
      <p key={index}>{paragraph}</p>
    ));
  };

  const gerarDocumento = () => {
    const documentoGerado = (
      <>
        <div id="documentoId" className="conteudoBoletim">
          <div className="introducaoDoc">
            <img src={instituicao} alt="" />
            <h1>BOLETIM GERAL</h1>
            <img src={instituicao} alt="" />
          </div>
          <div className="divConteudoDoc">
            1º PARTE SERVIÇOS DIÁRIOS:
            <p>
              <p className="pDoc">{renderText(servicos)}</p>
            </p>
            2º PARTE INSTRUÇÂO E OPERAÇÔES POLICIAIS MILITARES:
            <p>
              <p className="pDoc">{renderText(instrucao)}</p>
            </p>
            3º PARTE ASSUNTOS GERAIS E ADMINISTRATIVOS:
            <p>
              <p className="pDoc"> {renderText(assunto)}</p>
            </p>
            4º PARTE JUSTIÇA E DISCIPLINA:
            <p>
              <p className="pDoc">{renderText(justica)}</p>
            </p>
            <div className="divAssina">
              <p>
                ASSINA: <span>{renderText(assinatura)}</span>
              </p>
              <img src={logoMorumbi} />
            </div>
          </div>
        </div>
        <div className="divButtons">
          <button onClick={donwloadDocumento}>
            <MdDownload />
          </button>
          <button onClick={recarregarPagina}>
            <MdOutlineCleaningServices />
          </button>
        </div>
      </>
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
          <textarea
            rows={4}
            cols={50}
            id="1parteservicos"
            placeholder="Ex: Administrativo "
            value={servicos}
            onChange={(e) => setServicos(e.target.value)}
          />
          <label htmlFor="2parteinstrucao">2º Parte Instrução e Operação</label>
          <textarea
            rows={4}
            cols={50}
            id="2parteinstrucao"
            placeholder="Ex: Seleção externa.. "
            value={instrucao}
            onChange={(e) => setInstrucao(e.target.value)}
          />
          <label htmlFor="3assunstosgerais">
            {" "}
            3º Parte Assuntos Gerais e Administrativos
          </label>
          <textarea
            rows={4}
            cols={50}
            id="3assunstosgerais"
            placeholder="Ex: Assunto gerais"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
          />
          <label htmlFor="4justica">4º Parte Justiça e Disciplina</label>
          <textarea
            rows={4}
            cols={50}
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
        </div>
        <button id="btGerar" onClick={() => gerarDocumento()}>
          Gerar
        </button>
        <Convocacao convocacao={documentoGerado} />
      </div>
    </StyledBoletimGeral>
  );
};

export default BoletimPage;
