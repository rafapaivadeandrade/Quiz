import React, { useEffect } from "react"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { ContainerModal } from "../../components/Modal/styles"
import {
  ContainerFormModal,
  FormBackground,
  ContainerRankingDiv,
  FormButton,
} from "../../components/FormBackground"
import { useRouter } from "next/router"
import { FaSpinner } from "react-icons/fa"
import styled from "styled-components"
import { useUser } from "../../context/UserContext"
import { prisma } from "../../lib/prisma"

export default function Ranking(props: any) {
  const router = useRouter()
  const { loading, setLoading, getUsers } = useUser()
  const Spinner = styled(FaSpinner)`
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

  useEffect(() => {
    const id = setTimeout(() => {
      router.push(`/`)
    }, 10000)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <FormBackground>
        <ContainerModal question={true}>
          <ContainerFormModal ranking={true} result={true}>
            <ContainerRankingDiv>
              <div className="ranking-title">
                <img className="imageLeft" src="left.svg" />
                <span>RANKING</span>
                <img className="imageRight" src="right.svg" />
              </div>
              <div className="ranking-players">
                {props.players.map((p: any, index: number) => {
                  return (
                    <div key={index + 1} className="player-status">
                      <span className="player-name">
                        {index + 1}
                        {"º - "} {p.name}
                      </span>
                      <span className="player-points">{p.points}</span>
                    </div>
                  )
                })}
              </div>
            </ContainerRankingDiv>
            {loading ? (
              <FormButton>
                <Spinner size={50} color="#fff" />
              </FormButton>
            ) : (
              <FormButton
                onClick={() => {
                  router.events.on("routeChangeStart", () => {
                    setLoading(true)
                  })
                  router.events.on("routeChangeComplete", () => {
                    setLoading(false)
                  })
                  router.push("/")
                }}
              >
                <button type="submit">
                  <span style={{ fontSize: "44px" }}>{"BEGINNING"}</span>
                </button>
              </FormButton>
            )}
          </ContainerFormModal>
        </ContainerModal>
      </FormBackground>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async (
//     context: GetServerSidePropsContext
// ) => {
// const { db } = await connect();

// const users = await db.collection('quizzes').find({}).toArray();
// users.sort(function (a: any, b: any) {
//     if (a.points == b.points) {
//         return (a.duration_action < b.duration_action) ? -1 : (a.duration_action > b.duration_action) ? 1 : 0;
//     }
//     else {
//         return (a.points > b.points) ? -1 : 1;
//     }
// });
// const players = users;

// return {
//     props: {
//         players: JSON.parse(JSON.stringify(players)),
//     }
// }
// }

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const users = await prisma.user.findMany({
    orderBy: [{ points: "desc" }, { durationAction: "asc" }],
  })

  return {
    props: {
      players: users,
    },
  }
}
