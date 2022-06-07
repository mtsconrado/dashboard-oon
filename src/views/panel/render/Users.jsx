import React,{useStae} from 'react'
import { CChart } from '@coreui/react-chartjs'
import {
    CCol,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardTitle,
    CCardText,
    
  } from '@coreui/react'

  import ButtonRelatory from '../btns/ButtonCall'



const Users = () =>{

    return (
        <> 
            <CCard className='cardEsquerda'>
                <CCardBody>
                    <CCardTitle>  Usuários  </CCardTitle>
                    <label > Dezembro 2021</label>
                    <CButtonGroup size="sm" role="group" className='btn1Chamados' aria-label="Basic outlined example">
                        <CButton color="primary" variant="outline" color="dark">
                            Dia
                        </CButton>
                        <CButton color="primary" variant="outline" color="dark">
                            Semana
                        </CButton>
                        <CButton color="primary"  variant="outline" color="dark">
                            Mês
                        </CButton>
                    </CButtonGroup>
                    {/* Ver como vai fazer com esse button de relatory */}
                    <ButtonRelatory   />
                    <CChart
                        type="bar"
                        data={{
                            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
                            datasets: [
                                {
                                    label: 'Usuários novos',
                                    backgroundColor:  '#2561FA',
                                    data: [40, 20, 12, 39, 10, 80],
                                },
                                {
                                    label: 'Usuários recorrentes',
                                    backgroundColor: '#19D1FD',
                                    data: [10, 45, 22, 19, 30, 40],
                                },
                            ],
                        }}
                        labels="months"
                    />
                    
                </CCardBody>
            </CCard>
        </>
    )
}

export default  Users