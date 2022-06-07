import React from 'react'
import {
    CForm,
    CCol,
    CButton,
    CFormLabel,
    CRow,
    CFormSelect,
    CFormCheck,
    CAvatar,
} from '@coreui/react'

import Cookies from 'js-cookie'

const privacy = () => {


    // const userType = 'SUPPORT'
    const userType = Cookies.get('userType')

    return (
        <>
            <h4 className='container-profile-title'>Política de Privacidade</h4>
            <br />
            <CForm className="row g-3 container-notify">
                <CCol className='privacy-esq' md={10}>
                    <h6 className='container-profile-sub-title'>Termo de Serviço</h6>
                    <p className='container-profile-text'>Estes Termos de Serviço regem o acesso e uso do site, aplicativos, APIs e widgets da OON Seguros.</p>
                </CCol>
                <CCol className='privacy-dir' md={2}>
                    {userType == 'ADMIN' ?
                        (<> <CButton color="primary" className='btn-salvar-setting'> Editar</CButton>  </>)
                        :
                        (<> <CButton color="primary" className='btn-salvar-setting'> Visualizar </CButton> </>)
                    }

                </CCol>
            </CForm>
            <br />
            <CForm className="row g-3 container-notify">
                <CCol md={10}>
                    <h6 className='container-profile-sub-title'>Política de Privacidade</h6>
                    <p className='container-profile-text'>Detalhes sobre os dados que são coletados e como são usados.</p>
                </CCol>
                <CCol className='privacy-dir' md={2}>
                    {userType == 'ADMIN' ?
                        (<> <CButton color="primary" className='btn-salvar-setting'> Editar</CButton>  </>)
                        :
                        (<> <CButton color="primary" className='btn-salvar-setting'> Visualizar </CButton> </>)
                    }
                </CCol>
            </CForm>

            <br />
            <CForm className="row g-3 container-notify">
                <CCol md={10}>
                    <h6 className='container-profile-sub-title'>Política de Segurança da Informação</h6>
                    <p className='container-profile-text'>Proteger as informações e ativos de tecnologia da informação contra acesso, modificação, destruição ou divulgação não autorizados</p>
                </CCol>
                <CCol className='privacy-dir' md={2}>
                    {userType == 'ADMIN' ?
                        (<> <CButton color="primary" className='btn-salvar-setting'> Editar</CButton>  </>)
                        :
                        (<> <CButton color="primary" className='btn-salvar-setting'> Visualizar </CButton> </>)
                    }
                </CCol>
            </CForm>

            <br />
            <CForm className="row g-3 container-notify">
                <CCol md={10}>
                    <h6 className='container-profile-sub-title'>Segurança</h6>
                    <p className='container-profile-text'>Em caso de fraudes e golpes, quem deve acionar. Política de segurança do aplicativo.</p>
                </CCol>
                <CCol className='privacy-dir' md={2}>
                    <br />
                    {userType == 'ADMIN' ?
                        (<> <CButton color="primary" className='btn-salvar-setting'> Editar</CButton>  </>)
                        :
                        (<> <CButton color="primary" className='btn-salvar-setting'> Visualizar </CButton> </>)
                    }
                </CCol>
            </CForm>

            <br />
            <CForm className="row g-3 container-notify">
                <CCol md={10}>
                    <h6 className='container-profile-sub-title'>Canal de Ética</h6>
                    <p className='container-profile-text'>Este é um canal exclusivo para comunicação segura e, se desejada, anônima, de condutas consideradas antiéticas ou que violem os princípios éticos e padrões de conduta e/ou a legislação vigente.</p>
                </CCol>
                <CCol className='privacy-dir' md={2}>
                    <br />
                    {userType == 'ADMIN' ?
                        (<> <CButton color="primary" className='btn-salvar-setting'> Editar</CButton>  </>)
                        :
                        (<> <CButton color="primary" className='btn-salvar-setting'> Visualizar </CButton> </>)
                    }
                </CCol>
            </CForm>
            <br />
        </>
    )
}


export default  privacy