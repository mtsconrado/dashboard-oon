import React, { useState } from 'react'
import { CButton, CCol, CRow } from '@coreui/react'
import { Modal } from 'react-bootstrap';

import FormatDate from '../components/FormatDate';
import CustomerData from '../components/CustomerData';

const Travel = () =>{
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [fullscreen, setFullscreen] = useState(true);
    
    function verifica(breakpoint){
        setFullscreen(breakpoint);
        const handleShow =  setShow(true);
    }
    return (
        <> 
            <CButton onClick={verifica} > Gerar relatório </CButton>
            <Modal 
                show={show} 
                onHide={handleClose}
                size="xl"
            >
                <Modal.Header closeButton>
                    <div>
                    <Modal.Title className="font-info-title">Viagens</Modal.Title>
                    <FormatDate date={new Date()} />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <CRow>
                        <CCol>
                        <CustomerData />
                        </CCol>
                        <CCol>
                            <label className='font-info-subTitle'>Dados das viagens realizadas pelo veículo</label>
                            <br />
                            <label className='font-info-interTitle'>Placa do veículo</label>
                            <br />
                            <label className='font-info-content'></label>
                            <br />
                        </CCol>
                    </CRow>
                </Modal.Body>
                <Modal.Footer>  
                    <CButton onClick={handleClose}>
                        Sair
                    </CButton>
                </Modal.Footer>
            </Modal>
        </>
    )   
}

export default  Travel;
