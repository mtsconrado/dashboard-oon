import React, { useEffect, useState } from 'react';
import { CButton, CCol, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';

import '../../css/modalFilter.css'

function ModalFilter({ filter, setFilter, saveFilter }) {
    const [valueFilterStartDate1, setValueFilterStartDate1] = useState('');
    const [valueFilterFinalDate1, setValueFilterFinalDate1] = useState('');
    const [valueFilterStartDate2, setValueFilterStartDate2] = useState('');
    const [valueFilterFinalDate2, setValueFilterFinalDate2] = useState('');

    useEffect(() => {
        return () => {
            setValueFilterStartDate1('')
            setValueFilterFinalDate1('')
            setValueFilterStartDate2('')
            setValueFilterFinalDate2('')
        }
    }, [])

    return (
        <CModal
            visible={filter}
            onClose={() => setFilter(false)}
            size="lg"
            alignment="center"
        >
            <CModalHeader>
                <CModalTitle>Filtrar</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CRow>
                    <div className="title-filter">
                        Escolha o intervalo de tempo - Linha 1
                    </div>
                    <CCol xs={3}>
                        <h6>Data de início</h6>
                        <div className="d-flex">
                            <CFormInput
                                onChange={({ target }) => setValueFilterStartDate1(target.value)}
                                className="me-2"
                                type="date"
                            />
                        </div>
                    </CCol>
                    <CCol xs={3}>
                        <h6>Data de fim</h6>
                        <div className="d-flex">
                            <CFormInput
                                onChange={({ target }) => setValueFilterFinalDate1(target.value)}
                                className="me-2"
                                type="date"
                            />
                        </div>
                    </CCol>
                </CRow>
                <CRow>
                    <div className="title-filter mt-4">
                        Escolha o intervalo de tempo - Linha 2
                    </div>
                    <CCol xs={3}>
                        <h6>Data de início</h6>
                        <div className="d-flex">
                            <CFormInput
                                onChange={({ target }) => setValueFilterStartDate2(target.value)}
                                className="me-2"
                                type="date"
                            />
                        </div>
                    </CCol>
                    <CCol xs={3}>
                        <h6>Data de fim</h6>
                        <div className="d-flex">
                            <CFormInput
                                onChange={({ target }) => setValueFilterFinalDate2(target.value)}
                                className="me-2"
                                type="date"
                            />
                        </div>
                    </CCol>
                </CRow>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setFilter(false)}>
                    Cancelar
                </CButton>
                <CButton
                    onClick={() => saveFilter(
                        valueFilterStartDate1,
                        valueFilterFinalDate1,
                        valueFilterStartDate2,
                        valueFilterFinalDate2,
                    )}
                    color="primary" >
                    Salvar
                </CButton>
            </CModalFooter>
        </CModal>
    )
}

export default  ModalFilter;
