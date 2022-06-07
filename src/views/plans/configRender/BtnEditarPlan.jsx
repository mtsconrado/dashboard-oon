import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Cookies  from 'js-cookie'

import UrlDomain, { configCookies } from './../../../config'

import {
    CButton, CCol, CFormCheck, CFormInput,
    CFormLabel, CRow
} from '@coreui/react';
import axios from "axios";
import Multiselect from 'multiselect-react-dropdown';

const BtnEditPlan = (props) =>{
    

    // Funcoes e variaveis do modal 
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    function openModal(){
        const handleShow =  setShow(true);
    }

    // variaveis 
    const [valorBase, setValorBase] = useState(props.data.dataPlan.dados.baseValue)
    const [description, setDescription] = useState(props.data.dataPlan.dados.description)
    const [personalizavel, setPersonalizavel] = useState(props.data.dataPlan.dados.custom)
    const token = Cookies.get('TokenID')
    const userType = Cookies.get('userType')
    let config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PATCH"
        }
      };

    function descriptionName(e){
        setDescription(e.target.value)
    }

    const setValueBase = (e) =>{
        setValorBase(e.target.value)
    }

    const PersonalizavelSet = (e) =>{
        setPersonalizavel(e)
    }

     function salvarEdicoes (){
        
        var aux = []
        if(listCoverage != null ){
            listCoverage.map(i =>{
                aux.push(i.id)
            })
        }

        let save = {
            id:props.data.dataPlan.dados.id,
            description:description,
            coverages: aux,
            baseValue: parseFloat(valorBase),
            //valuePerKm: valorPorKm,
            custom:personalizavel,
        }
        const config = configCookies()
        axios 
            .patch(`${UrlDomain}/plans`, save, config)
            .then((response) => { 
                setShow(false);
                props.att()
            })
            .catch(r =>{ console.log('erro na api....', r)}) // window.location.reload();
        
    }

    useEffect( async () =>{
        const config = configCookies()

        await axios 
            .get(`${UrlDomain}/coverages`, config)
            .then((response) => { 
                if(response.data != null){
                    setOptions(response.data)
                    ops = response.data
                }
            })
            .catch(r =>{ console.log('erro na api....', r)}) // window.location.reload();
    }, [])

    const [options, setOptions] = useState([])
    const [valuesSelected, setValuesSelected ] = useState([])
    let ops 

    const [listCoverage, setListCoverage] = useState(props.data.dataPlan.dados.coverages )
    let coberturaSelecionados = props.data.dataPlan.dados.coverages 

  

    function onSelect(selectedList, selectedItem) {
        setListCoverage(selectedList)
    }
    
    function onRemove(selectedList, removedItem) {
        var arrayAux = []

        listCoverage.map(i =>{
            if(i.id != removedItem.id){
                arrayAux.push(i)
            }
        })
        setListCoverage(arrayAux)
    }

    return (
        <>
            <CButton color="secondary"  onClick={openModal} size="sm" variant="ghost">Editar Plano</CButton>

            <Modal 
                show={show} 
                onHide={handleClose}
                size="xl"
            >
                    
                <Modal.Header  closeButton>
                    <Modal.Title>Adicionar </Modal.Title>
                </Modal.Header>
                <Modal.Body className='container-body'>
                    <CRow>
                        <CCol>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <CFormLabel >Nome do Plano</CFormLabel>
                                    <CFormInput type="text" id="namePlan" onChange={descriptionName} value={description} placeholder={props.data.dataPlan.dados.description}/>
                                    <br />
                                    {personalizavel == false ?
                                        (   
                                            <>
                                                <CFormLabel >Serviços  </CFormLabel> 
                                                <Multiselect
                                                    options={options} // Options to display in the dropdown
                                                    placeholder='Selecione'
                                                    selectedValues={coberturaSelecionados }
                                                    label='Selecione'
                                                    onSelect={onSelect} // Function will trigger on select event
                                                    onRemove={onRemove} // Function will trigger on remove event
                                                    displayValue="description" // Property name to display in the dropdown options
                                                />
                                            </>
                                        )
                                        :null
                                    }
                                    

                                </Form.Group>
                            </Form>
                        </CCol>
                        <CCol >
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <CFormLabel >Valor Base</CFormLabel>
                                    <CFormInput type="text" id="valuePlan" onChange={setValueBase} value={valorBase} placeholder={props.data.dataPlan.dados.baseValue}/>
                                    <br />
                                    <CFormLabel >Valor por quilômetro</CFormLabel>
                                    <CFormInput type="number" id="valueKmPlan" required  min="0.00"  step=".01" placeholder={props.data.dataPlan.dados.valuePerKm}/>
                                    <br />
                                   
                                    {personalizavel == false  ? 
                                        (
                                            <> 
                                                <CFormLabel >Plano pode ser personalizado ? </CFormLabel>
                                                <CFormCheck type="radio" name="person1"  onChange={ () => {PersonalizavelSet(true)}  } id="PersonYes" label="Sim" />
                                                <CFormCheck type="radio" name="person1"  onChange={ () => {PersonalizavelSet(false)}  } id="PersonNo" label="Não" defaultChecked />
                                            </>
                                            
                                        ) 
                                            : null
                                    }


                                    { personalizavel == true  ?
                                        (
                                            <>
                                                <CFormLabel >Plano pode ser personalizado ? </CFormLabel>
                                                <CFormCheck type="radio" name="person1"   onChange={ () => {PersonalizavelSet(true)}  } id="PersonYes" label="Sim"  defaultChecked />
                                                <CFormCheck type="radio" name="person1"   onChange={ () => {PersonalizavelSet(false)}  } id="PersonNo" label="Não"  />
                                            </>

                                        )
                                            :null
                                    }
                                    

                                </Form.Group>
                            </Form>
                        </CCol>
                    </CRow>
                </Modal.Body>
                
                <Modal.Footer>  
                    <Button variant="secondary" onClick={handleClose}>
                        Sair
                    </Button>
                    <Button onClick={salvarEdicoes} variant="primary" >
                        Salvar Alterações
                    </Button>
                </Modal.Footer>
                    
            </Modal>
        </>
    )
}

export default  BtnEditPlan