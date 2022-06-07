import React, { useState } from 'react'
import { CCard, CCardBody, CButton, CRow, CCol } from '@coreui/react'

import ContSetting from './render/CountSetting'
import Profile from './render/Profile'
import Notificacao from './render/Notify'
import Privacidade from './render/Privacy'
import Help from './render/Help'

import './css/setting.css'

const Setting = () => {
    const [escolha, setEscolha] = useState('perfil') // perfil, notificacoes, privacidade, ajuda
    const [op1, setOp1] = useState(true)
    const [op2, setOp2] = useState(false)
    const [op3, setOp3] = useState(false)
    const [op4, setOp4] = useState(false)



    const escolhaMenu = (e) => {

        setEscolha(e)// pega escolha pro menu

        if (e == 'perfil') {
            setOp1(true)
            setOp2(false)
            setOp3(false)
            setOp4(false)
        } else if (e == 'notificacoes') {
            setOp1(false)
            setOp2(true)
            setOp3(false)
            setOp4(false)

        } else if (e == 'privacidade') {
            setOp1(false)
            setOp2(false)
            setOp3(true)
            setOp4(false)
        } else {
            setOp1(false)
            setOp2(false)
            setOp3(false)
            setOp4(true)
        }
    }

    return (
        <CRow className='w-100 h-100 mx-1'>
            <CCol xs={2} className='menu-bar'>
                <CButton
                    color="link"
                    style={op1 ? {
                        borderColor: '#216CFF',
                        borderWidth: '2px',
                        borderStyle: 'none none none solid',
                        backgroundColor: 'rgba(231, 231, 231, 0.35)',
                        borderRadius: 0,
                        color: '#216CFF'
                    } : {
                        borderStyle: 'none',
                        color: '#6D6D6D'
                    }}
                    className='btn-help-side-bar'
                    active={op1}
                    size='sm'
                    variant='ghost'
                    onClick={() => escolhaMenu('perfil')}
                >
                    <label className='font-btn-setting'> Perfil </label>
                </CButton>
                <br />
                <CButton
                    color="link"
                    style={op3 ? {
                        borderColor: '#216CFF',
                        borderWidth: '2px',
                        borderStyle: 'none none none solid',
                        backgroundColor: 'rgba(231, 231, 231, 0.35)',
                        borderRadius: 0,
                        color: '#216CFF'
                    } : {
                        borderStyle: 'none',
                        color: '#6D6D6D'
                    }}
                    className='btn-help-side-bar'
                    active={op3}
                    size='sm'
                    variant="ghost"
                    onClick={() => escolhaMenu('privacidade')}
                >
                    <label className='font-btn-setting'>  Privacidade  </label>
                </CButton>
                <br />
                <CButton
                    color="link"
                    style={op4 ? {
                        borderColor: '#216CFF',
                        borderWidth: '2px',
                        borderStyle: 'none none none solid',
                        backgroundColor: 'rgba(231, 231, 231, 0.35)',
                        borderRadius: 0,
                        color: '#216CFF'
                    } : {
                        borderStyle: 'none',
                        color: '#6D6D6D'
                    }}
                    className='btn-help-side-bar'
                    active={op4}
                    size='sm'
                    variant='ghost'
                    onClick={() => escolhaMenu('ajuda')}
                >
                    <label className='font-btn-setting'>  Ajuda  </label>
                </CButton>
            </CCol>
            <CCol className='cardDir' >
                <CCard className="card-setting p-5">
                    <CCardBody>

                        {escolha == 'perfil' ? (
                            <>
                                <Profile />
                            </>
                        )
                            : null
                        }

                        {escolha == 'notificacoes' ? (
                            <>
                                <Notificacao />
                            </>
                        )
                            : null
                        }

                        {escolha == 'privacidade' ? (
                            <>
                                <Privacidade />
                            </>
                        )
                            : null
                        }

                        {escolha == 'ajuda' ? (
                            <>
                                <Help />
                            </>
                        )
                            : null
                        }
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}


export default  Setting;
