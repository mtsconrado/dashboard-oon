import React, { useEffect } from 'react';
import { CCard, CCardBody, CRow, CCol } from '@coreui/react';



// status
import Opening from './status/Opening'
import Survey from './status/Survey'
import Analysis from './status/Analysis'
import Concluded from './status/Concluded'
import HeaderOccurrence from '../headers/HeaderOccurrence'

import './css/follow.css';

const Follow = (props) => {
    // ver como vai ser feita a requisicao da api, os dados podem vir da home via props OU sera pego o numero do protocolo
    // e aqui fazer uma requisicao para pegar os dados do devido protocolo
    useEffect(() => {
        console.log('N protocolo: ', props.protocolo)
    }, [])

    const msgs = [
        'Sinistro está vendo tratado com o analista responsável',
        'O carro foi vistoriado na quinta-feira, dia 23 de dezembro às 18h23',
        'Abertura de aviso: quinta-feira, dia 23 de dezembro às 17h23',
    ]
    return (
        <CCard className="car-follow">
            <CCardBody>
                <HeaderOccurrence protocolo={props.protocolo} status={props.status} />
                <CRow>
                    <CCol>
                        <Opening status={props.status} />
                    </CCol>
                    <CCol>
                        <Survey status={props.status} />
                    </CCol>
                    <CCol>
                        <Analysis status={props.status} />
                    </CCol>
                    <CCol>
                        <Concluded status={props.status} />
                    </CCol>
                </CRow>
                <div className='container-logs'>
                    {msgs.map((msg, index) => {

                        if (index == 0) {
                            return (
                                <div key={index.toString()} className='container-msg-atual'>
                                    <label> {msg} </label>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index.toString()} className='container-msg'>
                                    <label> {msg} </label>
                                </div>
                            )
                        }
                    })}
                </div>
            </CCardBody>
        </CCard>
    )
}

export default  Follow