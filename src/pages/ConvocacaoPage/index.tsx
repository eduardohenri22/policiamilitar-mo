import React, { useState } from "react";

import logoCorregedoria from "../../assets/logoCorregedoria.png";
import logoPMESP from "../../assets/logoPMESP.png";
import logoMorumbi from "../../assets/logoMorumbi.png";
import { StyledConvocacao } from "./style";
import Convocacao from "../../components/Convocacao";
import html2canvas from "html2canvas";
import { MdDownload, MdOutlineCleaningServices } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carimbo from "../../components/Carimbo";

const ConvocacaoPage = () => {
  const [nomeConvocado, setNomeConvocado] = useState("");
  const [assinatura, setAssinatura] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [convocacaoGeradaState, setConvocacaoGeradaState] = useState<any>(null);
  const [local, setLocal] = useState("");

  const recarregarPagina = () => {
    window.location.reload();
  };

  const downloadConvocacao = () => {
    const divParaDownload: any = document.getElementById("convocacaoGeradaId"); // Substitua "id-da-div" pelo ID da sua div

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
      <div id="convocacaoGeradaId" className="conteudoConvocacao">
        <img src={logoMorumbi} alt="" className="logoMorumbi" />

        <div className="divImgs">
          <img src={logoCorregedoria} alt="" />
          <img src={logoPMESP} alt="logo" className="logoPMESP" />
        </div>
        <div className="divIntroducaoConvocacao">
          <div>
            <h1>Convocação</h1>
            <h2>Corregedoria Da Policia Militar Do Estado de São Paulo</h2>
          </div>
        </div>
        <div className="divMainConvocacao">
          <p>
            A Corregedoria da Polícia Militar convoca o policial militar{" "}
            <span>{nomeConvocado}</span> para prestar esclarecimentos, no dia{" "}
            <span>{data}</span>, ás <span>{hora}</span> horas horário de
            Brasília. Local: <span>{local}</span>. O não comparecimento sem
            justificativa acarretará em sanções disciplinares administrativas.
          </p>
        </div>
        <div className="divAssinaturas">
          <p>Corregedor de Policia</p>
          <h3 className="h3assinatura">{assinatura}</h3>
          <Carimbo assinatura={assinatura} />
        </div>
      </div>
    );
    setConvocacaoGeradaState(convocacaoGerada);
  };

  return (
    <StyledConvocacao>
      <div className="containerConvocacao">
        <div className="introducao">
          <img src={logoCorregedoria} alt="logo" />
          <div>
            <h1>Convocação</h1>
            <h2>Corregedoria Da Policia Militar</h2>
          </div>
        </div>
        <div className="divInputs">
          <label htmlFor="nomeConvocado">Nome Convocado:</label>
          <input
            id="nomeConvocado"
            type="text"
            placeholder="Ex: Nome do Convocado | RG "
            value={nomeConvocado}
            onChange={(e) => setNomeConvocado(e.target.value)}
          />

          <label htmlFor="data">Data:</label>
          <input
            id="data"
            type="text"
            placeholder="Data Ex: 20/06/2023"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />

          <label htmlFor="horario">Horário:</label>
          <input
            id="horario"
            type="text"
            placeholder="Horário Ex: 15:00"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />

          <label htmlFor="assinatura">Assinatura:</label>
          <input
            id="assinatura"
            type="text"
            placeholder="Assinante"
            value={assinatura}
            onChange={(e) => setAssinatura(e.target.value)}
          />

          <label htmlFor="local">Local:</label>
          <input
            id="local"
            type="text"
            placeholder="Local"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          />
        </div>
        <div className="divButtons">
          <button onClick={() => gerarConvocacao()}>Convocar</button>
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
    </StyledConvocacao>
  );
};

export default ConvocacaoPage;
