import React, { useState } from 'react'
import { InfoWindow } from '@react-google-maps/api';
import { CImage, CButton, CRow, CCol } from '@coreui/react';

import carro from './../../../assets/images/carro01.jpeg';

import '../css/infoWindow.css';

const InfoWindowPop = (props) => {

    const [statusCarro, setStatusCarro] = useState(false)


    function close() {
        props.closePop()
    }

    return (
        <>
            <InfoWindow
                position={{ lat: props.device.actuallyPosition.lat, lng: props.device.actuallyPosition.lng }}
                onCloseClick={close}
            >
                <div className='container-info-window'>
                    <CRow className="container-info-window-linha1">
                        <CCol className='line1-colLeft' sm="auto">
                            <CImage width={180} height={100} src={carro} className='img-pop' />
                        </CCol>
                        <CCol className='line2-colRight'>
                            <br />
                            <div className='linha1-container-left'>
                                <label className='font-sub'> Placa </label>
                                <br />
                                <label className='font-text'>XXX-1234</label>
                                <br />
                                <label className='font-sub'> Nome </label>
                                <br />
                                <label className='font-text'> {props.device.name} </label>
                                <br />
                            </div>
                        </CCol>
                    </CRow>

                    <CRow className="container-infoWindo-linha2" >

                        <CCol className='line2-col-left' sm="auto">
                            <label className='font-sub'> Status </label>
                            <br />
                            {statusCarro == true ? (
                                <label className='font-text'>Em Movimento </label>
                            )
                                :
                                <label className='font-text'>Parado</label>
                            }
                            <br />
                            <label className='font-sub'> Velocidade </label>
                            <br />
                            <label className='font-text'> 60 km/h</label>

                        </CCol>

                        <CCol className='line2-col-mid' sm="auto">
                            <label className='font-sub'> Motorista </label>
                            <br />
                            <label className='font-text'> Gustavo Alcantara </label>
                            <br />
                            <label className='font-sub'> Pagamento </label>
                            <br />
                            <label className='font-text'> R$ 450,20</label>
                            <br />

                        </CCol>

                        <CCol className='line2-col-right' sm="auto">
                            <CButton onClick={props.openModal} className="btn-relatorio" size='sm' color="secondary" shape="rounded-pill w-100" >
                                <label className='font-btns'> Relatório Completo </label>
                            </CButton>
                            <br /><br />
                            <CButton className="btn-carro" size='sm' color="secondary" shape="rounded-pill" >
                                <label className='font-btns'> Informações Veículo  </label>
                            </CButton>
                        </CCol>
                    </CRow>
                    <br />
                </div>
            </InfoWindow>
        </>
    )
}

export default  InfoWindowPop