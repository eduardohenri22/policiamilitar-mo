import { useState } from "react";
import { StyledBoletimInterno } from "./style";
import logoAnchieta from "../../assets/logos/logoAnchieta.png";
import logoHumaita from "../../assets/logos/logoHumaita.png";
import logoBAEP from "../../assets/logos/logoOperacaoEspeciais.png";
import logoMorumbi from "../../assets/logos/logoMorumbi.png";
import logoPMESP from "../../assets/logos/logoPMESP.png";
import logoBPRV from "../../assets/logos/logoBPRV.png";
import logoFT from "../../assets/logos/logoFT.png";
import logoROTA from "../../assets/logos/logoROTA.png";
import operacoesEspeciais from "../../assets/logos/logoOperacaoEspeciais.png";
import logo37BPM from "../../assets/logos/logo37BPM.png";
import cavPM from "../../assets/logos/logoCavPM.png";
import html2canvas from "html2canvas";
import { MdDownload, MdOutlineCleaningServices } from "react-icons/md";

import Convocacao from "../../components/Convocacao";

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

  const estiloParagrafo = {
    lineHeight: "1.8", // Define o espaçamento entre linhas desejado
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
            <h1>Boletim Interno</h1>
            <img src={instituicao} alt="" />
          </div>
          <div className="divConteudoDoc">
            <p className="pDoc">
              1º PARTE SERVIÇOS DIÁRIOS:
              <p style={{ whiteSpace: "pre-wrap" }}>{renderText(servicos)}</p>
            </p>
            <p className="pDoc">
              2º PARTE INSTRUÇÂO E OPERAÇÔES POLICIAIS MILITARES:
              <p style={{ whiteSpace: "pre-wrap" }}>{renderText(instrucao)}</p>
            </p>
            <p className="pDoc">
              3º PARTE ASSUNTOS GERAIS E ADMINISTRATIVOS:
              <p style={{ whiteSpace: "pre-wrap" }}>{renderText(assunto)}</p>
            </p>
            <p style={{ whiteSpace: "pre-wrap" }} className="pDoc">
              4º PARTE JUSTIÇA E DISCIPLINA:
              <p>{renderText(justica)}</p>
            </p>
            <div className="divAssina">
              <p>
                ASSINA: <span>{assinatura}</span>
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
    <StyledBoletimInterno>
      <div className="containerBoletim">
        <div className="introContainer">
          <img src={logoPMESP} alt="" />
          <h1>Policia Militar | BOLETIM INTERNO</h1>
          <img src={logoPMESP} alt="" />
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
            placeholder="Ex: Assunto "
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
            <option value={logo37BPM}>37º - BPM</option>
            <option value={logoFT}>37º - FT</option>
            <option value={cavPM}>37º - CAvPM</option>
            <option value={logoBAEP}>4º - BAEP</option>
            <option value={logoROTA}>1º - ROTA</option>
            <option value={logoAnchieta}>2º - ANCHIETA</option>
            <option value={logoHumaita}>3º - HUMAITÁ</option>;
            <option value={operacoesEspeciais}>4º - Operações Especiais</option>
            <option value={logoBPRV}>5º - BPRV</option>
          </select>
          <button id="btGerar" onClick={() => gerarDocumento()}>
            Gerar
          </button>
        </div>
        <Convocacao convocacao={documentoGerado} />
      </div>
    </StyledBoletimInterno>
  );
};

export default BoletimPage;
