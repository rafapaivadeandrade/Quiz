import React from 'react';
import type { NextPage } from 'next'
import { ContainerFormModal, FormBackground, StartButton, RulesDiv } from '../components/FormBackground';
import { ContainerModal } from '../components/Modal/styles';
import { useRouter } from 'next/router';
import { FaSpinner } from 'react-icons/fa';
import styled from 'styled-components';

const Home: NextPage = () => {
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [randImages, setRandomImages] = React.useState<string>("/KV_tela_descanso (1).png");
  // const images = [
  //   "/KV_tela_descanso (1).png",
  //   "/KV_Aprovado.png"
  // ];

  const Spinner = styled(FaSpinner)`
  @keyframes  rubbishflow{
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
  animation:rubbishflow infinite 2s linear;
`;
  function handleActiveModal() {
    setShowModal(true);
  }

  // React.useEffect(() => {
  //   time = setInterval(() => {
  //     // let randomImage = images[Math.floor(Math.random() * images.length)];
  //     setRandomImages((prev:any) => {
  //       if(prev === image1){
  //         return image2;
  //       }
  //       else{
  //         return image1;
  //       }
  //     });
  //     clearInterval(time)
  //   }, 4000);
  // }, [time]);

  return (
    <FormBackground>
      <div>
        <img className='background-image' onClick={() => {
          handleActiveModal()
        }} src={randImages} alt="pfizer" />
        {showModal && (
          <ContainerModal question={true}>
            <ContainerFormModal rules={true} result={true}>
              <RulesDiv>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: "#043673", font: "normal normal 900 54px Montserrat" }}>
                    É verdade ou mito?
                  </span>
                  <span style={{ color: "#043673", font: "normal normal 900 54px Montserrat", paddingLeft: 10, paddingRight: 10 }}>
                    Jogue e descubra!
                  </span>
                </div>
                <div style={{ textAlign: 'center', paddingLeft: 10, paddingRight: 10, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <p style={{ color: "#043673", font: "normal normal bold 38px Montserrat", height: 0 }}>
                    Regulamento:
                  </p>
                  <p style={{ color: "#043673", width: '522px', fontSize: '28px', height: '309px', whiteSpace: 'pre-line' }}>
                    O game consiste em o participante {'\n'} acertar as perguntas Verdadeiras.
                    <div style={{ height: 20 }}></div>
                    Serão respondidas 10 perguntas {'\n'} aleatoriamente selecionadas {'\n'} pelo sistema.
                    <div style={{ height: 20 }}></div>
                    Será gerado um ranking exibido após {'\n'} final de cada participação.
                  </p>
                  <p style={{ color: "#043673", width: '553px', fontSize: '28px', fontWeight: 'bold' }}>Os 3 primeiros colocados, com a maior {'\n'} pontuação, serão premiados. O prêmio {'\n'} será uma assistente virtual “Alexa”.</p>
                </div>
                <div style={{ textAlign: 'center', paddingLeft: 10, paddingRight: 10, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <p style={{ color: "#043673", font: "normal normal bold 38px Montserrat", height: 0 }}>
                    Pontuação:
                  </p>
                  <p style={{ color: "#043673", width: '671px', fontSize: '29px', height: '90px', whiteSpace: 'pre-line' }}>
                    As perguntas foram divididas em 4 categorias:{'\n'}Covid, Pneumonia, Meningite e Institucional.{'\n'} Serão sorteadas 10 perguntas por vez jogada.
                  </p>
                  <span style={{ color: "#043673", font: "normal normal bold 28px Montserrat", marginTop: 20 }}>COVID - 16 pontos</span>
                  <span style={{ color: "#043673", font: "normal normal bold 28px Montserrat" }}>Pneumonia - 19 pontos</span>
                  <span style={{ color: "#043673", font: "normal normal bold 28px Montserrat" }}>Meningite - 26 pontos</span>
                  <span style={{ color: "#043673", font: "normal normal bold 28px Montserrat" }}>Institucional - 36 pontos</span>
                </div>
                <div style={{ color: '#043673', font: 'normal normal 900 64px/78px Montserrat', marginTop: 67, marginBottom: 100 }}>Boa Sorte!</div>
                {loading ? (
                  <StartButton>
                    <Spinner size={50} color="#fff" />
                  </StartButton>
                ) : (
                  <StartButton onClick={() => {
                    router.events.on('routeChangeStart', () => {
                      setLoading(true);
                    });
                    router.events.on('routeChangeComplete', () => {
                      setLoading(false);
                    });
                    router.push(`/register`);
                  }}><button type='submit'><span style={{ fontSize: '40px' }}>CONTINUAR</span></button></StartButton>
                )}
              </RulesDiv>
            </ContainerFormModal>
          </ContainerModal>
        )}
      </div>
    </FormBackground>
  )
}

export default Home
