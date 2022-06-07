import React, {useState} from 'react'
import { Button, Modal,  Form  }  from 'react-bootstrap';
import CIcon from '@coreui/icons-react'
import { cilBell, cilBellExclamation, cilRecycle, cilMenu } from '@coreui/icons'
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CButton,
    CBadge,
    CPopover,
  } from '@coreui/react'
import './notify.css'

import RenderNotify from './Render/RenderNotify'

const Notify = () =>{
    let cont =0 
    
    const [flag, setFlag] = useState(1) // pegar quantidade de novas notificacoes
    const handleClose = () => setShow(false);
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const verifica = ()=>setShow(true)
    const salvarInfos = () => {
        setShow(false);
    }


    const [notificacao, setNotificacao]= useState(
        [
            {titulo:'Notificacao 1', text:'texto notificacao1'},
            {titulo:'Notificacao 2', text:'texto notificacao2'},
            {titulo:'Notificacao 3', text:'texto notificacao3'},
            {titulo:'Notificacao 1', text:'texto notificacao1'},
            {titulo:'Notificacao 2', text:'texto notificacao2'},
            {titulo:'Notificacao 3', text:'texto notificacao3'},
            {titulo:'Notificacao 1', text:'texto notificacao1'},
            {titulo:'Notificacao 2', text:'texto notificacao2'},
        ]
    ) 
    const numNot = notificacao.length
    const rest = numNot - 5
    // limpa notificacoes, provavelmente isso vai ser feito pelo BFF
    const ClearNotify = () => {
        setFlag(0)
    }

    if(flag > 0){
        return (
            <>  
    
                <CPopover
                    content={
                        <div>
                            <div className='container-lixeira'> 
                                <CButton variant='outline' size="sm" color="danger" className="position-lixeira-relative" onClick={ClearNotify} > 
                                    <CIcon icon={cilRecycle} size="xl" />
                                </CButton>
                            </div>
                            
                            <hr />
                            {notificacao.map((item, index)=>{
                                    if(index < 5){
                                        return(
                                            <div key={index.toString()}> 
                                                <label className='Titulo-notificacao'> {item.titulo}</label>
                                                <br />
                                                <p className='texto-notificacao'> {item.text}</p>
                                                <hr />
                                                
                                            </div> 
                                        )
                                    }else if(cont <1){
                                        cont = 1
                                        return(
                                            <div key={index.toString()}>
                                                {/* Abre um modal listando todas notificações. */}
                                                <CButton onClick={verifica} size="sm" className='btn-notificacao-modal' color='dark' variant='ghost'> Mais {rest} notificações </CButton>
                                                <Modal 
                                                    show={show} 
                                                    onHide={handleClose}
                                                    size="xl"
                                                >
                                                    <Modal.Body className='container-body'>
                                                        <RenderNotify notificacoes = {notificacao} /> 
                                                    </Modal.Body>
                                                    
                                                </Modal>
                                            </div>
                                        )
                                    }
                                }
                            )}
                            
                        </div>
                    }
                    placement="bottom"
                    className='notificacao-popover'
                >
                    <CButton variant='ghost' size="sm" color="danger" onClick={ClearNotify} className="position-relative">
                        <CIcon icon={cilBellExclamation} size="xl" />
                        <CBadge color="danger"  position="top-end" shape="rounded-pill">
                            {numNot}
                        </CBadge>
                    </CButton>
                </CPopover>
                
            </>
        )
    }else{
        return (
            <>  
                <CPopover
                    content={<h6>Não há notificações</h6>}
                    placement="bottom"
                    className='notificacao-popover'
                >
                    <CButton variant='ghost' color="dark">
                        <CIcon icon={cilBell} size="xl" />
                    </CButton>
                </CPopover>
                
            </>
        )
    }
   
}

export default  Notify