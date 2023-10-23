import React from "react"
import { Toaster } from "react-hot-toast"
import { FormBackground } from "../../components/FormBackground"
import { Modal } from "../../components/Modal"

export default function Register({ props }: any) {
  const [showModal, setShowModal] = React.useState(false)
  function handleActiveModal() {
    setShowModal(true)
  }
  return (
    <>
      <FormBackground>
        <div>
          <img
            onClick={() => {
              handleActiveModal()
            }}
            src=""
            alt=""
          />
          <Modal
            error={props}
            closeModal={() => {
              setShowModal(false)
            }}
          />
          <Toaster />
        </div>
      </FormBackground>
    </>
  )
}
