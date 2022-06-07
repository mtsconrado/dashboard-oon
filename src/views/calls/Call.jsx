import React from 'react'
import { CCol, CRow } from '@coreui/react';

import Calls from './render/Calls'
import CallsQTD from './render/CallsQTD'
import CallsBranch from './render/CallsBranch'
import Channel from './render/Channel'
import CallsPerformance from './render/CallsPerformance'
import CalendarAtts from './render/CalendarAtts'

import './css/call.css'

const Call = () => {
    return (
        <div className='mx-2'>
            <CRow>
                <CCol xs={8}>
                    <Calls />
                </CCol>
                <CCol xs={4}>
                    <CallsQTD />
                </CCol>
            </CRow>
            <br />
            <CRow>
                <CCol xs={8}>
                    <CallsBranch />
                </CCol>
                <CCol xs={4}>
                    <Channel />
                </CCol>
            </CRow>
            <br />
            <CRow>
                <CCol xs={8}>
                    <CallsPerformance />
                </CCol>
                <CCol xs={4}>
                    <CalendarAtts />
                </CCol>
            </CRow>
        </div>
    )
}

export default  Call;
