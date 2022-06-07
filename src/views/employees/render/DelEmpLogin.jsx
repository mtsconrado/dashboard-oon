import React, {useState} from 'react'
import axios from 'axios'

import { Spinner }  from 'react-bootstrap';
import Cookies from 'js-cookie'
import {  BsFillPersonXFill , BsFillPatchExclamationFill} from 'react-icons/bs';
import { Button, Modal,  Form  }  from 'react-bootstrap';
import {
    CButton,
  } from '@coreui/react'
import UrlDomain from './../../../config'

import './associate/associate.css'

const DeletaLogin = (props) => {
    const [show, setShow] = useState(false);
    const openModal = ()=>setShow(true)

    const token = Cookies.get('TokenID')

    let config = {
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        }
    };

    const [flag, setFlag] = useState(0)
    function disableEmp(){
        setFlag(1)  // entrou na requisicao , colocar botao de carregar

        var email = {email:props.user.email}
        axios 
        .post(`${UrlDomain}/accounts/disable`, email, config)
        .then((response) => {
            setFlag(2) // deu certo
            setTimeout(() => {setShow(false)}, 3000);
        })
        .catch((r) =>{ 
            setFlag(3) // errado 
            console.log('error', r)
        })
    }
    

        return (                
            flag == 0 ? 
                (
                    <> 
                        <div>
                            <label className='font-header-delLogin'> Remover acesso do usuário</label>
                        </div>
                        <br />
                        <div className='container-body-delEmpLogin'>
                            <div>
                                <label className='font-delEmp-subTitulo' > Nome</label>
                                <br />
                                <label className='font-delEmp-text' > {props.user.firstName}</label>
                                <br /><br />
    
                                <label className='font-delEmp-subTitulo' > E-mail </label>
                                <br />
                                <label className='font-delEmp-text' > {props.user.email}</label>
                                <br/><br />
    
                                <label className='font-delEmp-subTitulo' > Departamento </label>
                                <br />
                                <label className='font-delEmp-text' > {props.user.department}</label>
                                <br/> <br />
                            </div>
                            
                        </div>
                        <br />
                        <div className='container-delEmpLogin-footer'>
                            <CButton color='danger' onClick={disableEmp} className='btn-delEmp-confirm'  > 
                                Desativar conta
                            </CButton>
                            <br />
                            <CButton size="lg" onClick={props.handleClose} color='light'> 
                                Sair
                            </CButton>
                        </div>
                            
                    </>
                )
                :null
            
            (  flag == 1 ? 
                (
                    <> <h2> <Spinner animation="grow" variant="info" />  </h2>  </>
                )
                :null
            )

            (flag == 2 ? 
                (
                    <> 
                        <h4>Disabilitado com sucesso.</h4> 
                        <br />
                        <CButton  onClick={props.handleClose} color='light'> 
                            Sair
                        </CButton>
                    </>
                )
                :null)
            
                (flag == 3 ? 
                (
                    <> 
                        <h4>Usuário já desabilitado ou não encontrado. <BsFillPatchExclamationFill/> </h4> 
                        <br />
                        <CButton  onClick={props.handleClose} color='light'> 
                            Sair
                        </CButton>
                    
                    </>

                )
                :null
            )

                        
                        
            //         </Modal.Body>
        
            //     </Modal>
            // </>
        )

    
}

export default  DeletaLogin