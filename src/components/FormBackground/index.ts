import styled, { css } from "styled-components"
import { FaSpinner } from "react-icons/fa"
interface ContainerProps {
  result?: Boolean
  ranking?: Boolean
  activeImage?: Boolean
  rules?: Boolean
}
interface LoadingProps {
  loading?: Boolean
}

interface ButtonProps {
  time?: Boolean
}

export const Spinner = styled(FaSpinner)`
  @keyframes rubbishflow {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: rubbishflow infinite 2s linear;
`

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

export const HomeLogoContainer = styled.aside<LoadingProps>`
  grid-area: container;
  /* background-size: 100px 100%; */
  /* background: url('/azul.svg') no-repeat; */
  /* margin-top:-50px; */
  video {
    width: 100vw;
  }

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
    left: 44%;
    cursor: pointer;

    svg {
      ${props =>
        props.loading &&
        css`
          margin-left: 98px;
        `}
      ${props =>
        !props.loading &&
        css`
          margin-left: -137px;
        `}
      margin-top: -66px;
      transform: scale(5);
    }
  }

  p {
    font-size: 35px;
  }
`

export const FormBackground = styled.main`
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div .background-image {
    min-width: 100vw;
    overflow: hidden;
  }
`
export const FormBackgroundQuiz = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("/KV_Aprovado.png") no-repeat center center fixed;
  background-size: 100% 100%;
