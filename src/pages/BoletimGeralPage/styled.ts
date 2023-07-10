import styled from "styled-components";

export const StyledBoletimGeral = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Comforter&display=swap");

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-family: "Roboto", sans-serif;

  .divInputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .conteudoBoletim img {
    width: 100px;
  }

  .divAssina {
    display: flex;
    justify-content: space-between;
  }

  .introducaoDoc {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .divConteudoDoc {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 1rem;
    padding: 0.5rem;
  }

  .pDoc {
    display: flex;
    flex-direction: column;

    font-weight: 700;
  }

  .introducaoDoc > h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
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

  span {
    left: 0px;
    justify-content: space;
    font-family: "Comforter", cursive;
    font-size: 35px;
  }

  .divButtons {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
    bottom: 120px;
  }

  .conteudoBoletim {
    position: absolute;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 25px;
    border: 1px solid;
    top: 20px;
    width: 900px;
    min-height: 550px;
    right: 350px;
    animation: fade-in-top 0.8s;
    background: rgb(164, 164, 164);
  }

  #btGerar {
    margin-top: 60px;
  }

  input {
    padding: 12px;
    font-size: 13px;
  }

  select {
    padding: 12px;
    font-size: 13px;
  }

  .divH2 {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .introContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .introContainer img {
    width: 100px;
  }
`;
