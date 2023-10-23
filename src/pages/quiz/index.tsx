import React, { useEffect, useState } from "react"
import { GetStaticProps, GetStaticPropsContext } from "next"
import {
  ContainerFormModal,
  FormBackgroundQuiz,
  ThankYouDiv,
} from "../../components/FormBackground"
import { Toaster } from "react-hot-toast"
import { useRouter } from "next/router"
import { useUser } from "../../context/UserContext"
import QuestionList from "../../data/questions.json"
import Question from "../../components/Question"
import moment from "moment"
import { ContainerModal } from "../../components/Modal/styles"
import { FaSpinner } from "react-icons/fa"
import styled from "styled-components"

export default function Quiz(props: any) {
  const router = useRouter()
  const { update, calculateResult, loading, setLoading } = useUser()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [markedAnswers, setMarkedAnswers] = useState(
    new Array(props.shuffled2.length)
  )
  const isQuestionEnd = currentQuestionIndex === props.shuffled2.length
  const [durationTemp, setDuration] = useState<number>()
  const [points, setPoints] = useState<number>(0)
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
    const saveFinalData = async () => {
      if (isQuestionEnd) {
        const data = await calculateResult(
          props.shuffled2,
          markedAnswers,
          durationTemp
        )
        setPoints(data.rating_score)
        if (typeof window !== "undefined") {
          const userId = window.localStorage.getItem("userId")
          const userIdParsed = Number(userId as string)

          update(
            (await data).rating_score,
            (await data).duration_action,
            userIdParsed
          )
          window.localStorage.clear()

          const id = setTimeout(() => {
            router.push(`/ranking`)
          }, 4000)
          return () => clearTimeout(id)
        }
      }
    }

    saveFinalData()
  }, [currentQuestionIndex])

  useEffect(() => {
    if (currentQuestionIndex === 0) {
      setDuration(moment.utc().valueOf())
    }
  }, [])

  // if (typeof window !== "undefined") {
  //   const userId = window.localStorage.getItem("userId");
  //   const userIdParsed = userId as string

  //   if (!userIdParsed) {
  //     router.push(`/`);
  //   }
  // }

  return (
    <FormBackgroundQuiz>
      <Toaster />
      {isQuestionEnd ? (
        <>
          <ContainerModal question={true}>
            <ContainerFormModal result={true}>
              <ThankYouDiv>
                <img src="/parabens.png" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>VOCÊ ATINGIU</span>
                  <span>{points}</span>
                  <span>PONTOS</span>
                  <span>
                    Obrigado pela participação e {"\n"}por ampliar o seu
                    conhecimento {"\n"}nas doenças preveníveis pelas {"\n"}
                    vacinas Pfizer
                  </span>
                </div>
                {loading ? (
                  <div className="ranking-div">
                    <span>
                      <Spinner size={30} color="#fff" />
                    </span>
                  </div>
                ) : (
                  <div
                    className="ranking-div"
                    onClick={() => {
                      router.events.on("routeChangeStart", () => {
                        setLoading(true)
                      })
                      router.events.on("routeChangeComplete", () => {
                        setLoading(false)
                      })
                      router.push("/ranking")
                    }}
                  >
                    <span>RANKING GERAL</span>
                  </div>
                )}
              </ThankYouDiv>
            </ContainerFormModal>
          </ContainerModal>
        </>
      ) : (
        <Question
          question={props.shuffled2[currentQuestionIndex]}
          setAnswer={(index: number) => {
            setMarkedAnswers(arr => {
              let newArr = [...arr]
              newArr[currentQuestionIndex] = index
              return newArr
            })
            setCurrentQuestionIndex(currentQuestionIndex + 1)
          }}
          currentQuestionIndex={currentQuestionIndex + 1}
        />
      )}
    </FormBackgroundQuiz>
  )
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const shuffled2 = Object.keys(
    QuestionList as { covid: []; pneumonia: []; Meningo: []; Institucional: [] }
  )
    .map(questionType =>
      QuestionList[
        questionType as "covid" | "pneumonia" | "Meningo" | "Institucional"
      ]
        .map(question => ({ question, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ question }) => question)
        .slice(0, questionType == "Institucional" ? 4 : 2)
    )
    .flat(1)

  return {
    props: {
      shuffled2,
    },
  }
}
