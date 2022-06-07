import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, Polyline, useJsApiLoader } from '@react-google-maps/api';
import { Spinner } from 'react-bootstrap';
import { CRow, CCol, CCard, CCardBody } from '@coreui/react';

import carSynced from "../../assets/images/car-synced.png"
import carNoSignal3d from "../../assets/images/car-no-signal-3d.png"
import carNoSignal7d from "../../assets/images/car-no-signal-7d.png"

import InfoWindowPopup from './render/InfoWindow'

import tokenMap from '../../configMap'
import WidgetsTracking from './render/WidgetsTracking';
import ModalDevices from './render/ModalDevices';
import ModalReports from './render/ModalReports';

import './css/tracking.css'
// import "../devices/css/devices.css";

const Tracking = () => {

    //Public API that will echo messages sent to it back to the client
    // const [socketUrl, setSocketUrl] = useState('wss://echo.websocket.org');
    // const [messageHistory, setMessageHistory] = useState([]);

    // const [response, setResponse] = useState("");
    const [cars, setCars] = useState([]);

    useEffect(() => {
        setCars(pos);
    }, [])

    useEffect(() => {
        return () => {
            setCars([]);
            setMap(null);
            setOp1(false);
            setOp2(false);
            setOp3(false);
            setOp4(false);
            setShow(false);
            setFlagBTN(true);
            setShow2(false);
            setFlagBTN2(true);
        }
    }, [])

    const containerStyle = {
        width: '100%',
        height: '80vh',
        borderRadius: '20px',
    };

    const center = {
        lat: -19.9190991,
        lng: -43.9385985
    };

    const options = {
        // styles: mapSyles,
        disableDefaultUI: true,
        zoomControl: true,
        fullscreenControl: true,
        streetViewControl: true,
    }

    const libraries = ["places"];

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: tokenMap,  // trocar o token aqui, TOKEN PESSOAL 
        libraries,
    })

    // const [statusCarro, setStatusCarro] = useState(false)
    const [map, setMap] = React.useState(null);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    const pos = [
        {
            id: 2,
            name: 'Gol bola',
            actuallyPosition: { lat: -19.956813, lng: -43.957453 },
            path: [
                { lat: -19.956813, lng: -43.957453 },
                { lat: -19.958517, lng: -43.957120 },
                { lat: -19.959273, lng: -43.957313 },
                { lat: -19.960473, lng: -43.957410 },
                { lat: -19.961623, lng: -43.957206 }
            ],
            status: 1,
            title: "Uluru (Ayers Rock)"
        },
        {
            id: 3,
            name: 'pegeout 207',
            actuallyPosition: { lat: -19.941351, lng: -44.007802 },
            path: [
                { lat: -19.941351, lng: -44.007802 },
                { lat: -19.943328, lng: -44.007822 },
                { lat: -19.945738, lng: -44.007931 },
                { lat: -19.947402, lng: -44.008073 },
                { lat: -19.949974, lng: -44.008435 },
                { lat: -19.951154, lng: -44.007984 },
            ],
            status: 0,
            title: "Uluru (Ayers Rock)222"
        },
        {
            id: 4,
            name: 'Camaro',
            actuallyPosition: { lat: -19.963912, lng: -43.962984 },
            status: 2,
            path: [
                { lat: -19.963912, lng: -43.962984 },
                { lat: -19.964376, lng: -43.962540 },
                { lat: -19.964684, lng: -43.962052 },
                { lat: -19.965087, lng: -43.960722 },
            ],
            title: "Uluru (Ayers Rock)222"
        },
        {
            id: 5,
            name: 'Mustang',
            actuallyPosition: { lat: -19.969876, lng: -43.944595 },
            path: [
                { lat: -19.969876, lng: -43.944595 },
                { lat: -19.968899, lng: -43.944242 },
                { lat: -19.967467, lng: -43.943652 },
                { lat: -19.966489, lng: -43.942332 },
                { lat: -19.966045, lng: -43.940937 },
                { lat: -19.965400, lng: -43.939542 }
            ],
            status: 2,
            title: "Uluru (Ayers Rock)22"
        },
    ]

    const [op1, setOp1] = useState(false);
    const [op2, setOp2] = useState(false);
    const [op3, setOp3] = useState(false);
    const [op4, setOp4] = useState(false);

    function open1() {
        setOp1(true), setOp2(false), setOp3(false), setOp4(false),
            allVehicles()
    }

    function open2() {
        setOp1(false), setOp2(true), setOp3(false), setOp4(false), openModal2()
    }
    function open3() {
        setOp1(false), setOp2(false), setOp3(true), setOp4(false), openModal()
    }
    function open4() {
        setOp1(false), setOp2(false), setOp3(false), setOp4(true), syncedDevices()
    }


    const [show, setShow] = useState(false);
    const [flagBTN, setFlagBTN] = useState(true);

    // Modal 1 de relatorio
    function openModal() {
        const handleShow = setShow(true);
        setFlagBTN(false)
        setFlagBTN2(false)
    }

    const closePopup = () => {
        setSelecionado('')
    }

    const closeModal = () => {
        setFlagBTN(true)
        setFlagBTN2(true)
        setShow(false)
    }

    const syncedDevices = () => {
        const synced = cars.filter((car) => car.status === 1)
        setCars(synced)
    }

    const allVehicles = () => {
        setCars(pos)
    }
    const [show2, setShow2] = useState(false);
    const [flagBTN2, setFlagBTN2] = useState(true)

    // Modal 2 de informações dos carros 
    function openModal2() {
        const handleShow2 = setShow2(true);
        setFlagBTN2(false)
        setFlagBTN(false)
    }

    const closeModal2 = () => {
        setFlagBTN2(true)
        setFlagBTN(true)
        setShow2(false)
    }

    const onLoad = polyline => {
        console.log('polyline: ', polyline)
    };


    const [selecionado, setSelecionado] = useState('')

    // escolhe o carro no map
    const selected = (e) => {
        setSelecionado(e)
    }

    if (isLoaded) {
        return (
            <>
                <ModalReports show={show} closeModal={closeModal} />
                <ModalDevices show2={show2} closeModal2={closeModal2} />
                <CCard className='behind'>
                    <CCardBody>
                        <CRow>
                            <CCol>
                                <img className="cars-icon-tracking" src={carSynced} alt="car-synced" />
                                <span>
                                    Dispositivos sincronizados
                                </span>
                            </CCol>
                            <CCol>
                                <img className="cars-icon-tracking" src={carNoSignal3d} alt="car-no-signal-3d" />
                                <span>
                                    Sem sinal há 3 dias
                                </span>
                            </CCol>
                            <CCol>
                                <img className="cars-icon-tracking" src={carNoSignal7d} alt="car-no-signal-7d" />
                                <span>
                                    Sem sinal há 7 dias
                                </span>
                            </CCol>
                        </CRow>
                        <WidgetsTracking open1={open1} open2={open2} open3={open3} open4={open4} op1={op1} op2={op2} op3={op3} op4={op4} />
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                            onUnmount={onUnmount}
                            options={options}
                        >
                            {cars.map((item, index) => {
                                if (item.status == 1) {
                                    return (
                                        <div key={index.toString()}>
                                            <Polyline
                                                path={item.path}
                                            />
                                            <Marker
                                                key={item.id}
                                                position={{ lat: item.actuallyPosition.lat, lng: item.actuallyPosition.lng }}
                                                icon={{
                                                    url: carSynced,
                                                    scaledSize: new window.google.maps.Size(32, 32),
                                                    origin: new window.google.maps.Point(0, 0),
                                                    anchor: new window.google.maps.Point(15, 15),
                                                }}

                                                onClick={() => { selected(item) }}
                                            />
                                            {selecionado != '' ?
                                                (
                                                    <InfoWindowPopup openModal={openModal} closePop={closePopup} device={selecionado} />
                                                )
                                                : null
                                            }
                                        </div>
                                    )
                                } else if (item.status == 0) {
                                    return (
                                        <div key={index.toString()}>
                                            <Polyline
                                                path={item.path}
                                            />
                                            <Marker
                                                key={item.id}
                                                position={{ lat: item.actuallyPosition.lat, lng: item.actuallyPosition.lng }}
                                                icon={{
                                                    url: carNoSignal7d,
                                                    scaledSize: new window.google.maps.Size(30, 30),
                                                    origin: new window.google.maps.Point(0, 0),
                                                    anchor: new window.google.maps.Point(15, 15),
                                                }}
                                                onClick={() => { selected(item) }}
                                            />

                                            {selecionado != '' ?
                                                (
                                                    <InfoWindowPopup openModal={openModal} closePop={closePopup} device={selecionado} />
                                                )
                                                : null
                                            }
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={index.toString()}>
                                            <Polyline
                                                path={item.path}
                                            />
                                            <Marker
                                                key={item.id}
                                                position={{ lat: item.actuallyPosition.lat, lng: item.actuallyPosition.lng }}
                                                icon={{
                                                    url: carNoSignal3d,
                                                    scaledSize: new window.google.maps.Size(30, 30),
                                                    origin: new window.google.maps.Point(0, 0),
                                                    anchor: new window.google.maps.Point(15, 15),
                                                }}
                                                onClick={() => { selected(item) }}
                                            />

                                            {selecionado != '' ?
                                                (
                                                    <InfoWindowPopup openModal={openModal} closePop={closePopup} device={selecionado} />
                                                )
                                                : null
                                            }
                                        </div>
                                    )
                                }
                            })}
                        </GoogleMap>
                    </CCardBody>
                </CCard>
            </>
        )
    } else {
        return (
            <>
                <h4> <Spinner animation="grow" variant="info" />  </h4>
            </>
        )
    }


}

export default  Tracking;
