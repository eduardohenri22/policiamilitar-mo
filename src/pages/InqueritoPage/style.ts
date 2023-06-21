import styled from "styled-components";

export const StyledInquerito = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@300&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Istok+Web&family=Josefin+Slab:wght@300&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap");
  display: flex;
  position: relative;
  justify-content: center;
  font-family: "Staatliches", cursive;
  align-items: cente;
  background-color: white;

  h1 {
    font-size: 35px;
    margin-bottom: 5px;
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
    margin-top: 90%;
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

  .conteudoInquerito {
    position: absolute;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 25px;
    border: 1px solid;
    top: 20px;
    width: 900px;
    height: 550px;
    right: 210px;
    animation: fade-in-top 0.8s;
  }

  .numeroInqueritoIntroducao {
    display: flex;
    justify-content: center;
    margin-top: 18px;
  }

  .divIntroducaoInquerito {
    display: flex;
    margin-top: 10px;
    gap: 8px;
    justify-content: center;
  }

  .divIntroducaoInquerito h1 {
    margin-top: 15px;
    font-weight: 300;
    margin-left: 90px;
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

  .divMainInquerito p {
    font-family: "Josefin Slab", serif;
    font-size: 22px;
    font-weight: 600;
    text-align: justify;
    margin-top: 60px;
  }

  .divMainInquerito span {
    font-family: "Istok Web", sans-serif;
  }

  .divAssinaturas {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 70px;
  }

  .divAssinaturasContainer {
    position: relative;
    display: flex;
    height: 200px;
    align-items: center;
    justify-content: center;
  }

  .pAssinaInquerito {
    position: absolute;
    bottom: 40px;
    left: 0px;
    justify-content: space;
    font-family: "Pinyon Script", cursive;
    font-size: 35px;
  }

  span {
    font-family: "Staatliches", cursive;
    font-size: 20px;
  }

  .h3assinatura {
    margin-top: 30px;
    font-family: "Pinyon Script", cursive;
    font-size: 35px;
  }
`;
