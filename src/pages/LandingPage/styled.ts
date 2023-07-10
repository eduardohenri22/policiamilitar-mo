import styled from "styled-components";
import backgroundHome from "../../assets/backgroundHome.jpg";
export const StyledLanding = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");

  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  gap: 50px;
  font-family: "Staatliches", cursive;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: 2s puff-in-center;

  .divImg {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    padding: 20px;
    border-radius: 8px;
    border: transparent;
    cursor: pointer;
    font-size: larger;
    border: 1px solid transparent;
  }

  button:hover {
    background-color: red;
    width: 200px;
    transition: 0.5s;
    color: white;
    border: 1px solid white;
  }

  img {
    width: 250px;
  }

  #btGerar {
    margin-top: 60px;
  }

  .h1LandingPage {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 1rem;
    color: white;
  }
  .logoMorumbi {
    width: 80px;
  }
  .puff-in-center {
    -webkit-animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
      both;
    animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }

  @-webkit-keyframes puff-in-center {
    0% {
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes puff-in-center {
    0% {
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;
