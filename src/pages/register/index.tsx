import React from 'react';
import { Toaster } from 'react-hot-toast';
import { FormBackground } from '../../components/FormBackground';
import { Modal } from '../../components/Modal';

export default function Register({ props }: any) {
  const [showModal, setShowModal] = React.useState(false);
  function handleActiveModal() {
    setShowModal(true);
  }
  return (
    <>
      <FormBackground>
        <div>
          <img onClick={() => {
            handleActiveModal()
          }} src="/KV_tela_descanso (1).png" alt="pfizer" />
          <Modal error={props} closeModal={() => { setShowModal(false) }} />
          <Toaster />
        </div>
      </FormBackground>
    </>
  );
}
