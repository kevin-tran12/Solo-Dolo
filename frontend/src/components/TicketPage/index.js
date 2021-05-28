import React, {useState} from 'react'
import {Modal} from '../../context/Modal'
import TicketForm from './TicketForm'

export default function TicketFormModal() {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <>
        <button onClick={() => setShowModal(true)}>Purchase Ticket!</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <TicketForm />
          </Modal>
        )}
      </>
    );
  }