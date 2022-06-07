import React, { useEffect, useState } from 'react';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';

function UsersFilter({ filter, setFilter, name, saveFilter }) {
    const [valueFilterCity, setValueFilterCity] = useState('');
    const [valueFilterType, setValueFilterType] = useState('');
    const [valueFilterStartDate, setValueFilterStartDate] = useState('');
    const [valueFilterFinalDate, setValueFilterFinalDate] = useState('');

    useEffect(() => {
        return () => {
            setValueFilterCity('')
            setValueFilterType('')
            setValueFilterStartDate('')
            setValueFilterFinalDate('')
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
                <CModalTitle>{`Filtrar - Gráfico ${name}`}</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CRow className="mb-4">
                    <div className="title-filter">
                        Escolha os filtros
                    </div>
                    <CCol xs={4}>
                        <h6>Cidade dos usuários</h6>
                        <CFormSelect
                            onChange={({ target }) => setValueFilterCity(target.value)}
                            options={[
                                'Cidade',
                                { label: 'Belo Horizonte', value: '1' },
                                { label: 'São Paulo', value: '2' },
                                { label: 'Rio de Janeior', value: '3' }
                            ]}
                        />
                    </CCol>
                    <CCol xs={4}>
                        <h6>Tipo de usuários</h6>
                        <CFormSelect
                            onChange={({ target }) => setValueFilterStartDate(target.value)}
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
                                onChange={({ target }) => setValueFilterStartDate(target.value)}
                                className="me-2"
                                type="date"
                            />
                        </div>
                    </CCol>
                    <CCol xs={3}>
                        <h6>Data de fim</h6>
                        <div className="d-flex">
                            <CFormInput
                                onChange={({ target }) => setValueFilterFinalDate(target.value)}
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
                    onClick={() => saveFilter(valueFilterCity, valueFilterType, valueFilterStartDate, valueFilterFinalDate)}
                    color="primary" >
                    Salvar
                </CButton>
            </CModalFooter>
        </CModal>
    )
}

export default  UsersFilter