import styled from "styled-components";

export const StyledHome = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");

  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Staatliches", cursive;
  gap: 10rem;

  img {
    width: 100px;
  }

  h1 {
    font-size: 40px;
    color: white;
  }

  .div_btn {
    display: flex;
    gap: 2rem;
  }

  .btn_home {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 50px;
    background-color: gray;
    border-radius: 10px;
    color: white;
  }
  .btn_home:hover {
    background-color: red;
    transition: 0.4s;
    transform: scale(1.5);
    color: black;
  }
`;
