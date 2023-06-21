import { StyledBoletimInterno } from "./style";
import logoMorumbi from "../../assets/logoMorumbi.png";
import logoPMESP from "../../assets/logoPMESP.png";
import { useState } from "react";
import logoBAEP from "../../assets/4BAEPlogo.png";
import logoBPRV from "../../assets/5BPRVlogo.png";
import logoCOE from "../../assets/COElogo.png";
import logoFT from "../../assets/FTlogo.png";
import logoROTA from "../../assets/ROTAlogo.png";

import html2canvas from "html2canvas";
import { MdDownload, MdOutlineCleaningServices } from "react-icons/md";
import { toast } from "react-toastify";
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
        link.download = "Convocacao Corregedoria.png"; // Especifique o nome do arquivo e a extensão desejada

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
          <h1>Boletim Interno</h1>
          <img src={instituicao} alt="" />
        </div>
        <div className="divConteudoDoc">
          <p className="pDoc">
            1* PARTE SERVIÇOS DIÁRIOS:
            <p>{servicos}</p>
          </p>
          <p className="pDoc">
            2* PARTE INSTRUÇÂO E OPERAÇÔES POLICIAIS MILITARES:
            <p>{instrucao}</p>
          </p>
          <p className="pDoc">
            3* PARTE ASSUNTOS GERAIS E ADMINISTRATIVOS:
            <p> {assunto}</p>
          </p>
          <p className="pDoc">
            4* PARTE JUSTIÇA E DISCIPLINA:
            <p>{justica}</p>
          </p>
          <div className="divAssina">
            <p>ASSINA: {assinatura}</p>
            <img src={logoMorumbi} />
          </div>
        </div>
      </div>
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
            <option value={logoBAEP}> 4º BAEP</option>
            <option value={logoCOE}>COE</option>
            <option value={logoFT}>Força Tatica</option>
            <option value={logoROTA}>ROTA</option>
            <option value={logoBPRV}>5º BPRV</option>
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
    </StyledBoletimInterno>
  );
};

export default BoletimPage;
