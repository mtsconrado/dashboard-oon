import React, { useEffect, useState } from 'react';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';

function Reports({ report, setReport, name, saveFilter }) {
    const [valueReportCity, setValueReportCity] = useState('');
    const [valueReportType, setValueReportType] = useState('');
    const [valueReportStartDate, setValueReportStartDate] = useState('');
    const [valueReportFinalDate, setValueReportFinalDate] = useState('');

    useEffect(() => {
        return () => {
            setValueReportCity('')
            setValueReportType('')
            setValueReportStartDate('')
            setValueReportFinalDate('')
        }
    }, [])

    return (
        <CModal
            visible={report}
            onClose={() => setReport(false)}
            size="lg"
            alignment="center"
        >
            <CModalHeader>
                <CModalTitle>{`Relatório - Gráfico ${name}`}</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CRow className="mb-4">
                    <div className="title-filter">
                        Escolha os filtros
                    </div>
                    <CCol xs={4}>
                        <h6>Cidade dos usuários</h6>
                        <CFormSelect
                            onChange={({ target }) => setValueReportCity(target.value)}
                            options={[
                                'Cidade',
                                { label: 'Belo Horizonte', value: '1' },
                                { label: 'São Paulo', value: '2' },
                                { label: 'Rio de Janeior', value: '3' }
                            ]}
                        />
                    </CCol>
                    <CCol xs={4}>
                        <h6>Tipo dos usuários</h6>
                        <CFormSelect
                            onChange={({ target }) => setValueReportType(target.value)}
                            options={[
                                'Tipos',
                                { label: 'Todos usuários', value: '1' },
                                { label: 'Usuários novos', value: '2' },
                                { label: 'Usuários recorrentes', value: '3' }
                            ]}
                        />
                    </CCol>
                </CRow>
                <CRow>
                    <div className="title-filter">
                        Escolha o intervalo de tempo
                    </div>
                    <CCol xs={3}>
                        <h6>Data de início</h6>
                        <div className="d-flex">
                            <CFormInput
                                onChange={({ target }) => setValueReportStartDate(target.value)}
                                className="me-2"
                                type="date"
                            />
                        </div>
                    </CCol>
                    <CCol xs={3}>
                        <h6>Data de fim</h6>
                        <div className="d-flex">
                            <CFormInput
                                onChange={({ target }) => setValueReportFinalDate(target.value)}
                                className="me-2"
                                type="date"
                            />
                        </div>
                    </CCol>
                </CRow>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setReport(false)}>
                    Cancelar
                </CButton>
                <CButton
                    onClick={() => saveFilter(valueReportCity, valueReportType, valueReportStartDate, valueReportFinalDate)}
                    color="primary"
                >
                    Salvar
                </CButton>
            </CModalFooter>
        </CModal>
    )
}

export default  Reports