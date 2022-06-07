import React, { useState } from 'react'
import { CButton, CCol, CRow } from '@coreui/react'
import { Modal } from 'react-bootstrap';

import FormatDate from '../components/FormatDate';
import CustomerData from '../components/CustomerData';

const Resume = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    function verifica(){
        setShow(true);
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
                    <Modal.Title className="font-info-title">Resumo</Modal.Title>
                    <FormatDate date={new Date()} />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <CRow>
                        <CCol>
                            <CustomerData />
                        </CCol>
                        <CCol>
                            <label className='font-info-subTitle'>Dados do veículo</label>
                            <br />
                            <label className='font-info-interTitle'>Placa do veículo</label>
                            <br />
                            <label className='font-info-content'></label>
                            <br />

                            <label className='font-info-interTitle'>Status do dispositivo</label>
                            <br />
                            <label className='font-info-content'></label>
                            <br />

                            <label className='font-info-interTitle'>Último sincronismo</label>
                            <br />
                            <label className='font-info-content'></label>
                            <br />

                            <label className='font-info-interTitle'>Quilometragem</label>
                            <br />
                            <label className='font-info-content'></label>
                            <br />

                            <label className='font-info-interTitle'>Consumo/km</label>
                            <br />
                            <label className='font-info-content'></label>
                            <br />

                            <label className='font-info-interTitle'>Sinistro abertos no mês</label>
                            <br />
                            <label className='font-info-content'></label>
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

export default  Resume