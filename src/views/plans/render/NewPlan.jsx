import React, {useState, useEffect} from 'react'
import { Button, Modal,  Form, Container, Row, Col    }  from 'react-bootstrap';
import axios from 'axios'
import Multiselect from 'multiselect-react-dropdown';
import Cookies  from 'js-cookie'

import UrlDomain, { configCookies } from './../../../config'

import {
    CFormCheck,
    CRow,
    CButton,
    CCol,
    CFormLabel,
    CFormInput
  } from '@coreui/react'

const NewPlan = (props) => {
    
    // const token = Cookies.get('TokenID')
    const userType = Cookies.get('userType')
   
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const handleClose = () => { 
        setShow(false);
        setPlanPerson(false)
    }
    const [coverages, setCoverages] = useState([])
    const [listCoverages, setListCoverages] = useState([])
    const [descricao, setDescricao] = useState()
    const [valorBase, setValorBase] = useState()
    const [valorPorKm, setValorPorKm] = useState()
    const [planPerson, setPlanPerson] = useState()
    // pegando coberturas disponiveis 
    // let config = {
    //     headers: {
    //         'Authorization': `Bearer ${token}`,
    //         "Accept": "*/*",
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "PATCH"
    //     }
    //   };
    const namePLanSet = (e) =>{
        setDescricao(e.target.value)
    }

    const setValueBase = (e) =>{
        setValorBase(e.target.value)
    }

    const setValuePerKM = (e) =>{
        setValorPorKm(e.target.value)
    }
    const setPlanPersonalizado = (e) =>{
        setPlanPerson(e)
    }

    async function salvarEdicoes (){
        
        var aux = []
        listCoverages.map(i =>{
            aux.push(i.id)
        })

        const save = {
            description:descricao,
            coverages: aux,
            baseValue: parseFloat(valorBase),
            custom:planPerson,
        }
        const config = configCookies()

        await axios 
            .post(`${UrlDomain}/plans`, save, config)
            .then((response) => { 
                setShow(false);
                props.attPage()
            })
            .catch(r =>{ console.log('erro na api....', r)}) // window.location.reload();
        
    }

    // useEffect( () =>{
    //     axios 
    //         .get(`${UrlDomain}/coverages`, config)
    //         .then((response) => { 
    //             setCoverages(response.data)
    //         })
    //         .catch(r =>{ console.log('erro na api....', setCoverages('error, atualize a página...'))}) // window.location.reload();
    // }, [])

    const openModal =  () => {
        const handleShow =  setShow(true);
        const config = configCookies()

        axios 
            .get(`${UrlDomain}/coverages`, config)
            .then((response) => { 
                setCoverages(response.data)
            })
            .catch(r =>{ console.log('erro na api....', setCoverages('error, atualize a página...'))}) // window.location.reload();
    }

    function onSelect(selectedList, selectedItem) {
        setListCoverages(selectedList)
    }
    
    function onRemove(selectedList, removedItem) {
        var arrayAux = []

        listCoverages.map(i =>{
            if(i.id != removedItem.id){
                arrayAux.push(i)
            }
        })
        
        setListCoverages(arrayAux)
    }

    return (
        <>
            <CButton className='btn-newPlan' color='dark'   size='sm' onClick={openModal} > Novo </CButton>

            <Modal 
                show={show} 
                onHide={handleClose}
                size="xl"
            >
                    
                <Modal.Header  closeButton>
                    <Modal.Title> Novo Plano </Modal.Title>
                </Modal.Header>
                <Modal.Body className='container-body'>
                    <CRow className="align-items-start">
                        <CCol>
                            <div className='Container-ColLeft-newPlan'>
                                <CFormLabel >Nome do Plano</CFormLabel>
                                <CFormInput type="text" onChange={namePLanSet}  placeholder="Plano Gold"/>
                                <br />
                                <CFormLabel >Plano pode ser personalizado ? </CFormLabel>
                                <CFormCheck type="radio" name="person1" onChange={() => setPlanPersonalizado(true)}  id="PersonYes" label="Sim" />
                                <CFormCheck type="radio" name="person1" onChange={() => setPlanPersonalizado(false)} color="dark" defaultChecked id="PersonNo" label="Não" />


                                {/* Verificar */}
                                
                            </div>
                        </CCol>
                        <CCol>
                            <div className='Container-ColRight-newPlan'>
                                <CFormLabel> Valor Base</CFormLabel>
                                <CFormInput type="text" id="valuePlan" onChange={setValueBase} placeholder="R$32,00"/>
                                <br />
                                {planPerson === true ? 
                                    (   
                                        <> 
                                            <CFormLabel >Serviços </CFormLabel>
                                            <Multiselect
                                                options={coverages} // Options to display in the dropdown
                                                placeholder='Selecione'
                                                label='Selecione'
                                                onSelect={onSelect} // Function will trigger on select event
                                                onRemove={onRemove} // Function will trigger on remove event
                                                displayValue="description" // Property name to display in the dropdown options
                                            />
                                        </>
                                        
                                    )
                                    : null
                                
                                }
                                
                            </div>
                        </CCol>
                    </CRow>
                </Modal.Body>

                    
                
                <Modal.Footer>  
                    <Button variant="secondary" onClick={handleClose}>
                        Sair
                    </Button>
                    <Button  onClick={salvarEdicoes} variant="primary" >
                        Salvar Alterações
                    </Button>
                </Modal.Footer>
                    
            </Modal>
        </>
    )
}

export default  NewPlan