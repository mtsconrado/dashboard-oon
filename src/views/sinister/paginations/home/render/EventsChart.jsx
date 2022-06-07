import React from 'react';
import { CCol, CRow } from '@coreui/react';
import { CChart } from '@coreui/react-chartjs';

// import ButtonRelatory from '../../../btn/ButtonCall';

const eventChart = () => {
    return (
        <>
            <CRow >
                <CCol>
                    <label className="text-titulo">Eventos</label>
                    <br />
                    <label className="fincSub"> Dezembro 2021</label>
                </CCol>

                <CCol className='btn-chart-sinister'>
                    {/* <ButtonRelatory /> */}
                </CCol>
            </CRow>


            <CChart
                height={180}
                type="doughnut"
                options={{
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                    }
                }}
                data={{
                    labels: ['Capotamento', 'Atropelamento', 'Colisão', 'Saída de pista', 'Outros'],
                    datasets: [
                        {
                            backgroundColor: ['#216CFF', '#FF6711', '#00F781', '#FE3F61', '#14142B'],
                            data: [43, 21, 32, 60, 80],
                        },
                    ],
                }}
            />
        </>

    )
}

export default  eventChart