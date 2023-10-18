import styled, { keyframes, css } from "styled-components";

interface ContainerProps {
  question?: Boolean;
}

const show = keyframes`
to{
    transform: scale(1);
    opacity: 1;
  }
`;

export const ContainerModal = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  ${(props) =>
    !props.question &&
    css`
      background: rgba(66,103,149,255);
    `}
  ${(props) =>
    props.question &&
    css`
      background: rgb(111, 141, 212,0.85);
    `}
  position: fixed;
  top: 0;
  left:0;
  padding: 1rem;
  z-index: 1000;
  display:flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${show} .1s linear forwards;

  @media (max-width:512px){
    padding: 0;
  }
  .closeModal{
    width: 66px;
    height: 66px;
    font-size: 3rem;
    top:0px;
    right:0px;
    float: right;
    margin: 8px;
    border:none;
    background: #043673;
    color:#fff;
    border-radius: 10px;
    position: absolute;
    cursor: pointer;
  }
`;

export const ContentModal = styled.div`
  width: 100%;
  max-width: 926px;
  height: fit-content;
  max-height: calc(100vh - 2rem);
  margin:0 auto;
  overflow: hidden;
  background: rgba(255, 255, 255);
  border:2px solid #fff;
  padding: 39rem 7rem;
  display: flex;
  flex-direction: column;
  transform: scale(.1);
  opacity: 0;
  animation: ${show} .2s forwards;
  
  @media (max-width:512px){
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    .modal-background{
      margin-bottom: 64px;
      display: flex;
    }
  }
`;
