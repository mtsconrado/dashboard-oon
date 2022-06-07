
import {
    CButton, CCol, CFormSelect, CRow, CTable,
    CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow
} from '@coreui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import './css/followCall.css'
import { BsSearch, BsFlagFill, BsChevronBarLeft } from "react-icons/bs";

import Cookies from 'js-cookie'

import CallInfo from './InfoCall'

import MapFollowCall from './google-map/MapFollowCall'
import MapOff from './MapOff'

const FollowCall = () =>{
    
    const [dados, setDados] = useState([])
    const token = Cookies.get('TokenID')
    const userType = Cookies.get('userType')


    const [flag, setFlag] = useState(true)
    const [op, setOp] = useState([
        { label: 'Iniciado', value: '1' },
        { label: 'A caminho', value: '2' },

    ])

    const [client, setClient] = useState( {status:'', name:'', tipo:'', placa:'', obs:'', adressOcorrency: {lat:null, lng: null}, adressDestino: {lat:null, lng:null}, namePrestador:null, addressPrestador:{lat:null, lng: null} },)

    // clientes em acompnahmento 
    // Possui dois status em acompanhamento , iniciado e prestador a caminho 
    const calls = [
        {status:'Iniciado', name:'Fulano ferreira',tempoCall:32,  tipo:'Reboque', placa:'XYZ-1234', timeDest:14 , obs:'Motor sem óleo', distance: null, adressOcorrency: {lat:-19.967788, lng: -43.9607583}, adressDestino: {lat:-19.9159613, lng:-43.9075169}, namePrestador:null, tempo:null ,addressPrestador:{lat: null, lng:null} },
        {status:'Iniciado', name:'Whinderson Nunes',tempoCall:32,  tipo:'Borracheiro', placa:'ABC - 1234', timeDest:5 , obs:'Dois pneus furados', distance:null,  adressOcorrency: {lat:-19.965425, lng: -43.8719556}, adressDestino: {lat:-19.9607086, lng:-43.9214618}, tempo:null, namePrestador:null, addressPrestador:{lat: null, lng:null} },
        {status:'Prestador a caminho', name:'Popo freitas',tempoCall:32,  tipo:'Guincho', placa:'CDE 4545',timeDest:29, obs:'Batida de carro', adressOcorrency: {lat: -19.9285546,  lng:-43.9248353}, adressDestino: {lat:-19.9043105, lng: -44.0172453}, tempo:10,  namePrestador:'Borracharia mao na roda 3', distance:8,  addressPrestador:{lat:-19.8799211 , lng:-43.8904928} },
        {status:'Iniciado', name:'Fulano ferreira',tempoCall:32,  tipo:'Reboque', placa:'XYZ-1234', timeDest:14 , obs:'Motor sem óleo', distance: null, adressOcorrency: {lat:-19.967788, lng: -43.9607583}, adressDestino: {lat:-19.9159613, lng:-43.9075169}, namePrestador:null, tempo:null ,addressPrestador:{lat: null, lng:null} },
        {status:'Iniciado', name:'Whinderson Nunes',tempoCall:32,  tipo:'Borracheiro', placa:'ABC - 1234', timeDest:5 , obs:'Dois pneus furados', distance:null,  adressOcorrency: {lat:-19.965425, lng: -43.8719556}, adressDestino: {lat:-19.9607086, lng:-43.9214618}, tempo:null, namePrestador:null, addressPrestador:{lat: null, lng:null} },
        {status:'Prestador a caminho', name:'Popo freitas', tempoCall:32, tipo:'Guincho', placa:'CDE 4545',timeDest:29, obs:'Batida de carro', adressOcorrency: {lat: -19.9285546,  lng:-43.9248353}, adressDestino: {lat:-19.9043105, lng: -44.0172453}, tempo:10,  namePrestador:'Borracharia mao na roda 3', distance:8,  addressPrestador:{lat:-19.8799211 , lng:-43.8904928} },
        {status:'Iniciado', name:'Fulano ferreira',tempoCall:32,  tipo:'Reboque', placa:'XYZ-1234', timeDest:14 , obs:'Motor sem óleo', distance: null, adressOcorrency: {lat:-19.967788, lng: -43.9607583}, adressDestino: {lat:-19.9159613, lng:-43.9075169}, namePrestador:null, tempo:null ,addressPrestador:{lat: null, lng:null} },
        {status:'Iniciado', name:'Whinderson Nunes',tempoCall:32,  tipo:'Borracheiro', placa:'ABC - 1234', timeDest:5 , obs:'Dois pneus furados', distance:null,  adressOcorrency: {lat:-19.965425, lng: -43.8719556}, adressDestino: {lat:-19.9607086, lng:-43.9214618}, tempo:null, namePrestador:null, addressPrestador:{lat: null, lng:null} },
        {status:'Prestador a caminho', name:'Popo freitas', tempoCall:32, tipo:'Guincho', placa:'CDE 4545',timeDest:29, obs:'Batida de carro', adressOcorrency: {lat: -19.9285546,  lng:-43.9248353}, adressDestino: {lat:-19.9043105, lng: -44.0172453}, tempo:10,  namePrestador:'Borracharia mao na roda 3', distance:8,  addressPrestador:{lat:-19.8799211 , lng:-43.8904928} },
        {status:'Iniciado', name:'Whinderson Nunes',tempoCall:32,  tipo:'Borracheiro', placa:'ABC - 1234', timeDest:5 , obs:'Dois pneus furados', distance:null,  adressOcorrency: {lat:-19.965425, lng: -43.8719556}, adressDestino: {lat:-19.9607086, lng:-43.9214618}, tempo:null, namePrestador:null, addressPrestador:{lat: null, lng:null} },
        {status:'Prestador a caminho', name:'Popo freitas',tempoCall:32,  tipo:'Guincho', placa:'CDE 4545',timeDest:29, obs:'Batida de carro', adressOcorrency: {lat: -19.9285546,  lng:-43.9248353}, adressDestino: {lat:-19.9043105, lng: -44.0172453}, tempo:10,  namePrestador:'Borracharia mao na roda 3', distance:8,  addressPrestador:{lat:-19.8799211 , lng:-43.8904928} },
        {status:'Iniciado', name:'Whinderson Nunes',tempoCall:32,  tipo:'Borracheiro', placa:'ABC - 1234', timeDest:5 , obs:'Dois pneus furados', distance:null,  adressOcorrency: {lat:-19.965425, lng: -43.8719556}, adressDestino: {lat:-19.9607086, lng:-43.9214618}, tempo:null, namePrestador:null, addressPrestador:{lat: null, lng:null} },
        {status:'Prestador a caminho', name:'Popo freitas',tempoCall:32,  tipo:'Guincho', placa:'CDE 4545',timeDest:29, obs:'Batida de carro', adressOcorrency: {lat: -19.9285546,  lng:-43.9248353}, adressDestino: {lat:-19.9043105, lng: -44.0172453}, tempo:10,  namePrestador:'Borracharia mao na roda 3', distance:8,  addressPrestador:{lat:-19.8799211 , lng:-43.8904928} },
    ]
 
    
    const [screen, setScreen] = useState(1)
    function choiceScreen1(){
        setScreen(1)
    }
    // tela onde mostra informacoes de cada usuario 
    const [callSelect, setCallSelect] = useState();
    //const [providerSelect, setProviderSelect] = useState()
    function choiceScreen2(e){
        setScreen(2)
        setCallSelect(e)
    }

    function infoRoute (e){
        console.log('oq vem de providers', e)
    }

    const [flagMap, setFlagMap]  = useState(false)
    function statusMap(e){
        setFlagMap(e)
    }

    if(calls == ''){
        return (
            <div>
                <br />
                <h4> <Spinner animation="grow" variant="info" />  </h4> 
            </div>  
            
        )
    }else{
        if(screen == 1){
            return (
                <div className='container-follow-body'> 
                    <div className='container-render-calls'>
                        {calls.map( (call, index) =>{
                            return (
                                <div className="container-render-call" key={index}>
                                    <label className='font-name'> {call.name} </label>
                                    <CButton variant="ghost" className="btnCall" size='lg' onClick={() => (choiceScreen2(call))} color='dark'> <BsSearch/> </CButton>
                                    <br />
                                    <label className='boxes'> {call.status} </label>
                                    <label className='boxes'> {call.tipo} </label>
                                    {call.distance != '' ?
                                        (<label className='boxes'> {call.distance} Kms </label>)
                                        :null
                                    }
                                    {call.tempo != '' ?
                                        (<label className='boxes'> {call.tempo} Minutos </label>)
                                        :null
                                    }
                                    {/* <CButton variant="ghost" className="btnCall" size='lg' color='dark'> <BsSearch/> </CButton> */}
                                    
                                </div>
                            )
                        })}
    
                    </div>
                      
                </div>
            )
        }else{
            return (
                <div className='container-follow-body2'> 
                    <CRow>
                        <CCol>
                            <CallInfo cliente={callSelect} />
                            { flagMap == false ? 
                                ( <CButton onClick={() => {statusMap(true)}} color='dark'> Ver no mapa</CButton>)
                                    :
                                (<CButton onClick={() => statusMap(false)} color='dark'> Esconder mapa</CButton>)    
                            }
                            <br /><hr />
                            
                            <CButton variant="outline"  size='lg' onClick={choiceScreen1} color='dark'> <BsChevronBarLeft/> </CButton>
                        </CCol>


                        <CCol> 
                            {/* <h4>Mapa</h4> */}
                            {/* <MapFollowCall cliente={callSelect} providerInfos={ infoRoute}  /> */}
                            {flagMap == true ? 
                                ( <MapFollowCall cliente={callSelect} providerInfos={ infoRoute}  />)
                                :   
                                (<MapOff />)

                            }
                           
                        </CCol>
                    </CRow>
                     
                </div>
            )
        }
        
    }

    
}


export default  FollowCall