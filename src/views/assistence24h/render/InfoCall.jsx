import React from 'react'

import {
    CButton, CCol, CFormSelect, CRow, CTable,
    CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow
} from '@coreui/react'
import './css/infoCall.css'
import { BsFillMapFill } from "react-icons/bs";

const InfoCall = (props) => {


    return (
        <> 
            <div className='container-infoCall-header'>
                <h4>Acompanhar o atendimento </h4>
            </div>
            <hr />
            <div className='container-infoCall-body'>
                <label className='font-infoCall-header'> Cliente</label>
                <br />
                <label className='font-infoCall-text'> {props.cliente.name}</label>
                <br />
                <label className='font-infoCall-boxes'> {props.cliente.status}</label>
                <label className='font-infoCall-boxes'> {props.cliente.tipo}</label>
                <label className='font-infoCall-boxes'> <b> Tempo de atendimento</b> {props.cliente.tempoCall} Minutos</label>
                <hr />
                <div className='container-partsOfBody'>
                    <label className='font-infoCall-header'> Nome Provedor</label>
                    <br />
                    <label className='font-infoCall-text'> {props.cliente.namePrestador}</label>
                    <br />
                </div>
                
                <div className='container-partsOfBody'>
                    <label className='font-infoCall-header'> Endereço Provedor </label>
                    <br />
                    <label className='font-infoCall-text'> Av Raja Galia 245</label>
                    <br />
                    <label className='font-infoCall-boxes'> Lat:{props.cliente.addressPrestador.lat}</label>
                    <label className='font-infoCall-boxes'> Lng:{props.cliente.addressPrestador.lng}</label>
                    <br />
                </div>
               
                <div className='container-partsOfBody'>
                    <label className='font-infoCall-header'> Endereço da ocorrência</label>
                    <br />
                    <label className='font-infoCall-text'> Av barão homen de melo 2455</label>
                    <br />
                    <label className='font-infoCall-boxes'> Lat:{props.cliente.adressOcorrency.lat}</label>
                    <label className='font-infoCall-boxes'> Lng:{props.cliente.adressOcorrency.lng}</label>
                    <label className='font-infoCall-boxes'> <b>  Tempo trajeto provedor:  </b> {props.cliente.tempo} minutos</label>
                    <label className='font-infoCall-boxes'> <b>  Distância provedor ocorrência:  </b> {props.cliente.distance} Km(s)</label>
                    <br />
                </div>
               
                <div className='container-partsOfBody'>
                    <label className='font-infoCall-header'> Endereço de destino</label>
                    <br />
                    <label className='font-infoCall-text'> Av professor mario werneck 730</label>
                    <br />
                    <label className='font-infoCall-boxes'> Lat:{props.cliente.adressDestino.lat}</label>
                    <label className='font-infoCall-boxes'> Lng:{props.cliente.adressDestino.lng}</label>
                    <label className='font-infoCall-boxes'> <b>  Tempo trajeto ocorrência destino:  </b> {props.cliente.tempo} minutos</label>
                    <label className='font-infoCall-boxes'> <b>  Distância ocorrência destino:  </b> {props.cliente.distance} Km(s)</label>
                    <br />
                </div>
                <br />
                

            </div>
        </>
    )
}

export default  InfoCall