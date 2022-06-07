import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'

import MonthAndYear from '../components/MonthAndYear'
import ButtonGraph from '../buttons/ButtonGraph'

const ChartPlan = () => {
    const saveFilter = (usersCity, usersType, initialDate, finalDate) => {
        // endpoint para fazer o filtro
    }

    return (
        <>
            <CCard className="cards">
                <CCardBody>
                    <CRow>
                        <CCol>
                            <label className="finc-title">Planos</label>
                            <br />
                            <label className="finc-sub"> <MonthAndYear /></label>
                        </CCol>
                        <CCol className='btn-filter'>
                            <ButtonGraph name={'dos planos'} saveFilter={saveFilter} />
                        </CCol>
                    </CRow>

                    <CChart
                        type="bar"
                        options={{
                            plugins: {
                                legend: {
                                    display: false,
                                }
                            }
                        }}
                        data={{
                            datasets: [
                                {
                                    backgroundColor: ['#00F781', '#FF6711', '#FF2828'],
                                    barPercentage: 0.7,
                                    data: [40, 20, 10],
                                }
                            ],
                            labels: ['Ativos', 'Em análise', 'Cancelado',],
                        }}
                        width={5}
                        height={5}
                    />
                </CCardBody>
            </CCard>
        </>
    )
}

export default  ChartPlan