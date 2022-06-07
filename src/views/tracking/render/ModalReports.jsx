import React from 'react'
import { CButton } from '@coreui/react';
import { Modal }  from 'react-bootstrap';
import Report from './Report';

function ModalReports({show, closeModal}) {
  return (
        <Modal
        show={show} 
        onHide={closeModal}
        size="xl"
        >
            <Modal.Header  closeButton>
                <Modal.Title>Relatórios</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Report /> 
            </Modal.Body>
            <Modal.Footer>  
                <CButton onClick={closeModal}>
                    Sair
                </CButton>
            </Modal.Footer>
        </Modal>
  )
}

export default  ModalReports;
