import styled from "styled-components";

export const StyledCarimbo = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap");

  .carimbo {
    position: absolute;
    top: 450px;
    right: 100px;
    bottom: 10px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 8px solid rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    opacity: 80%;
    font-weight: bold;
  }

  .carimbo-texto {
    transform: rotate(-45deg);
    position: absolute;
    border: 4px solid black;
    background-color: gray;
    border-radius: 8px;
    color: black;
    font-size: 38px;
    opacity: 100%;
    padding: 20px;
    font-size: small;
    font-family: "Mr De Haviland", cursive;
    color: black;
    font-weight: 700;
  }
`;
