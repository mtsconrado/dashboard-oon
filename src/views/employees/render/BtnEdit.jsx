import React, {useState} from 'react'
import { Button, Modal,  Form  }  from 'react-bootstrap';
import axios from 'axios'
import {
    CButton,
    CFormSelect,
    CRow,
    CCol,
  } from '@coreui/react'
import Cookies from 'js-cookie'

import {  BsFillPencilFill } from 'react-icons/bs';

import UrlDomain from './../../../config'

import EditPermission from './../permissons/EditPermission'

const Editar = (props) => {
    const [show, setShow] = useState(false);
    const verifica = ()=>setShow(true)

    // variaveis
   // Variaveis de nome 
   const [firstName, setFirstName] = useState(props.editar.firstName)
   const firstNameUser = (e) =>{setFirstName(e.target.value)} 

   const [fullName, setFullName] = useState(props.editar.fullName)
   const fullNameUser = (e) =>{setFullName(e.target.value)} 

   const [phone, setPhone] = useState(`(0${props.editar.phone.slice(0, 2)}) ${props.editar.phone.slice(2, 7)}-${props.editar.phone.slice(7)}`)
   const phoneUser = (e) =>{setPhone(e.target.value)}

   const [email, setEmail] = useState(props.editar.email)
   const emailUser = (e) =>{setEmail(e.target.value)}

   const [password, setPassword] = useState()
   const passwordUser = (e) =>{setPassword(e.target.value)}

   const [passwordConfirm, setPasswordConfirm] = useState()
   const PasswordConfirmUser = (e) =>{setPasswordConfirm(e.target.value)}

   const [depart, setDepart] = useState(props.editar.department)
   const departUser = (e) =>{setDepart(e.target.value)}

   const [typeUser, setTypeUser] = useState(props.editar.employeeRole)
   const typeUsers = (e) => {setTypeUser(e.target.value)}

   const [flagSenha, setFlagSenha] = useState()
   const [flagEmail, setFlagEmail] = useState()

   const [disableEmployeer, setDisableEmployeer] = useState(false)

   const statusUser = (e) => {
        setDisableEmployeer(e)
   }
   
    // Configuracoes para envio de mensagem 
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


    function disableEmp(){
        var body = {}
        console.log(props.editar.id);
         axios 
            .patch(`${UrlDomain}/employees/${props.editar.id}/disable`, body, config )
            .then((response) => {
                setShow(false);
                props.callBack()
            })
            .catch(r =>{ 
                console.log('error', r), alert('Login expirado'),window.location.reload()
            }) // window.location.reload();
   }
   
    function salvarInfos(){

        let updateUser =  { firstName:firstName, fullName:fullName ,phone:phone, email:email, department:depart, employeeRole: typeUser}
        axios 
            .patch(`${UrlDomain}/employees/${props.editar.id}`,  updateUser, config )
            .then((response) => {
                setShow(false);
                props.callBack()
            })
            .catch(r =>{ 
                console.log('error', r), alert('Login expirado'),window.location.reload()
            }) // window.location.reload();

    }

    // o Cara q entrar nessa tela, já vai ser o responsavel por editar essas informacoes 

        return (
            <> 
                <CRow>
                    <CCol> 
                        {/* <label className='newUserTil'>Editar empregado</label>
                        <br />  <br /> */}
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control onChange={firstNameUser} value = {firstName} type="text" placeholder= {props.editar.firstName} />
                                <br />
                                {/* <Form.Label> Alterar sobrenome  </Form.Label>
                                <Form.Control onChange={fullNameUser} value = {fullName} type="text" placeholder= {props.editar.firstName} />
                                <br /> */}
                                <Form.Label>Contato</Form.Label>
                                <Form.Control onChange={phoneUser} value = {phone} type="text" placeholder= {props.editar.phone} />
                                <br />
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={emailUser} value = {email} type="email" placeholder= {props.editar.email} />
                                <br />  
                                {/* <Form.Label> Alterar Senha - ñ aplicar agora</Form.Label>
                                <Form.Control  onChange={userPassword} value = {password} type="text" placeholder= {"1234"} />
                                <br /> */}
                                {/* <Form.Label> O usuário {props.editar.name} é {props.editar.type.toLowerCase()} </Form.Label> */}
                                <Form.Label>Funcionário</Form.Label>
                                <CFormSelect defaultValue={props.editar.employeeRole} className="mb-3"  onChange={typeUsers}  aria-label="Large select example">
                                    <option value="SUPPORT">Suporte</option>
                                    <option value="MANAGER">Manager</option>
                                    <option value="ADMIN">Admin</option>
                                </CFormSelect>
                                <Form.Label>Departamento</Form.Label>
                                <CFormSelect defaultValue={props.editar.department} className="mb-3" onChange={departUser} aria-label="Large select example">
                                    <option value="COMERCIAL">Comercial</option>
                                    <option value="OPERATIONAL">Operacional</option>
                                    <option value="FINANCIAL">Financeiro</option>
                                    <option value="HUMAN_RESOURCES">Recursos Humanos</option>
                                    <option value="ADMINISTRATION">Administração</option>
                                </CFormSelect>
                                
                                {
                                    props.editar.disabled === true ?
                                    (   
                                            <>
                                                <Form.Label> Ativar Funcionário ? </Form.Label>
                                                <br />
                                                <CButton color="danger" onClick={disableEmp}>
                                                    Ativar
                                                </CButton>  
                                            </>
                                            
                                            )
                                            :
                                            (   
                                                <>
                                                <Form.Label> Desativar Funcionário ? </Form.Label>
                                                <br />
                                                <CButton color="danger" onClick={disableEmp}> 
                                                    Desligar
                                                </CButton>
                                            </>
                                            
                                            )   
                                        }
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <CButton  onClick={props.handleClose}>
                                                Sair
                                            </CButton>
                                            <CButton onClick = {salvarInfos}  >
                                                Salvar Alterações
                                            </CButton>
                                        </div>
                            </Form.Group>
                        </Form>  
                    </CCol>

                    {/* <CCol xs={9}> 
                        <EditPermission />
                    </CCol> */}
                </CRow>
            </>
        )
   
    
}

export default  Editar 