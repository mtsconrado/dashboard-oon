import React, { useState,  useEffect } from 'react'
import './report.css'

// import bibliotecas
import Resumo from './../reports/Resume'
import Viagens from './../reports/Travel'
import Rotas from './../reports/Routes'

import {
    CButton,
    CCard,
    CCardBody,
    CCardTitle,
    CRow, 
    CCol,
    CContainer,
    CCardText,
    CInputGroup,
    CFormSelect,
    CFormInput, 
  } from '@coreui/react'

var data = new Date();
const Report = () => {
    const [visible, setVisible] = useState(false)
    const [day, setDay] = useState()
    const [mounth, setMouth] = useState()
    const [year, setYear] = useState()

    const [hourPass, setHourPass] = useState()
    const [hourActually, setHourActually] = useState()

    const [dateInicio, setDateInicio] = useState()
    const [dateFinal, setDateFinal] = useState()
    const [dateMax, setDateMax] = useState() // data maxima 
    // Pega data e hora
    useEffect(()=>{
        setDay(data.getDate())
        setMouth(data.getMonth()+1)
        setYear(data.getFullYear())

        // Pegando hora
        let aux = data.getHours() - 1
        if(aux < 10){
            aux = '0'+aux
        }
        console.log('aux', aux)
        setHourPass( aux +':'+'00')
        setHourActually(data.getHours()+':'+'00')

        // setando a data
        setDateInicio(data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()) // data que será pega no filtro
        setDateFinal(data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate())
        setDateMax(data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()) // limita a data maxima de hoje
    },[])

    const selectDateInicio = (e) =>{
        setDateInicio(e.target.value)
    }
    const selectDateFinal = (e) =>{
        setDateFinal(e.target.value)
    }
    const selectHourPass = (e) =>{
        setHourPass(e.target.value)
    }
    const selectHourActually = (e) =>{
        setHourActually(e.target.value)
    }
    return (
        <>  
            <h5>Filtrar Relatórios</h5>
            <CContainer fluid className='menu-report'>
                <CRow className="align-items-start">
                    <CCol>
                        <CFormSelect 
                            disabled
                            aria-label="Selecione o Local"
                            options={[
                                'Selecione o Local',
                                { label: 'BH', value: '1' },
                                { label: 'SP', value: '2' },
                                { label: 'RJ', value: '3' }
                        ]}
                        />
                    </CCol>
                    <CCol>
                        <CFormSelect 
                            aria-label="Selecione o Grupo"
                            options={[
                                'Selecione o Grupo',
                                { label: 'A', value: '1' },
                                { label: 'B', value: '2' },
                                { label: 'C', value: '3' }
                        ]}
                        />
                    </CCol>
                    <CCol>
                        <CInputGroup className="mb-3">
                            <CFormInput aria-label="Sizing example input" placeholder='Digite a placa' aria-describedby="inputGroup-sizing-default"/>
                        </CInputGroup>
                    </CCol>
                </CRow>
                <CRow className="align-items-start">
                    
                    {/* data atual - uma hr atras */}
                    <CCol>
                        <h6> Início </h6>
                        <input id="date" type="date" onChange={selectDateInicio} value={dateInicio} max={dateMax} min='2018-01-01' ></input>
                        <input type="time" id="inicio" onChange={selectHourPass} value={hourPass} ></input>
                    
                    </CCol>
                    {/* data atual e hora atual */}
                    <CCol>
                        <h6> Fim </h6>
                        <input id="date" type="date"  onChange={selectDateFinal} value={dateFinal} max={dateMax} min='2018-01-01'></input>
                        <input type="time" id="fim" onChange={selectHourActually} value={hourActually} ></input>
                        
                    </CCol>
                </CRow>
            </CContainer>           
                        

            <br />
           <CRow>
                <CCard style={{ width: '18rem' }} className="container-card">
                    <CCardBody>
                        <CCardTitle>Resumo</CCardTitle>
                        <CCardText>
                            Informações sobre a placa do veículo selecionada.
                        </CCardText>

                        {/* Passar valores do filtro  */}
                       <Resumo />
                    </CCardBody>
                </CCard>
            
            
                <CCard style={{ width: '18rem' }} className="container-card">
                    <CCardBody>
                        <CCardTitle>Viagens</CCardTitle>
                        <CCardText>
                            Relatórios de viagens do dispositivo.
                        </CCardText>
                        {/* Passar valores do filtro  */}
                        <Viagens />
                    </CCardBody>
                </CCard>
            
                <CCard style={{ width: '18rem' }} className="container-card">
                <CCardBody>
                    <CCardTitle>Rotas</CCardTitle>
                    <CCardText>
                            Relatório de rotas do dispositivo
                    </CCardText>
                    {/* Passar valores do filtro  */}
                    <Rotas />
                </CCardBody>
                </CCard>
            </CRow>
            <br />
        </>
    )
}

export default  Report