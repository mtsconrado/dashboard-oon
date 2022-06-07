import React from 'react';
import { CCol, CRow } from '@coreui/react';

import GraphicPlan from './render/GraphicPlan';
import Scratchs from './render/Scratchs';
import AddPlans from './render/AddPlans';

const Plans = () => {
    return (
        <>
            <CRow>
                <CCol xs={4}>
                    <GraphicPlan />
                </CCol>
                <CCol xs={8}>
                    <Scratchs />
                </CCol>
            </CRow>
            <br />
            <CRow>
                <CCol>
                    <AddPlans />
                </CCol>
            </CRow>
        </>
    )
}

export default  Plans;
