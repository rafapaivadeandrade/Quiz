import { createContext, ReactNode, useContext, useState } from "react"
import toast from "react-hot-toast"
import moment from "moment"
import axios from "axios"

type UserContextData = {
  register: (name: string, email: string, acceptTerms: string) => void
  update: (rating_score: number, duration_action: string, id: number) => void
  calculateResult: (
    props: any,
    markedAnswers: any,
    durationTemp: any
  ) => Promise<{ rating_score: number; duration_action: string }>
  loading: boolean
  setLoading: (active: boolean) => void
  getUsers: () => any
}

export const UserContext = createContext({} as UserContextData)

type UserContextProviderProps = {
  children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [loading, setLoading] = useState<boolean>(false)

  async function getUsers() {
    try {
      const users = await axios.get("/api/user")
      console.log(users)
      return users
    } catch (err: any) {
      if (err.response.status === 400) {
        toast.error(`${err.response.data.message}`)
      }
    }
  }

  async function register(name: string, email: string, acceptTerms: string) {
    try {
      const userId = await axios.post(`/api/user`, {
        name,
        email,
        acceptTerms,
      })
      if (typeof window !== "undefined") {
        window.localStorage.setItem("userId", userId.data.id)
      }

      toast.success("Usuário cadastrado!")
      return userId.data.id
    } catch (err: any) {
      if (err.response.status === 400) {
        toast.error(`${err.response.data.message}`)
      }
    }
  }

  async function update(
    rating_score: number,
    duration_action: string,
    id: number
  ) {
    console.log("update:", rating_score, duration_action, id)
    try {
      await axios.put(`/api/user`, {
        userId: id,
        rating_score: rating_score,
        duration_action: duration_action,
      })
      return
    } catch (err) {
      toast.error("Não foi possível atualizar usuário.")
    }
  }

  async function calculateResult(
    props: any,
    markedAnswers: any[],
    durationTemp: any
  ) {
    let time = moment.utc().valueOf()
    const duration = timeDifference(durationTemp, time)
    let correct = 0
    props.forEach(
      (
        question: { correctOptionIndex: any; points: number },
        index: number
      ) => {
        if (question.correctOptionIndex === markedAnswers[index]) {
          correct += question.points
        }
      }
    )

    return {
      rating_score: correct,
      duration_action: duration,
    }
  }

  function timeDifference(startDate: any, finalDate: any) {
    let difference = finalDate - startDate

    let secondsDifference = Math.floor(difference / 1000)

    let hours = Math.floor(secondsDifference / 3600)
    let minutes = Math.floor(secondsDifference / 60) % 60
    let seconds = secondsDifference % 60
    return [hours, minutes, seconds]
      .map(v => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":")
  }

  return (
    <UserContext.Provider
      value={{
        register,
        calculateResult,
        update,
        loading,
        setLoading,
        getUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}
