import React from 'react';
import { CButton, CFormInput, CInputGroup } from '@coreui/react'
import { Modal } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

import InfoCars from './InfosCars'

function ModalDevices({ show2, closeModal2 }) {
    return (
        <Modal
            show={show2}
            onHide={closeModal2}
            size="xl"
        >
            <Modal.Header closeButton>
                <Modal.Title className='w-50'>Dispositivos</Modal.Title>
                    <CInputGroup className='w-25'>
                        <CFormInput
                        className=""
                            placeholder="Pesquise uma placa"
                            type="text"

                        />
                        <CButton
                        className=""
                            type="button"
                            color="secondary"
                            variant="outline"
                        >
                            <BsSearch className='user-icons' />
                        </CButton>
                    </CInputGroup>
                {/* <div className="d-flex">
                    <CFormInput
                        type="text"
                        size='sm'
                        placeholder="Pesquise uma placa"
                    />
                    <CButton
                        variant='ghost'
                        color="secondary"
                    >
                    </CButton>
                </div> */}
            </Modal.Header>
            <Modal.Body>
                <InfoCars />
            </Modal.Body>
        </Modal>
    )
}

export default  ModalDevices;
