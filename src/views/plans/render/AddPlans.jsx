import React from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';

import ImputSearch from './imput/ImputSearch';
import ActiveAndInactivePlan from './components/ActiveAndInactivePlan';

function AddPlans() {
    return (
        <CCard className='card'>
            <CCardBody>
                <CRow>
                    <CCol>
                        <label className="plan-title">Planos</label >
                    </CCol>
                    <CCol className=''>
                        <ImputSearch />
                    </CCol>
                </CRow>
                <br />
                <CRow>
                    <CCol>
                        <ActiveAndInactivePlan />
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    )
}

export default  AddPlans