`

export const LogoContainer = styled.aside`
  background-size: 100px 100%;
  img {
    width: 185px;
    height: 56px;
    margin: 0;
    position: absolute;
    top: 10%;
    left: 10%;
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

export const FormContainer = styled.div`
  display: flex;
  position: absolute;
  top: -2%;
  flex-direction: column;
  width: 75%;
  height: 99%;
  align-items: center;
  justify-content: center;
  margin-top: 55px;

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
  .question .progressbar {
    border-radius: 10px;
    animation: linear progress 10s infinite;
    @keyframes progress {
      100% {
        width: 0%;
        background: orangered;
      }
      80% {
        width: 20%;
        background: orangered;
      }
      60% {
        width: 40%;
        background: #2255a8;
      }
      40% {
        width: 60%;
        background: #2255a8;
      }
      20% {
        width: 80%;
        background: #2255a8;
      }
      0% {
        width: 100%;
        background: #2255a8;
      }
    }
    width: 800px;
    height: 10px;
    background-color: #2255a8;
    margin-left: 50px;
  }

  .question svg {
    width: 7%;
    float: right;
    position: absolute;
    left: 82%;
    top: 8%;
  }

  .question .question-count {
    margin: 20px 0px;
    text-align: center;
    font-size: 15px;
    color: #555;
  }
  .question .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .question .main .title span {
    font-size: 15px;
    color: #555;
    font-weight: 600;
  }
  .question .main .title p {
    color: #fff;
    text-align: center;
    font: normal normal normal 38px Roboto;
    letter-spacing: 0px;
    margin-top: 20px;
  }
  .question .main .title {
    width: 970px;
    margin-bottom: -70px;
    margin-top: 25px;
  }
  .question .main .options {
    margin: 60px 0px 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    flex-direction: column;
  }
  .question .main .options .option {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 381px;
    height: 76px;
    border: 4px solid #2255a8;
    opacity: 1;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    text-align: center;
    font: normal normal normal 30px Roboto;

    &:hover {
      background-color: #2255a8;
    }
  }
  .question .main .options .option.active {
    background: #000;
    color: #fff;
  }
  .question .control {
    padding: 10px 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid #eee;
  }
`
export const FormButton = styled.div<ButtonProps>`
  width: 343px;
  height: 119px;
  background-color: #043673;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-self: center;
  align-items: center;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
  transform: skew(-20deg);

  ${props =>
    props.time &&
    css`
      pointer-events: none;
    `}

  button {
    ${props =>
      props.time &&
      css`
        pointer-events: none;
      `}
    color: #fff;
    background-color: transparent;
    font-family: "Montserrat";
    font-weight: 800;
    letter-spacing: "0.066em";
    font-size: 50px;
  }
  span {
    ${props =>
      props.time &&
      css`
        pointer-events: none;
      `}
    display:inline-block;
    transform: skew(20deg);
  }
`
export const StartButton = styled.div<ButtonProps>`
  width: 671px;
  height: 119px;
  background-color: #043673;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-self: center;
  align-items: center;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
  transform: skew(-20deg);

  ${props =>
    props.time &&
    css`
      pointer-events: none;
    `}

  button {
    ${props =>
      props.time &&
      css`
        pointer-events: none;
      `}
    color: #fff;
    background-color: transparent;
    font-family: "Montserrat";
    font-weight: 800;
    letter-spacing: "0.066em";
    font-size: 50px;
  }
  span {
    ${props =>
      props.time &&
      css`
        pointer-events: none;
      `}
    display:inline-block;
    transform: skew(20deg);
  }
`
export const ThankYouDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  /* gap: 40px; */
  span {
    text-align: center;
    letter-spacing: 0px;
    color: #043673;
    opacity: 1;
  }
  span:nth-of-type(1) {
    font: normal normal bold 44px/54px Montserrat;
  }
  span:nth-of-type(2) {
    font: normal normal 900 306px/373px Montserrat;
  }
  span:nth-of-type(3) {
    font: normal normal 900 61px/74px Montserrat;
  }
  span:nth-of-type(4) {
    font: normal normal bold 38px/47px Montserrat;
    width: 626px;
    height: 188px;
    white-space: pre-line;
  }
  .ranking-div span {
    width: 545px;
    height: 76px;
    background-color: #043673;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    transform: skew(-20deg);
    color: #fff;
    font: normal normal 800 44px/54px Montserrat;
    text-transform: uppercase;
    letter-spacing: 0px;
    box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .ranking-title span {
    width: 320px;
    height: 91px;
    background-color: #043673;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    transform: skew(-20deg);
    color: #fff;
    font: normal normal 600 34px/41px Montserrat;
    text-transform: uppercase;
    letter-spacing: 0px;
    box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`
export const ContainerFormModal = styled.div<ContainerProps>`
  .leftImage {
    position: absolute;
    top: 116px;
    left: 22px;
  }
  .rightImage {
    right: 24px;
    position: absolute;
    top: 175px;
  }
  position: relative;
  width: 100%;
  max-width: 926px;
  margin: 0 auto;
  overflow: hidden;
  background: #fff;
  border: 2px solid #fff;
  ${props =>
    props.result
      ? css`
          padding-top: 5rem;
          min-height: 100%;
          height: 10%;
        `
      : css`
          padding-top: 30rem;
        `}
  ${props =>
    props.ranking &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
    ${props =>
    props.rules &&
    css`
      padding-top: 5rem;
      min-height: 1688px;
    `}
  padding-bottom: 3rem;
  h1 {
    color: #707070;
    font: normal normal normal 20px/37px Segoe UI;
  }
  button {
    cursor: pointer;
    display: flex;
    height: 56px;
    width: 100%;
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
  .question .progressbar {
    border-radius: 10px;
    animation: linear progress 10s infinite;
    @keyframes progress {
      100% {
        width: 0%;
        background: orangered;
      }
      80% {
        width: 20%;
        background: orangered;
      }
      60% {
        width: 40%;
        background: #2255a8;
      }
      40% {
        width: 60%;
        background: #2255a8;
      }
      20% {
        width: 80%;
        background: #2255a8;
      }
      0% {
        width: 100%;
        background: #2255a8;
      }
    }
    width: 800px;
    height: 10px;
    background-color: #2255a8;
    margin-left: 50px;
  }
  .question {
    display: flex;
    flex-direction: column;
  }

  .question svg {
    width: 12%;
    float: right;
    position: absolute;
    left: 82%;
    top: 2%;
  }

  .question .question-count {
    margin: 20px 0px;
    text-align: center;
    font-size: 15px;
    color: #555;
  }
  .question .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .question .main .title span {
    font-size: 15px;
    color: #555;
    font-weight: 600;
  }
  .question .main .title p {
    color: #043673;
    text-align: center;
    font: normal normal normal 40px Roboto;
    letter-spacing: 0px;
    margin-top: -10px;
  }
  .question .main .title {
    width: 611px;
    margin-top: 115px;
  }
  .question .main .title img {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .question .main .options {
    margin: 60px 0px 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 70px;
    flex-direction: row;
    width: 114%;
    margin-top: 100px;
  }
  .question .main .options .option {
    &:nth-of-type(1) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 220px;
      height: 175px;
      gap: 10px;
      /* border: 4px solid #2255A8; */
      opacity: 1;
      padding: 10px;
      cursor: pointer;
      color: #fff;
      text-align: center;
      font: normal normal normal 45px Roboto;
      background: #043673;
      transform: skew(-20deg);
      box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
      font-weight: bold;
      ${props =>
        props.activeImage &&
        css`
          pointer-events: none;
        `}
    }
    &:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 345px;
      height: 175px;
      gap: 10px;
      opacity: 1;
      padding: 10px;
      cursor: pointer;
      color: #fff;
      text-align: center;
      font: normal normal normal 45px Roboto;
      background: #043673;
      transform: skew(-20deg);
      box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
      font-weight: bold;
      ${props =>
        props.activeImage &&
        css`
          pointer-events: none;
        `}
    }
  }
  .question .main .options .option.active {
    background: #043673;
    color: #fff;
  }
  .question .control {
    padding: 10px 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid #eee;
  }
  .question .questionType {
    display: flex;
    gap: 30px;
    margin-top: -335px;
    margin-left: auto;
    margin-right: auto;
    div:nth-of-type(1) {
      width: 577px;
      height: 76px;
      background-color: #043673;
      display: flex;
      align-self: center;
      align-items: center;
      justify-content: center;
      transform: skew(-20deg);
      color: #fff;
      img {
        position: fixed;
        top: 345px;
        left: 110px;
      }
      span {
        font-size: 38px;
        font-weight: bold;
      }
    }
    div:nth-of-type(2) {
      width: 200px;
      height: 76px;
      background: transparent linear-gradient(91deg, #043673 0%, #0088ce 100%)
        0% 0% no-repeat padding-box;
      display: flex;
      align-self: center;
      align-items: center;
      justify-content: center;
      transform: skew(-20deg);
      color: #fff;
      img {
        position: fixed;
        right: 100px;
        top: 406px;
      }
      span {
        font-size: 38px;
        font-weight: bold;
      }
    }
  }
`
export const ContainerRankingDiv = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 40px;
  span {
    text-align: center;
    letter-spacing: 0px;
    color: #043673;
    opacity: 1;
  }
  .ranking-title img:nth-of-type(1) {
    position: fixed;
    top: 60px;
    left: 862px;
  }
  .ranking-title img:nth-of-type(2) {
    position: fixed;
    top: 147px;
    left: 1042px;
  }
  .ranking-title span {
    width: 320px;
    height: 91px;
    background-color: #043673;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    transform: skew(-20deg);
    color: #fff;
    font: normal normal 600 34px/41px Montserrat;
    text-transform: uppercase;
    letter-spacing: 0px;
    box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .ranking-players {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .player-status {
    width: 850px;
    height: 87px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .player-status:nth-of-type(1) {
    background: #0088ce 0% 0% no-repeat padding-box;
  }
  .player-status:nth-of-type(2) {
    background: #7fc3e6 0% 0% no-repeat padding-box;
  }
  .player-status:nth-of-type(3) {
    background: #e5f3fa 0% 0% no-repeat padding-box;
  }
  .player-name {
    width: 550px;
    font-size: 38px;
    margin-left: 50px;
    text-align: justify;
    font: normal normal bold 38px/47px Montserrat;
  }
  .player-points {
    width: 150px;
    font-size: 38px;
    margin-right: 50px;
    text-align: end;
    font: normal normal bold 38px/47px Montserrat;
  }
`
export const RulesDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
