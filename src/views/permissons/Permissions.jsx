import React, {useState, useEffect} from 'react'

import { Button, Modal,  Form   }  from 'react-bootstrap';
import { CRow, CCol, CFormSelect } from '@coreui/react'
import { Spinner }  from 'react-bootstrap';
import axios from 'axios'
import Cookies from 'js-cookie'

import UrlDomain from './../../config'

import Support from './Render/Support'

const Permission = (props) =>{
    const handleClose = () => setShow(false);
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const verifica = ()=>setShow(true)
    // const salvarInfos = () => {setShow(false);}

    const options = [
        { label: 'Administrador ', value: 'ADMIN' },
        { label: 'Gerente ', value: 'MANAGER' },
        { label: 'Suporte', value: 'SUPPORT' }
    ]

    // opcao de usuario 
    const [tipo, setTipo] = useState()
    const tipoUser = (e) =>{setTipo(e.target.value), console.log('kkk', tipo )}

    useEffect(()=>{

        // verifica tipo do usuário 
        if(props.user.role === 'ADMIN'){
            setTipo(1)
        }else if(props.user.role === 'MANAGER'){
            setTipo(2)
        }else{
            setTipo(3)
        }
        

    },[])
    const token = Cookies.get('TokenID')
    let config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PATCH"
        }
    };
    const [flag, setFlag] = useState(false)

    const [newRole, setNewRole] = useState(props.user.employeeRole)

    function changeRole(e){
         setNewRole(e.target.value)
    }

    function salvarInfos (e){
        setFlag(true)
        let updateUser = {firstName:props.user.firstName, fullName:props.user.fullName ,phone:props.user.phone, email:props.user.email, department:props.user.department, employeeRole:newRole}
        // Verificar se o update user for alterado 
        if(updateUser != null){
            axios 
                .patch(`${UrlDomain}/employees/${props.user.id}`,  updateUser, config )
                .then((response) => {
                    setShow(false)
                    props.attPage()
                })
                .catch(r =>{ 
                    console.log('error', r), alert('Login expirado'), window.location.reload()
                })
        }
        // Salvar a lista de permissoes, TALVEZ DE para salvar a lista de permissoes no end point acima

    }
    return(
        <> 
            <Button variant="dark" className='btn-permession' size='sm' onClick={() => verifica(props)}>
                Permissões
            </Button>
            <Modal show={show} onHide={handleClose} size="xl">
                {flag === false ? 
                    (
                        <>
                            <Modal.Header  closeButton>
                                <Modal.Title>Permissões do empregado</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='container-body'>
                    
                                <CRow>
                                    <CCol className='container-left-permission'>
                                        <br />
                                        <h5> Usuário(a) {props.user.firstName } é {props.user.employeeRole} </h5>
                                        <br />
                                    </CCol>
                                    <CCol className='container-right-permission'>
                                        <br />
                                        <CFormSelect 
                                            aria-label="Default select example"
                                            options={options}
                                            className='select-container'
                                            onChange={changeRole}
                                            value={newRole}
                                        />
                                        
                                    </CCol>
                                </CRow>

                                <Support save={salvarInfos} pessoa= {props.user} />

                            </Modal.Body>
    
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Sair
                                </Button>
                                
                            </Modal.Footer>

                        </>
                    )
                    :
                    (
                        <>
                            <br />
                             <h4 className='spin-permission'>
                                <Spinner animation="grow" variant="info" />  
                            </h4> 
                            <br />
                        </>
                    )
                
                }
                
                
            </Modal>
        </>
    )
}

export default  Permission   