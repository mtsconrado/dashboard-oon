import React, { useState, useEffect } from 'react'
import {
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

// import './report.css'

// import bibliotecas
import Resumo from '../reports/Resume'
import Viagens from '../reports/Travel'
import Rotas from '../reports/Routes'


const Report = () => {
    var data = new Date();
    // const [day, setDay] = useState()
    // const [mounth, setMouth] = useState()
    // const [year, setYear] = useState()

    // const [hourPass, setHourPass] = useState()
    // const [hourActually, setHourActually] = useState()

    const [dateInicio, setDateInicio] = useState()
    // const [dateFinal, setDateFinal] = useState()
    // const [dateMax, setDateMax] = useState() // data maxima 
    // Pega data e hora
    // useEffect(()=>{
    // setDay(data.getDate())
    // setMouth(data.getMonth()+1)
    // setYear(data.getFullYear())

    // Pegando hora
    // let aux = data.getHours() - 1
    // if(aux < 10){
    //     aux = '0'+aux
    // }
    // console.log('aux', aux)
    // setHourPass( aux +':'+'00')
    // setHourActually(data.getHours()+':'+'00')

    // // setando a data
    // setDateInicio(data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()) // data que será pega no filtro
    // setDateFinal(data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate())
    // setDateMax(data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()) // limita a data maxima de hoje
    // },[])

    // const selectDateInicio = (e) =>{
    //     setDateInicio(e.target.value)
    // }
    // const selectDateFinal = (e) =>{
    //     setDateFinal(e.target.value)
    // }
    // const selectHourPass = (e) =>{
    //     setHourPass(e.target.value)
    // }
    // const selectHourActually = (e) =>{
    //     setHourActually(e.target.value)
    // }

    if (dateInicio == '') {
        return (
            <h3> Carregando... </h3>
        )
    } else {
        return (
            <CContainer fluid className='menu-report'>
                <h5>Filtrar Relatórios</h5>
                <br />
                <h6>Escolha um filtro</h6>
                <CRow className="align-items-start">
                    <CCol>
                        <CFormSelect
                            className=''
                            aria-label="Cidade"
                            options={[
                                'Cidade',
                                { label: 'BH', value: '1' },
                                { label: 'SP', value: '2' },
                                { label: 'RJ', value: '3' }
                            ]}
                        />
                    </CCol>
                    <CCol>
                        <CFormSelect
                            className=''
                            aria-label="Status"
                            options={[
                                'Status',
                                { label: 'A', value: '1' },
                                { label: 'B', value: '2' },
                                { label: 'C', value: '3' }
                            ]}
                        />
                    </CCol>
                    <CCol>
                        <CInputGroup className="mb-3">
                            <CFormInput
                                className=''
                                placeholder='Pesquise placa veículo'
                            />
                        </CInputGroup>
                    </CCol>
                </CRow>
                <br />
                <CRow className="align-items-start">
                    <CCol xs={3}>
                        <h6>Data de início</h6>
                        <div className="d-flex">
                            <CFormInput className=" me-2" type="date" />
                            <CFormInput className="" style={{ width: '70%' }} type="time" />
                        </div>
                    </CCol>
                    <CCol xs={3}>
                        <h6>Data de fim</h6>
                        <div className="d-flex">
                            <CFormInput className=" me-2" type="date" />
                            <CFormInput className="" style={{ width: '70%' }} type="time" />
                        </div>
                    </CCol>
                </CRow>
                <br />



                {/* ESTA DANDO ERRO DE WARNING    😔  - refazer   */}
                {/* <CRow className="align-items-start">
                        <CCol>
                            <h6> Data de início </h6>
                            <input  type="date" onChange={selectDateInicio} value={dateInicio} max={dateMax} min='2018-01-01' ></input>
                            <input type="time" id="inicio" onChange={selectHourPass} value={hourPass} ></input>
                        </CCol>
                        <CCol>
                            <h6> Data de fim </h6>
                            <input   type="date"  onChange={selectDateFinal} value={dateFinal} max={dateMax} min='2018-01-01'></input>
                            <input type="time" id="fim" onChange={selectHourActually} value={hourActually} ></input>
                        </CCol>
                    </CRow>  */}


                <br />
                <div style={{ alignItems: "center" }}  >
                    <CRow>
                        <CCol>
                            <CCard className='card-report'>
                                <CCardBody>
                                    <CCardTitle>Resumo</CCardTitle>
                                    <CCardText>
                                        Informações sobre a placa do veículo selecionada.
                                    </CCardText>

                                    {/* Passar valores do filtro  */}
                                    <Resumo />
                                </CCardBody>
                            </CCard>
                        </CCol>

                        <CCol>
                            <CCard className='card-report'>
                                <CCardBody>
                                    <CCardTitle>Viagens</CCardTitle>
                                    <CCardText>
                                        Relatórios de viagens do {<br />} dispositivo.
                                    </CCardText>
                                    {/* Passar valores do filtro  */}
                                    <Viagens />
                                </CCardBody>
                            </CCard>
                        </CCol>

                        <CCol>
                            <CCard className='card-report'>
                                <CCardBody>
                                    <CCardTitle>Rotas</CCardTitle>
                                    <CCardText>
                                        Relatório de rotas do {<br />}
                                        dispositivo.
                                    </CCardText>
                                    {/* Passar valores do filtro  */}
                                    <Rotas />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </div>
                <br />
            </CContainer>
        )
    }

}

export default  Report;
