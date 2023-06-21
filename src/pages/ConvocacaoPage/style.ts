import styled from "styled-components";

export const StyledConvocacao = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Mr+De+Haviland&display=swap");
  display: flex;
  position: relative;
  justify-content: center;
  align-items: cente;

  .conteudoConvocacao {
    background: rgb(124, 124, 124);
    background: linear-gradient(
      6deg,
      rgba(124, 124, 124, 1) 0%,
      rgba(203, 203, 203, 1) 63%
    );
  }

  .logoMorumbi {
    position: absolute;
  }

  h1 {
    font-size: 35px;
    margin-bottom: 5px;
    font-family: "Inter", sans-serif;
  }

  img {
    width: 200px;
  }

  .divInputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    margin-top: 50px;
    width: 100%;
  }
  input {
    padding: 10px;
    font-size: 15px;
  }

  .introducao {
    margin-top: 5px;
    display: flex;
    gap: 80px;
    align-items: center;
  }

  .divButtons {
    display: flex;
    justify-content: space-between;
    margin-top: 85px;
    gap: 8px;
  }

  button {
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    background-color: gray;
    border-radius: 10px;
    font-size: 20px;
    color: white;
  }

  button:hover {
    background-color: red;
    transition: 0.4s;
    transform: scale(1.1);
    color: black;
  }

  .conteudoConvocacao {
    position: absolute;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 25px;
    border: 1px solid;
    top: 20px;
    width: 900px;
    height: 550px;
    right: 260px;
    animation: fade-in-top 0.8s;
  }

  .divIntroducaoConvocacao {
    display: flex;
    margin-top: 10px;
    gap: 8px;
    justify-content: center;
  }

  .divIntroducaoConvocacao h1 {
    margin-top: 15px;
    font-weight: 300;
    margin-left: 60px;
  }

  img {
    width: 90px;
    height: 100px;
  }

  .divImgs {
    display: flex;
    gap: 15px;
    margin-left: 350px;
  }

  .divMainConvocacao p {
    font-family: "Inter", sans-serif;
    font-size: 22px;
    font-weight: 600;
    text-align: justify;
    margin-top: 100px;
  }

  .divMainConvocacao span {
    font-family: "Courier New", Courier, monospace;
  }

  .divAssinaturas {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
  }

  .h3assinatura {
    margin-top: 30px;
    font-family: "Mr De Haviland", cursive;
    font-size: 45px;
  }
`;
