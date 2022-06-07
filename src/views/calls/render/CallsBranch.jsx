import React from 'react';
import { CChart } from '@coreui/react-chartjs';
import { CCol, CCard, CCardBody, CRow } from '@coreui/react';

import ButtonRelatory from '../btns/ButtonCall';

const CallsBranch = () => {
    return (
        <CCard className='card'>
            <CCardBody>
                <CRow>
                    <CCol>
                        <label className="call-title">Comparativo</label >
                        <br />
                        <label className="call-sub">Dezembro 2022</label>
                    </CCol>
                    <CCol className='btn-filter'>
                        <ButtonRelatory />
                    </CCol>
                </CRow>
                <CChart
                    type="bar"
                    options={{
                        plugins: {
                            legend: {
                                position: 'bottom',
                            },
                        }
                    }}
                    data={{
                        labels: ['WhatsApp', 'E-mail', 'Chat', 'Instagram', 'Outro'],
                        datasets: [
                            {
                                label: 'Chamadas de clientes',
                                backgroundColor: '#5F7ADA',
                                barPercentage: 0.7,
                                data: [40, 20, 12, 39, 10, 80],
                            },
                            {
                                label: 'Chamadas de não clientes',
                                backgroundColor: '#99E9F4',
                                barPercentage: 0.7,
                                data: [10, 45, 22, 19, 30, 40],
                            },
                        ],
                    }}
                    labels="months"
                />
            </CCardBody>
        </CCard>
    )
}

export default  CallsBranch;
