import React, { useState } from "react"
import * as S from "./styles"
import { FormContainer, FormButton } from "../FormBackground"
import { Form, Formik } from "formik"
import CustomField from "../CustomField"
import CheckboxTerms from "../CheckBoxTerms/CheckBoxInput"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useUser } from "../../context/UserContext"
import toast from "react-hot-toast"
import { FaSpinner } from "react-icons/fa"
import styled from "styled-components"

interface SignInFormData {
  name: string
  email: string
  acceptTerms: string
}

interface CheckboxOption {
  id: string
  value: string
  label: string
}

export const Modal = ({ closeModal }: any) => {
  const { register, loading, setLoading } = useUser()
  const router = useRouter()
  const [seconds, setSeconds] = useState(0)
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
  let time: string | number | NodeJS.Timeout | undefined
  const handleOutsideClick = (e: any) => {
    if (e.target.id === "modalDashboard") closeModal()
  }

  const checkbox_terms: CheckboxOption[] = [
    {
      id: "terms",
      value: "Accepted Terms",
      label: "Accept the terms and privacy policy",
      // label: "Aceito os termos do Regulamento e a Política de Privacidade",
    },
  ]

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is obligatory"),
    email: Yup.string()
      .required("E-mail is obligatory")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Invalid E-mail"
      ),
    // .matches(/^[A-Za-z0-9._%+-]+@pfizer\.com$/, "Invalid E-mail"),
    acceptTerms: Yup.mixed()
      .oneOf(
        checkbox_terms.map(opt => opt.value),
        "Invalid selection"
      )
      .required("Obligatory field"),
  })

  async function handleOnSubmit(data: SignInFormData) {
    try {
      setLoading(true)
      setSeconds(3)
      const result = await register(data.name, data.email, data.acceptTerms)

      if (result !== undefined) {
        setLoading(false)
        let sec = 3
        time = setInterval(() => {
          --sec
          setSeconds(sec)
          if (sec === 0) {
            sec = 3
            clearInterval(time)
            router.push(`/quiz`)
          }
        }, 1000)
      }
      if (result === undefined) {
        setSeconds(0)
        setLoading(false)
        router.push(`/register`)
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        toast.error("Fail on register.")
        router.push(`/register`)
      }
    }
  }

  return (
    <S.ContainerModal id="modalDashboard" onClick={handleOutsideClick}>
      <S.ContentModal>
        <div className="modal-background">
          <button className="closeModal" onClick={() => router.push(`/`)}>
            X
          </button>
          <FormContainer>
            <Formik
              initialValues={{ name: "", email: "", acceptTerms: "" }}
              validationSchema={schema}
              onSubmit={values => {
                handleOnSubmit(values)
              }}
            >
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "45px",
                }}
              >
                <p
                  style={{
                    alignSelf: "center",
                    color: "#043673",
                    fontWeight: "bold",
                    fontSize: 50,
                    fontFamily: "Montserrat",
                  }}
                >
                  FILL THE FORM
                </p>
                <CustomField
                  type="text"
                  name="name"
                  placeholder="Full Name/Nick Name"
                />
                <CustomField
                  type="text"
                  name="email"
                  placeholder="Personal Email"
                />
                <CheckboxTerms name="acceptTerms" />

                {loading ? (
                  <FormButton time={seconds > 0 ? true : false}>
                    <Spinner size={50} color="#fff" />
                  </FormButton>
                ) : (
                  <FormButton time={seconds > 0 ? true : false}>
                    <button type="submit">
                      <span>{seconds > 0 ? seconds : "PLAY"}</span>
                    </button>
                  </FormButton>
                )}
              </Form>
            </Formik>
          </FormContainer>
        </div>
      </S.ContentModal>
    </S.ContainerModal>
  )
}
