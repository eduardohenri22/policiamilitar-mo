import styled from "styled-components";

export const StyledHome = styled.div`
  background-color: gray;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  h1 {
    font-size: 32px;
  }

  .div_btn {
    display: flex;
    gap: 5rem;
  }
  .btn_home {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 50px;
    background-color: black;
    border-radius: 10px;
    color: white;
  }
  .btn_home:hover {
    background-color: red;
  }
`;
