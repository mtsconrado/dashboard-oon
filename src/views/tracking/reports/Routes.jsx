import React, { useState } from 'react';
import { CButton, CCol, CRow } from '@coreui/react';
import { Modal } from 'react-bootstrap';

import FormatDate from '../components/FormatDate';
import CustomerData from '../components/CustomerData';

const Routes = () =>{
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
                    <Modal.Title className="font-info-title">Rotas</Modal.Title>
                    <FormatDate date={new Date()} />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <CRow>
                        <CCol>
                            <CustomerData />
                        </CCol>
                        <CCol>
                            <label  className='font-info-subTitle'>Rotas realizadas no mês</label>
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

export default  Routes;
