import React, { useState } from 'react'
import { CRow, CCol, CButton, } from '@coreui/react'

import Follow from './follow/Follow'
import Segurado from './insured/Insured'
import Ocorrence from './ocorrence/Ocorrence'
import RoofUser from './roof/Roof'
import Workshop from './workshop/Workshop'
import Home from './paginations/home/Home'

import './css/sinister.css'
import './css/sinisterCards.css'

const Sinister = () => {
    const [qtd_total_sinistro, setQtd_total_sinistro] = useState(34)

    const [escolha, setEscolha] = useState('home') // conta, notificacoes, privacidade, ajuda
    const [op1, setOp1] = useState(true)
    const [op2, setOp2] = useState(false)
    const [op3, setOp3] = useState(false)
    const [op4, setOp4] = useState(false)
    const [op5, setOp5] = useState(false)
    const [op6, setOp6] = useState(false)

    const [protocolo, setProtocolo] = useState() // protocolo que sera pesquisa

    const status = { abertura: 'concluido', vistoria: 'atual', emAndamento: 'fechado', concluido: 'falha' }

    let value
    const teste = [111, 222, 333, 444, 555, 666, 777] // protocolos que estão no sistema
    const [busca2, setBusca] = useState('')

    const pegando = (e) => {
        value = e.target.value
    }

    const escolhaProtocolo = () => {
        var i
        for (i = 0; i < teste.length; i++) {
            if (value == teste[i]) {
                setProtocolo(teste[i])
                setOp1(false)
                setOp2(true)
                setEscolha('acompanhamento')
                break
            } else {
                console.log('error protocol')
            }
        }
    }

    const escolhaMenu = (e) => {
        if (e == 'home') {
            setOp1(true)
            setOp2(false)
            setOp3(false)
            setOp4(false)
            setOp5(false)
            setOp6(false)
        } else if (e == 'acompanhamento') {
            setOp1(false)
            setOp2(true)
            setOp3(false)
            setOp4(false)
            setOp5(false)
            setOp6(false)

        } else if (e == 'segurado') {
            setOp1(false)
            setOp2(false)
            setOp3(true)
            setOp4(false)
            setOp5(false)
            setOp6(false)

        } else if (e == 'ocorrencia') {
            setOp1(false)
            setOp2(false)
            setOp3(false)
            setOp4(true)
            setOp5(false)
            setOp6(false)

        } else if (e == 'cobertura') {
            setOp1(false)
            setOp2(false)
            setOp3(false)
            setOp4(false)
            setOp5(true)
            setOp6(false)

        } else if (e == 'oficina') {
            setOp1(false)
            setOp2(false)
            setOp3(false)
            setOp4(false)
            setOp5(false)
            setOp6(true)
        }
        setEscolha(e)
        // falta fazer os if dos OPs
    }

    return (
        <CRow>
            <CCol xs={2}>
                {protocolo == null ? (
                    <div className='container-sider-bar-sinister'>
                        <CButton
                            color="dark"
                            className='btn-sidebar-sinistro'
                            active={op1}
                            variant='ghost'
                            onClick={() =>
                                escolhaMenu('home')}
                        >
                            Home
                        </CButton>
                        <hr />
                        <CButton
                            color="dark"
                            className='btn-sidebar-sinistro'
                            active={op2}
                            variant='ghost'
                            onClick={() => escolhaMenu('acompanhamento')}
                        >
                            Acompanhamento
                        </CButton>
                        <br />
                        <CButton
                            color="dark"
                            className='btn-sidebar-sinistro'
                            active={op3}
                            variant='ghost'
                            onClick={() => escolhaMenu('segurado')}
                        >
                            Comunicante, segurado e analista
                        </CButton>
                        <br />
                        <CButton
                            color="dark"
                            className='btn-sidebar-sinistro'
                            active={op4}
                            variant='ghost'
                            onClick={() => escolhaMenu('ocorrencia')}
                        >
                            Ocorrência e veículo
                        </CButton>
                        <br />
                        <CButton
                            color="dark"
                            className='btn-sidebar-sinistro'
                            active={op5}
                            variant='ghost'
                            onClick={() => escolhaMenu('cobertura')}
                        >
                            Coberturas e franquias
                        </CButton>
                        <br />
                        <CButton
                            color="dark"
                            className='btn-sidebar-sinistro'
                            active={op6}
                            variant='ghost'
                            onClick={() => escolhaMenu('oficina')}
                        >
                            Oficina
                        </CButton>
                    </div>
                ) : (
                    <div className='container-sider-bar-sinister'>
                        <CButton
                            color="dark"
                            className='btn-sidebar-sinistro'
                            active={op1}
                            variant='ghost'
                            onClick={() => escolhaMenu('home')}
                        >
                            Home
                        </CButton>
                        <hr />
                        <CButton
                            color="dark"
                            className='btn-sidebar-sinistro'
                            active={op2}
                            variant='ghost'
                            onClick={() => escolhaMenu('acompanhamento')}
                        >
                            Acompanhamento
                        </CButton>
                        <br />
                        <CButton
                            color="dark"
                            className='btn-sidebar-sinistro'
                            active={op3}
                            variant='ghost'
                            onClick={() => escolhaMenu('segurado')}
                        >
                            Comunicante, segurado e analista
                        </CButton>
                        <br />
                        <CButton
                            color="dark"
                            className='btn-sidebar-sinistro'
                            active={op4}
                            variant='ghost'
                            onClick={() => escolhaMenu('ocorrencia')}
                        >
                            Ocorrência
                            e veículo
                        </CButton>
                        <br />
                        <CButton
                            color="dark"
                            className='btn-sidebar-sinistro'
                            active={op5}
                            variant='ghost'
                            onClick={() => escolhaMenu('cobertura')}
                        >
                            Cobertura
                            e franquias
                        </CButton>
                        <br />
                        <CButton
                            color="dark"
                            className='btn-sidebar-sinistro'
                            active={op6}
                            variant='ghost'
                            onClick={() => escolhaMenu('oficina')}
                        >
                            Oficina
                        </CButton>
                    </div>
                )
                }
            </CCol>
            <CCol>
                {escolha == 'home' ? (
                    <Home status={status}/>
                ) : null
                }
                {escolha == 'acompanhamento' ? (
                    <Follow status={status}/>
                ) : null
                }

                {escolha == 'segurado' ? (
                    <Segurado protocolo={protocolo} status={status}/>
                ) : null
                }

                {escolha == 'ocorrencia' ? (
                    <Ocorrence protocolo={protocolo} status={status} />
                ) : null
                }

                {escolha == 'cobertura' ? (
                    <RoofUser protocolo={protocolo} status={status} />
                ) : null
                }

                {escolha == 'oficina' ? (
                    <Workshop protocolo={protocolo} status={status} />
                ) : null
                }
            </CCol>
        </CRow>
    )
}

export default  Sinister;
