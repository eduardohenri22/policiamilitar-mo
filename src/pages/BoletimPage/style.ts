import styled from "styled-components";

export const StyledBoletimInterno = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap");

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  .divInputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .conteudoBoletim img {
    width: 100px;
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

  .divButtons {
    display: flex;
    justify-content: space-between;
    margin-top: 85px;
    gap: 8px;
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
    height: 550px;
    right: 260px;
    animation: fade-in-top 0.8s;
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
