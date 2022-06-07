import React, { useState } from 'react'
import { CCard, CCardBody, CFormInput, CRow, CCol, CButton, CContainer } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'

import SinisterChart from './render/SinisterChart'
import EventsChart from './render/EventsChart'
import Calender from './render/Calendar'
import SinisterChartLine from './render/SinisterChartLine'

import './css/home.css'

const Home = () => {
    const [qtd_total_sinistro, setQtd_total_sinistro] = useState(34)

    return (
        <>
            <CRow>
                <CCol xs={7}>
                    <CCard className='card-search'>
                        <CCardBody>
                            <label className='text-titulo'> Pesquise a placa do veículo</label>
                            <CRow>
                                <CCol xs={10}>
                                    <CFormInput
                                        className=''
                                        type="text"
                                        placeholder="Pesquisar"
                                    />
                                </CCol>
                                <CCol>
                                    <CButton className='' color='light'>
                                        <CIcon icon={cilSearch} size='lg' />
                                    </CButton>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={5}>
                    <CCard className='card-total-sinister'>
                        <CCardBody className='d-flex flex-column'>
                            <label className='text-sinister-open'>Total de sinistros abertos no mês:</label>
                            <label className='text-qtd'>{qtd_total_sinistro}</label>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            <br />
            <CRow>
                <CCol xs={7}>
                    <CCard className='card-sinister'>
                        <CCardBody>
                            <SinisterChart />
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={5}>
                    <CCard className='card-calender'>
                        <CCardBody>
                            <Calender />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            <br />
            <CRow>
                <CCol xs={7}>
                    <CCard className='card-sinister'>
                        <CCardBody>
                            <SinisterChartLine />
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={5}>
                    <CCard className='card-events'>
                        <CCardBody>
                            <EventsChart />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default  Home;
