import React from "react";
import { CCol, CRow } from '@coreui/react';

import GraphPlans from './charts/ChartPlans';
import GraphUsers from './charts/ChartUsers';
import Calendar from './charts/Calendar';
import Users from './users/Users';
import ToppingsAndDevices from "./charts/ToppingsAndDevices";

import './css/finance.css';

const Finance = () => {
    return (
        <>
            <CRow>
                <CCol xs={4}>
                    <GraphUsers />
                </CCol>
                <CCol xs={4}>
                    <GraphPlans />
                </CCol>
                <CCol xs={4}>
                    <Calendar />
                </CCol>
            </CRow>
            <br />
            <CRow>
                <CCol xs={9}>
                    <Users />
                </CCol>
                <CCol xs={3}>
                    <ToppingsAndDevices />
                </CCol>
            </CRow>
        </>
    )
}

export default  Finance;
