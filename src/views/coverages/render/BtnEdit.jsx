import React, {useState} from 'react'
import axios from 'axios'
import Cookies  from 'js-cookie'

import UrlDomain from './../../../config'
var CryptoJS = require("crypto-js");

import { Button, Modal,  Form, Container, Row, Col    }  from 'react-bootstrap';
import {
    CButton ,
    CFormInput,
    CFormLabel,
    CRow,
    CFormCheck,
    CCol,
    
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'

  const icons = [cilAccountLogout, cilActionRedo, cilActionUndo, cilAddressBook, cilAirplaneModeOff, cilAirplaneMode, cilAirplay, cilAlarm]
  import {cilAccountLogout, cilActionRedo, cilActionUndo, cilAddressBook, cilAirplaneModeOff, cilAirplaneMode, cilAirplay, cilAlarm } from '@coreui/icons'

const EditarService = (props) =>{
    const token = Cookies.get('TokenID')
    
    var usT = Cookies.get('userType')
    var msg  = CryptoJS.AES.decrypt(usT, 'OnnSeguros');
    var msgOri = msg.toString(CryptoJS.enc.Utf8);

    const userType = msgOri

    let config = {
        headers: {
          'Authorization': `Bearer ${token}`, 
          "Accept": "*/*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "PATCH"
        }
    };
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [servico, setServico ] = useState(props.item.description)
    const servicoNome = (e) =>{setServico(e.target.value)}

    const [descricao, setDescricao] = useState('Campo ainda não aplicado....')
    const serviceDescricao = (e) =>{setDescricao(e.target.value)}  

    const [valueKm, setValueKm] = useState(parseFloat(props.item.valuePerKm))
    const newValueKm = e =>{setValueKm(e.target.value)}
    
    const [status, setStatus] = useState(false)
    const getStatus = (e) =>{setStatus(e)}

  
   
    function verifica(){
        const handleShow =  setShow(true);
    }

    async function salvarEdicoes (){
        setShow(false);
        let save = {id:props.item.id , description:servico , disabled:status, valuePerKm:valueKm}
        
       await  axios 
            .patch(`${UrlDomain}/coverages`, save, config)
            .then((response) => { 
                setShow(false);
                props.parentCallback()
            })
            .catch(r =>{ 
                console.log('error', r), alert('Login expirado') //,window.location.reload()
            }) // window.location.reload();
    }



    return (
        <>
            <CButton disabled onClick={verifica} color="light">Editar</CButton>

            <Modal 
                show={show} 
                onHide={handleClose}
                size="xl"
            >
                    
                <Modal.Header  closeButton>
                    <Modal.Title>Editar  serviço </Modal.Title>
                </Modal.Header>
                <Modal.Body className='container-body'>
                    
                    <CRow>
                        <CCol>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <div className='containers-inputs-coverages'>
                                        <CFormLabel >Nome do Serviço</CFormLabel>
                                        <CFormInput type="text" id="namePlan" value = {servico} onChange={servicoNome} />
                                    </div>
                                   
                                    <div className='containers-inputs-coverages'>
                                        <CFormLabel >Valor por Km</CFormLabel>
                                        <CFormInput type="number" id="namePlan" value = {valueKm} required  min="0.00"  step=".01" onChange={newValueKm} />
                                    </div>

                                    <div className='containers-inputs-coverages'>
                                        <Form.Label> Desativar cobertura ? </Form.Label>
                                        <CFormCheck type="radio" onChange={() =>{getStatus(true)}} name="statusUser" id="statusUser1" label="Sim"/>
                                        <CFormCheck type="radio" onChange={() =>{getStatus(false)}} name="statusUser" id="statusUser2" label="Não" defaultChecked/>
                                    </div>
                                    <br />
                                    {/*
                                    <CContainer className='container-select'>
                                        <CButton onClick={()=> escolha('cilAccountLogout')} className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAccountLogout}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilActionRedo')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilActionRedo}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilActionUndo')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilActionUndo}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilAddressBook')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAddressBook}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilAirplaneModeOff')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplaneModeOff}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilAirplaneMode')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplaneMode}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton>
                                        


                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilAirplay')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplay}  size="xl" />
                                        </CButton>
                                    </CContainer> 
                                    */}
                                  

                                </Form.Group>
                            </Form>
                        </CCol>
                        <CCol >
                            <div className='containers-inputs-coverages'>
                                <Form.Label>Descrição do serviço </Form.Label>
                                <Form.Control as="textarea" value = {descricao} onChange={serviceDescricao} rows={8} />
                            </div>
                      
                            
                            
                                
                                
                        </CCol>
                    </CRow>





                </Modal.Body>
                
                <Modal.Footer>  
                    <Button variant="secondary" onClick={handleClose}>
                        Sair
                    </Button>
                    <Button onClick = {salvarEdicoes} variant="primary" >
                        Salvar Alterações
                    </Button>
                </Modal.Footer>
                    
            </Modal>
        </>
    )
}


export default  EditarService