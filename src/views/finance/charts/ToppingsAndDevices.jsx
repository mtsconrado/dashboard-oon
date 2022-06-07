import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import { CChart } from '@coreui/react-chartjs';

import MonthAndYear from '../components/MonthAndYear';
import ButtonGraph from '../buttons/ButtonGraph';

function ToppingsAndDevices() {
    const saveFilterToppings = (usersCity, usersType, initialDate, finalDate) => {
        // endpoint para fazer o filtro
    }

    const saveFilterDevices = (usersCity, usersType, initialDate, finalDate) => {
        // endpoint para fazer o filtro
    }

    return (
        <>
            <CCard className="cards-toppings-and-devices mb-2">
                <CCardBody>
                    <CRow>
                        <CCol>
                            <label className="finc-title">Coberturas</label>
                            <br />
                            <label className=" finc-sub"> <MonthAndYear /></label>
                        </CCol>
                        <CCol className='btn-filter'>
                            <ButtonGraph name={'das coberturas'} saveFilter={saveFilterToppings} />
                        </CCol>
                    </CRow>
                    <CChart
                        type="doughnut"
                        options={{
                            plugins: {
                                legend: {
                                    position: 'bottom',
                                },
                            }
                        }}
                        data={{
                            labels: ['Proteção de danos materiais', 'Chaveiro', 'Colisão de Perda Total', 'Colisão de Danos Parciais', 'Cobertura de vidros'],
                            datasets: [
                                {
                                    backgroundColor: ['#216CFF', '#FF6711', '#00F781', '#FE3F61', '#14142B'],
                                    data: [40, 20, 80, 10, 30],
                                },
                            ],
                        }}
                    />
                </CCardBody>
            </CCard>
            <CCard className="cards-toppings-and-devices">
                <CCardBody>
                    <CRow>
                        <CCol>
                            <label className="finc-title">Dispositivos</label>
                            <br />
                            <label className=" finc-sub"> <MonthAndYear /></label>
                        </CCol>
                        <CCol className='btn-filter'>
                            <ButtonGraph name={'dos dispositivos'} saveFilter={saveFilterDevices} />
                        </CCol>
                    </CRow>
                    <CChart
                        className="devices-width"
                        type="doughnut"
                        options={{
                            layout: {
                                padding: 40
                            },
                            plugins: {
                                legend: {
                                    position: 'bottom',
                                },
                            },
                        }}
                        data={{
                            labels: ['Sincronizados', 'Inativos'],
                            datasets: [
                                {
                                    backgroundColor: ['#00F781', '#1B54BD'],
                                    data: [40, 20],
                                },
                            ],
                        }}
                    />
                </CCardBody>
            </CCard>
        </>
    )
}

export default  ToppingsAndDevices;
