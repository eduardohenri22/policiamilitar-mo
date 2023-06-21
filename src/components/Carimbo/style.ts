import styled from "styled-components";

export const StyledCarimbo = styled.div`
  .carimbo {
    position: absolute;
    top: 450px;
    right: 100px;
    bottom: 10px;
    width: 100px;
    height: 100px;
    background-color: #ffffff;
    border-radius: 100%;
    border: 5px solid rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    font-size: 16px;
    font-weight: bold;
  }

  .carimbo-texto {
    transform: rotate(-45deg);
    position: absolute;
    border: 1px solid black;
    background-color: gray;
    color: gray;
    font-size: 20px;
    opacity: 80%;
    padding: 8px;
    font-size: small;
    font-family: "Pinyon Script", cursive;
    color: black;
    font-weight: 600;
  }
`;
