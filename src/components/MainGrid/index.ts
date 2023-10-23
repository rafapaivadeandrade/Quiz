import styled from "styled-components"
export const MainGrid = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.5fr 2fr 1fr;
  grid-template-areas: "container container container";
  /* background: ${({ theme }) => theme.background}; */
  overflow: hidden;
  /* background: black url('/bg.svg') no-repeat; */
`

export const LogoContainer = styled.aside`
  grid-area: container;
  /* background-size: 100px 100%; */
  /* background: url('/azul.svg') no-repeat; */
  /* margin-top:-50px; */

  img {
    /* margin-top: 256px; */
    /* margin-left: 211px; */
    width: 400px;
    height: 400px;
    margin: 0;
    position: absolute;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  div {
    color: #fff;
    margin: 0;
    display: flex;
    position: absolute;
    top: 80%;
    left: 45%;
    cursor: pointer;
    svg {
      margin-left: -70px;
      margin-top: -30px;
      transform: scale(3);
    }
  }
`

export const Login = styled.div`
  display: flex;
  grid-area: login;
  flex-direction: column;
  padding: 80px;
  align-items: center;
  gap: 10px;

  h1 {
    color: #707070;
    font: normal normal normal 20px/37px Segoe UI;
  }

  button {
    cursor: pointer;
    display: flex;
    height: 56px;
    width: 100%;
    background-color: #071ac8;
    border: 0px;
    color: #fff;
    border-radius: 18px;
    font-size: 18px;
    align-items: center;
    justify-content: center;
  }

  a {
    text-align: center;
    text-decoration: underline;
    font: normal normal normal 20px/37px Segoe UI;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
`
