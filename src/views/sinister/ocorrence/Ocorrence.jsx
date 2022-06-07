import React from 'react'
import { CCard, CCardBody, CButton } from '@coreui/react'
import { FiExternalLink } from 'react-icons/fi';

import HeaderOccurrence from '../headers/HeaderOccurrence'
import HeaderContract from '../headers/HeaderContract'
import OcorrenciaInfos from './render/OcorrenciaInfos'
import VehicleData from './render/VehicleData'

const Ocorrence = (props) => {
    return (
        <CCard className="card-radius">
            <CCardBody>
                <HeaderOccurrence protocolo={props.protocolo} />
                <HeaderContract protocolo={props.protocolo} />
                <OcorrenciaInfos protocolo={props.protocolo} />
                <br />
                <VehicleData protocolo={props.protocolo} />
                <br />
                {/*  Ver oq vai ser aqui dps */}
                {/* <div className='container-occurrence-data'> */}
                {/* <div className='container-conteudo' > */}
                <div className='title-container-card'>
                    <div style={{width: '12%'}}>
                        <CButton
                            style={{ color: '#14142B' }}
                            className='text-start p-0 title-container-card'
                            color='link'
                        >
                            Avarias
                            <FiExternalLink className='mx-2' />
                        </CButton>
                    </div>
                </div>
                {/* <label className='title-container-card2'> Dados do veículo</label> */}
                {/* </div> */}
                {/* </div> */}
            </CCardBody>
        </CCard>
    )
}

export default  Ocorrence;
