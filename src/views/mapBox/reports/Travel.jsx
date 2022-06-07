import React, { useState } from 'react'
import {
    CButton,

  } from '@coreui/react'

import { Modal } from 'react-bootstrap';

const Resume = () =>{

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
                fullscreen={fullscreen}
                // size="xl"
            >
                    
                <Modal.Header  closeButton>
                    <Modal.Title>Resumo da operação </Modal.Title>
                </Modal.Header>
                <Modal.Body className='container-body'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat suscipit consequatur dignissimos veritatis! Dolores, voluptates iure quasi laboriosam aperiam, tempore praesentium est rerum itaque commodi, quos dignissimos magnam excepturi?</p>
                </Modal.Body>
                <Modal.Footer>  
                    <CButton  onClick={handleClose}>
                        Sair
                    </CButton>
                 
                </Modal.Footer>
                    
            </Modal>
        </>
    )   
}

export default  Resume