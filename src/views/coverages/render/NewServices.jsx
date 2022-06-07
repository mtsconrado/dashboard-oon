import React, {useState} from 'react'
import { Button, Modal,  Form, Container, Row, Col    }  from 'react-bootstrap';
import axios from "axios";
import IconRender from './IconNewService'
import CIcon from '@coreui/icons-react'
import Cookies  from 'js-cookie'

import UrlDomain from './../../../config'

import {
    cilAddressBook, 
    cilAirplaneModeOff, 
    cilAirplaneMode, 
    cilAlarm, 
    cilAnimal, 
    cilBabyCarriage, 
    cilBaby, 
    cilBellExclamation,
    cilBurn,
    cilBusAlt,
    cilCarAlt,
    cilCalendar,
    cilCursor,
    cilCreditCard,
    cilEnvelopeClosed,
    cilGarage,
    cilHospital,
    cilLocationPin,
    cilMagnifyingGlass,
    cilPaperPlane,
    cilRain,
    cilRss,
    cilTaxi,
    cilTruck,
    cilAirplay


} from '@coreui/icons'

import 
  {
    CButton ,
    CFormInput,
    CFormLabel,
    CRow,
    CContainer,
    CCol,
   
   
  } from '@coreui/react'


const BtnNewService = (props)=>{

    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [iconeEscolhido, setIconeEscolhido] = useState()
    const [describe, setDescribe] = useState()
    const [nameService, setNameService] = useState()
    const [valuePerKm, setValuePerKm] = useState()
    function captureDescribe(e){
        setDescribe(e.target.value)
    }

    function captureName(e){
        setNameService(e.target.value)
    }

    function captureValue(e){
        setValuePerKm(e.target.value)
    }

    function verifica(){
        const handleShow =  setShow(true);
    }

    function salvarEdicoes (){
        
        let save = [
            {
                description:nameService,
                valuePerKm: parseFloat(valuePerKm)
            }
        ]
           
        const token = Cookies.get('TokenID')
        const userType = Cookies.get('userType')
        let config = {
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios 
            .post(`${UrlDomain}/coverages`, save, config)
            .then((response) => { 
                setShow(false);
                props.attPage()                
            })
            .catch(r =>{ 
                console.log('error', r), alert('Login expirado'),window.location.reload()
            }) // window.location.reload();


        
    }

    function escolha (e){
        setIconeEscolhido(e)
    }
    
    return (
        <> 
            <CButton  color="dark"  variant="outline" onClick={ verifica} >
                +Adicionar
            </CButton>


            <Modal 
                show={show} 
                onHide={handleClose}
                size="xl"
            >
                    
                <Modal.Header  closeButton>
                    <Modal.Title>Adicionar novo serviço </Modal.Title>
                </Modal.Header>
                <Modal.Body className='container-body'>
                    
                    <CRow>
                        <CCol>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <CFormLabel >Nome do Serviço</CFormLabel>
                                    <CFormInput type="text" onChange={captureName} id="namePlan" placeholder=""/>
                                    <br />
                                    <CContainer className='container-select'>
                                        {/* ICONES USAVEIS  */}
                                        <CButton onClick={()=> escolha('cilAddressBook')} className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAddressBook}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilAirplaneModeOff')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplaneModeOff}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilAirplaneMode')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAirplaneMode}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilAlarm')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAlarm}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilAnimal')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilAnimal}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilBabyCarriage')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilBabyCarriage}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilBaby')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilBaby}  size="xl" />
                                        </CButton>
                                        <CButton onClick={()=> escolha('cilBellExclamation')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilBellExclamation}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilBurn')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilBurn}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilBusAlt')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilBusAlt}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilCarAlt')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilCarAlt}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilCalendar')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilCalendar}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilCursor')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilCursor}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilCreditCard')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilCreditCard}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilEnvelopeClosed')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilEnvelopeClosed}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilGarage')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilGarage}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilHospital')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilHospital}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilLocationPin')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilLocationPin}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilMagnifyingGlass')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilMagnifyingGlass}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilPaperPlane')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilPaperPlane}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilRain')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilRain}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilRss')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilRss}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilTaxi')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilTaxi}  size="xl" />
                                        </CButton> 
                                        <CButton onClick={()=> escolha('cilTruck')}  className='iconContainer' variant='ghost' color='dark'>
                                            <CIcon icon={cilTruck}  size="xl" />
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

                                    <br />
                                    {iconeEscolhido && (
                                            <div> 
                                                <label> Ícone escolhido  </label>
                                                <br />
                                                <CIcon icon={iconeEscolhido}  size="xl" />
                                            </div>
                                            
                                        )
                                    }
                                  

                                </Form.Group>
                            </Form>
                        </CCol>
                        <CCol >
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Descrição do serviço </Form.Label>
                                    <Form.Control as="textarea" onChange={captureDescribe} className='descricao-container'rows={6} />
                                    <br />
                                    <Form.Label>Valor em reais por Km </Form.Label>
                                    <br />
                                    <input className='container-input-value-service' type="number" onChange={captureValue} required  min="0.00"  step=".01"/>
                                </Form.Group>
                            </Form>
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

export default  BtnNewService