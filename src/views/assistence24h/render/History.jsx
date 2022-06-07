import React, {useState} from 'react'
import { Spinner }  from 'react-bootstrap';

import CIcon from '@coreui/icons-react'
import {cilCaretRight, cilCaretLeft } from '@coreui/icons'
import './css/history.css'

import HistoryUser from './HistoryUser'


import img1 from './../../../assets/images/mapOpen.png'
// import MapOff from './MapOff'
import {
    CRow,
    CCol,
    CButton
    
  } from '@coreui/react'

import MapGoogle from './google-map/HistoryMap'
import MapOff from './MapOff';

const History   = () =>{

    const [flagHeader, setFlagHeader] = useState(false)

    function getGeral(){
        setFlagHeader(false)
    }

    function getUserHistory(){
        setFlagHeader(true)
    }

    const [chamados, setChamados] = useState(
        [
            {id:'1', plate:'xxx 1234', name:'Maria', type:'Reboque',   status:'finalizado',  adressOcorrency: {lat:-19.967788, lng: -43.9607583}, adressDestino: {lat:-19.9159613, lng:-43.9075169}, tempoFinal:10,  namePrestador:'Guincho do Tiao', distance:82, addressPrestador:{lat:-19.9036664 , lng:-43.9791041}},

            {id:'2', plate:'yyyy 1234', name:'Joao', type:'Guincho',   status:'finalizado',adressOcorrency: {lat:-19.965425, lng: -43.8719556}, adressDestino: {lat:-19.9607086, lng:-43.9214618}, tempoFinal:10,  namePrestador:'Reboque zekinha', distance:18, addressPrestador:{lat:-19.9036664 , lng:-43.9654505} },

            {id:'3', plate:'zzz 1234', name:'Fabio', type:'Pneu',      status:'finalizado',  adressOcorrency: {lat: -19.9285546,  lng:-43.9248353}, adressDestino: {lat:-19.9043105, lng: -44.0172453}, tempoFinal:10,  namePrestador:'Borracharia mao na roda 3', distance:8, addressPrestador:{lat:-19.8799211 , lng:-43.8904928} },
        ]
    )
    const [chamado, setChamado] = useState( {id:'', plate:'', name:'', type:'', status:'',  adressOcorrency: {lat: null,  lng: null}, adressDestino: {lat:null, lng: null}, tempoFinal:null,  namePrestador: '', distance:null, addressPrestador:{lat:null, lng: null} })
    const [flag, setFlag] = useState(false)
    
    const setCall = (e) =>{
        setFlag(true)
        setChamado(e)
    }

    const backList = () =>{
        setFlag(false)
        setMapShow(false)
    }
    
    const [mapShow, setMapShow] = useState(false)
    const showMap = () =>{
        setMapShow(true)
    }

    if(chamados.length <= 0){
        return(
            <>
                <h4> <Spinner animation="grow" variant="info" />  </h4> 
            </>
        )

    }else{
        if(flag == false){
            return(
                <>  
                <div className='container-history-header'>
                    <div className='container-history-header-left'> 
                        <label className='font-title-header'> Histórico de chamados </label>
                    </div>

                    <div className='container-history-header-right'>
                        <CButton  
                            className= {flagHeader == false? "btn-header-historyOn" : "btn-header-historyOff"} 
                            onClick={getGeral} 
                            size='sm' 
                            variant='ghost' 
                            color="dark" 
                        > 
                                Últimos chamados 
                        </CButton>
                    </div>

                    <div className='container-history-header-right'>
                        <CButton  
                            className= {flagHeader == true? "btn-header-historyOn" : "btn-header-historyOff"} 
                            onClick={getUserHistory} 
                            size='sm' 
                            variant='ghost' 
                            color="dark" 
                        > 
                            Histórico por usuário 
                        </CButton>
                    </div>
                </div>
                     
                    
                    {flagHeader === false ? 
                        <> 
                            {chamados.map((item, index ) =>{
                                return (
                                    <div key={index.toString()}>
                                        <CRow > 
                                            <CCol className='col-id' xs={1}>
                                                <label> {item.id}</label>
                                            </CCol>
                                            <CCol className='col-conteudo' >
                                                <label> {item.name}</label>
                                                <div className='container-informacoes'>
                                                    <label className='container-history-time'  > Tipo </label>
                                                    <label className='container-history-time' > Iniciado </label> 
                                                    <label className='container-history-time'> Tempo </label>
                                                    <label className='container-history-time'> Nome Prestador </label>
                                                    <label className='container-history-time'> 12/02/2022 </label>
                                                </div>
                                            </CCol>
                                            <CCol className='col-btn'  xs={2}>
                                                <CButton className='btn-history-rota' onClick={ () =>{setCall(item)}} size='sm' variant='ghost' color="dark">
                                                    <CIcon icon={cilCaretRight} size="xl"/>
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                        <hr />
                                    </div>
                                    
                                )
                            })}
                        </>
                            :
                        <> 
                            
                            <HistoryUser /> 

                        </>
                    }
                    <hr />
                    
                </>
            )
        }else{
            return(
                    <> 
                    <CRow>
                        <CCol>
                            <div className='container-history-select-header'> 
                                <CRow>
                                    <CCol>
                                        <label className='font-tit-history'> Atendimento #{chamado.id}  </label>
                                        <br /><br />
                                        <label>{chamado.name} </label>
                                        <br />
                                        <label >{chamado.plate} </label>
                                        <br /> 
                                        <div className='container-informacoes'>
                                            <label className='container-history-time'  > {chamado.type} </label>
                                            <label className='container-history-time'  > {chamado.status} </label>
                                        </div>
                                    </CCol>
                                    <CCol>
                                        <CButton className='btn-history-back' onClick={backList} size='sm' variant='ghost' color="dark">
                                            <CIcon icon={cilCaretLeft} size="xl"/>
                                        </CButton>
                                    </CCol>
                                </CRow>
                            </div>
                            <hr />
                            <div className='container-history-select-body'> 
                                <p> <b> Local inicial do prestador </b> </p>
                                <p> <b> Origem: </b> Av da moda </p>
                                <p> <b> Destino: </b> Av Barão homem de Melo  </p>
                                <CButton variant="outline" color ="dark"   onClick={showMap}>Ver no mapa</CButton>
                            </div>
                            <hr />
                            <div>
                                <p>Nome do serviço</p>
                                <label> Informacoes do servico prestado</label>
                                <div className='container-informacoes'>
                                    <label className='container-history-time'  > Tipo </label>
                                    <label className='container-history-time' > Iniciado </label> 
                                    <label className='container-history-time'> Tempo </label>
                                    <label className='container-history-time'> Nome Prestador </label>
                                </div>
                            </div>
                        </CCol>

                        <CCol>
                            {mapShow == true ? 
                                (<MapGoogle history={chamado} />)
                                : <MapOff/>
                            }
                            
                        </CCol>
                    </CRow>
                    
                </>
            )
        }
    }
    
}

export default  History