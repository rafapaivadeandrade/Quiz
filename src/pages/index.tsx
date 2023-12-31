import React from "react"
import type { NextPage } from "next"
import {
  HomeLogoContainer,
  MainGrid,
  Spinner,
} from "../components/FormBackground"
import { useRouter } from "next/router"
import { BsHandIndexThumb } from "react-icons/bs"

const Home: NextPage = () => {
  const router = useRouter()
  const [showModal, setShowModal] = React.useState(false)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [randImages, setRandomImages] = React.useState<string>(
    "/KV_tela_descanso (1).png"
  )
  // const images = [
  //   "/KV_tela_descanso (1).png",
  //   "/KV_Aprovado.png"
  // ];

  function handleActiveModal() {
    setShowModal(true)
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
    <MainGrid
      onClick={() => {
        router.events.on("routeChangeStart", () => {
          setLoading(true)
        })
        router.events.on("routeChangeComplete", () => {
          setLoading(false)
        })
        router.push(`/register`)
      }}
    >
      <HomeLogoContainer loading={loading}>
        <video autoPlay loop muted>
          <source src={"./bg_game.mp4"} type="video/mp4"></source>
        </video>
        <img src="/logo.png" />
        <div>
          {loading ? (
            <div>
              <Spinner size={30} color="#fff" />
            </div>
          ) : (
            <>
              <p>Touch to Start</p>
              <BsHandIndexThumb></BsHandIndexThumb>
            </>
          )}
        </div>
      </HomeLogoContainer>
    </MainGrid>
  )
}

export default Home
