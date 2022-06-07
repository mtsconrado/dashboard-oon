import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'

// import ButtonRelatory from '../../../btn/ButtonCall'

const sinisterChart = () => {
    return (
        <>
            <CRow >
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
                type="bar"
                options={{
                    plugins: {
                        legend: {
                            display: false,
                        }
                    }
                }}
                data={{
                    labels: ['Recém aberto', 'Em vistoria', 'Em andamento', 'Concluídos'],
                    datasets: [
                        {
                            barPercentage: 0.5,
                            label: 'Sinistro',
                            backgroundColor: ['#216CFF', '#FF6711', '#FE3F61', '#00F781'],
                            data: [43, 21, 32, 60, 80],
                        },
                    ],

                }}
            />
        </>
    )
}

export default  sinisterChart;
