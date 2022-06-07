import React from 'react'
import { CCard, CCardBody } from '@coreui/react'

import HeaderOccurrence from '../headers/HeaderOccurrence'
import HeaderContract from '../headers/HeaderContract'
import OccurrenceInfos from './render/OccurrenceInfos'
import AnalistyData from './render/AnalistyData'

const Insured = (props) => {
    return (
        <CCard className="card-radius">
            <CCardBody>
                <HeaderOccurrence protocolo={props.protocolo} />
                <HeaderContract protocolo={props.protocolo} />
                <OccurrenceInfos protocolo={props.protocolo} />
                <br />
                <AnalistyData protocolo={props.protocolo} />
                {/* <div className='container-occurrence-data'>
                        <div className='container-conteudo' >
                            <CButton className='titulo-container-card2' variant='ghost' color='dark' >  Avarias </CButton> */}
                {/* <label className='titulo-container-card2'> Dados do veículo</label> */}
                {/* </div>
                    </div> */}
            </CCardBody>
        </CCard>
    )
}

export default  Insured;
