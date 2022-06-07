import { CButton, CCol, CForm, CFormInput, CFormLabel } from '@coreui/react'
import React from 'react';

import BtnAddPlan from '../btn/BtnAddPlan'

function ImputSearch({ savePlan }) {
    return (
        <CForm className="row g-3 justify-content-end">
            <CCol xs="auto d-flex">
                <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
                    Pesquisar
                </CFormLabel>
                <CFormInput type="password" id="inputPassword2" placeholder="Pesquisar" />
                <CButton type="button" color="secondary" className="mx-2">
                    Buscar
                </CButton>
            </CCol>
            <CCol xs="auto">
                <BtnAddPlan />
            </CCol>
        </CForm>
    )
}

export default  ImputSearch