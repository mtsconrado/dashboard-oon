import React from 'react'
import { CCol, CRow } from '@coreui/react';
import { CChart } from '@coreui/react-chartjs';

// import ButtonRelatory from '../../../btn/ButtonCall';

function SinisterChartLine() {
    return (
        <>
            <CRow>
                <CCol>
                    <label className="text-titulo-graph-sinistro">Sinistros</label>
                    <br />
                    <label className="finc-sub"> Dezembro 2021</label>
                </CCol>

                <CCol className='btn-chart-sinister'>
                    {/* <ButtonRelatory /> */}
                </CCol>
            </CRow>
            <CChart
                height={180}
                type="line"
                data={{
                    labels: ['Sem1', 'Sem2', 'Sem3', 'Sem4', 'Sem5'],
                    datasets: [
                        {
                            borderColor: '#216CFF',
                            label: 'Sinistros abertos no mês',
                            backgroundColor: ['#216CFF'],
                            data: [43, 21, 32, 60, 80],
                        },
                    ],

                }}
                options={{
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                    },
                    scales: {
                        x: {
                            grid: {
                                drawOnChartArea: false,
                            },
                        },
                        y: {
                            ticks: {
                                stepSize: Math.ceil(250 / 5),
                                max: 250,
                            },
                        },
                    },
                }}
            />
        </>
    )
}

export default  SinisterChartLine;
