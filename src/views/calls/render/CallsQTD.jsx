import React from 'react';
import { CCol, CCard, CCallout, CRow } from '@coreui/react';

import ButtonRelatory from '../btns/ButtonCall';

const CallsQTD = () => {
    return (
        <>
            <CCard className='card-atend'>
                <CCallout className="callout" color="primary">
                    <CRow>
                        <div className="btn-filter">
                            <ButtonRelatory />
                        </div>
                        <CCol className='text-center'>
                            <h2>55</h2>
                            <label className="call-subTitle">Atendimentos em Aberto</label>
                        </CCol>
                    </CRow>
                </CCallout>
            </CCard>
            <br />
            <CCard className='text-center card-atend'>
                <CCallout className="callout" color="info">
                    <CRow>
                        <div className="btn-filter">
                            <ButtonRelatory />
                        </div>
                        <CCol className='text-center'>
                            <h2>25</h2>
                            <label className="call-subTitle">Atendimentos encerrados na última hora</label>
                        </CCol>
                    </CRow>
                </CCallout>
            </CCard>
        </>
    )
}

export default  CallsQTD;
