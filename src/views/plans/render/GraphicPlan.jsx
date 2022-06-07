import React from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import { CChart } from '@coreui/react-chartjs';

import BtnFilter from './btn/BtnFilter';

import '../css/graphicPlan.css';

function GraphicPlan() {
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    return (
        <CCard className='card'>
            <CCardBody>
                <CRow>
                    <CCol>
                        <label className="plan-title">Planos ativos</label >
                        <br />
                        <label className="plan-sub">Dezembro 2022</label>
                    </CCol>
                    <CCol className='btn-filter'>
                        <BtnFilter />
                    </CCol>
                </CRow>
                <CChart
                    type="line"
                    data={{
                        labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5'],
                        datasets: [
                            {
                                label: 'Atendimentos abertos',
                                backgroundColor: '#216CFF',
                                borderColor: "#216CFF",
                                pointBorderColor: "#fff",
                                data: [
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                ],
                            },
                            {
                                label: 'Atendimentos encerrados',
                                backgroundColor: '#00F781',
                                borderColor: "#00F781",
                                pointBorderColor: "#fff",
                                data: [
                                    random(50, 250),
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                ],
                            },

                        ],
                    }}
                    options={{
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                display: true,
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
                                    beginAtZero: true,
                                    maxTicksLimit: 5,
                                    stepSize: Math.ceil(250 / 5),
                                    max: 250,
                                },
                            },
                        },
                        elements: {
                            line: {
                                // tension: 0.2,
                            },
                            point: {
                                radius: 0,
                                hitRadius: 10,
                                hoverRadius: 4,
                                hoverBorderWidth: 3,
                            },
                        },
                    }}
                    className="chart-line"
                />
            </CCardBody>
        </CCard>
    )
}

export default  GraphicPlan;
