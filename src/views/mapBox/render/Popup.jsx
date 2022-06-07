import React, { useEffect, useState } from 'react'

import ReactMapGL, {Popup} from 'react-map-gl';

import { CImage, CButton, CContainer, CRow, CCol } from '@coreui/react'
import carro from './../../../assets/images/carro01.jpeg'
import BtnMidia from '../../devices/render/btn/BtnMidia'

import { Modal } from 'react-bootstrap';
import Report from './Report'
import InfoCar from './InfoCar'

import './popup.css'

const PopupRen = ( props) => {
   // Modal 1 - Relatorio
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    function verifica(){
        const handleShow =  setShow(true);
    }
    
    // Modal 2 - informacoes do Carro
    const [visible2, setVisible2] = useState(false)  
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    function verifica2(){
        const handleShow2 =  setShow2(true);
    }

    // funcoes e variaveis do codigo
    const [statusCarro, setStatusCarro] = useState(true)
    const [statusPagamento, setStatusPagamento] = useState(false)
    
    // dados do carro
    const [carroInfo, setCarroInfo] = useState()

    useEffect(() =>{
        if(props.posicao != null){
            setCarroInfo(props.posicao)
        }
    }, [])

     const lats =  -19.964512
    const longs = -43.962461
    
    

    const closePopup = () => {
        console.log('aqui mostra ', carroInfo.lng)
        console.log('tipo da ', typeof lats)
        props.parentCallback(null)
    }


    if(carroInfo == null){
        return (
            <> </>
        )
    }else{
        return(
            <> 
                
                <Popup
                // props.posicao.lng
                    latitude = {props.posicao.lat } // props.posicao.lat  carroInfo.lat   -19.964512
                    longitude = {props.posicao.lng }// carroInfo.lng    -43.962461
                    onClose={closePopup}
                    closeButton={false}
                >   
                    <CRow className="align-items-start colunas-popup ">
                        <CCol className='andar1-col-esq' sm="auto">
                            <CImage  fluid src = {carro} className='img-pop' />
                        </CCol>
                        <CCol  className = 'andar1-col-dir'sm="auto">
                            <label className='font-sub'> Placa </label>
                            <br />
                            <label className='font-text'>XXX-1234</label> 
                            <br />
                            <label className='font-text'>{props.posicao.name}</label>
                            <br />
                        </CCol>
                    </CRow>
                    <CRow  className = "justify-content-around colunas-popup2" >
                        <CCol className='andar2-col-esq' sm="auto">
                            <label className='font-sub'> Status </label>
                            <br />
                            { statusCarro == true ? (
                                <label className='font-text'>Em Movimento </label> 
                             )
                                : 
                                    <label className='font-text'>Parado</label> 
                                
                            }
                            <br />
                            <label className='font-sub'> Velocidade </label>
                            <br />
                            <label className='font-text'> 60 km/h</label> 
                            
                        </CCol>
                        <CCol className='andar2-col-meio' sm="auto"> 
                            <label className='font-sub'> Motorista </label>
                            <br />
                            <label className='font-text'> Gustavo Alcantara </label> 
                            <br />
                            <label className='font-sub'> Pagamento </label>
                            <br />
                            <label className='font-text'> R$ 450,20</label> 
                            <br />
                           
                        </CCol>
                        <CCol className='andar2-col-dir' sm="auto">
                            <CButton className= "btn-relatorio" size='sm' color="secondary" shape="rounded-pill" onClick={verifica}>
                                <label className='font-sub'> Relatório Completo </label>
                            </CButton>
                            <br />
                            <CButton className= "btn-carro" size='sm' color="secondary" shape="rounded-pill" onClick={verifica2}>
                                <label className='font-sub'> Informações Veículo  </label>
                            </CButton>
                        </CCol>
                    </CRow>
    
                    <Modal 
                        show={show} 
                        onHide={handleClose}
                        size="xl"
                    >
                        <Modal.Header  closeButton>
                            <Modal.Title>Relatórios</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='container-body'>
                            <Report /> 
                        </Modal.Body>
                        <Modal.Footer>  
                            <CButton  onClick={handleClose}>
                                Sair
                            </CButton>
                        
                        </Modal.Footer>
                    </Modal>
    
                    <Modal 
                        show={show2} 
                        onHide={handleClose2}
                        size="xl"
                    >
                        <Modal.Header  closeButton2>
                            <Modal.Title>Informações Carro</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='container-body'>
                            <InfoCar />
                        </Modal.Body>
                        <Modal.Footer>  
                            {/* Passar o props aqui do veículo depois  */}
                            <BtnMidia /> 
                        
                            <CButton  onClick={handleClose2}>
                                Sair
                            </CButton>
                        
                        </Modal.Footer>
                    </Modal>
                  
                </Popup>
                
                       
            </>
        )
    }
    
}

export default  PopupRen