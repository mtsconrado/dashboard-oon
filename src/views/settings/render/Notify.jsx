import React,{useState} from 'react'

import {
    CForm, 
    CCol,
    CButton ,
    CFormLabel,
    CRow,
    CFormSelect,
    CFormCheck,
    CAvatar,
  } from '@coreui/react'


const Notify = () =>{

    return (
        <> 

            <CForm className="row g-3 container-notify">
                <CCol md={11}>
                    <h4>Notificação</h4>
                    <br />
                    <h6>Por e-mail</h6>
                    <p>Controle quais tipos de notificações de e-mail você recebe (exceto privacidade e e-mails da conta)</p>
                    <CFormCheck type="radio" name="1" id="email" label="Resumo das atividades"/>
                    <CFormCheck type="radio" name="1" id="email" label="Relatório resumido"/>
                </CCol>
                <CCol md={1}>
                        
                </CCol>  
                
                <CCol md={11}>
                    <h6>Por notificação push</h6>
                    <CFormCheck type="radio" name="2" id="push" label="Resumo das atividades"/>
                    <CFormCheck type="radio" name="2" id="push" label="Relatório resumido"/>
                </CCol>
                <CCol md={1}>
                
                </CCol>  

                <CCol md={9}>
                
                </CCol>
                <CCol md={3}>
                    <CButton color="dark"  className='btn-salvar-setting'> Redefinir</CButton>
                    <CButton color="dark"  className='btn-salvar-setting'> Salvar</CButton>
                </CCol> 
            </CForm>
            
        </>
    )
}

export default  Notify