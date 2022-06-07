import React, { useState } from 'react'
import ReactMapGL, {Marker, FullscreenControl, MapContext, Source, Layer } from 'react-map-gl';


import './Map.css'
// Estilizacao do mapa usado
import MAP_STYLE from './map-V8.json';
import carEnable from '../../assets/images/car_enable.png';
import carDisable from '../../assets/images/car_disable.png'

//componentes
import Report from './render/Report.jsx'
import PopupRender from './render/Popup.jsx'
import RouteDraw from './render/RouteDraw'
// Bibliotecas e imagens
import { CImage, CButton } from '@coreui/react'
import { Modal } from 'react-bootstrap';
import CIcon from '@coreui/icons-react'
import {cilAlignCenter} from '@coreui/icons'

const mapBox = () =>{
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    function verifica(){
        const handleShow =  setShow(true);
        
    }
    const pos = [
        {   
            id:1,
            name:'Celta',
            lat: -19.9191912,
            lng: -43.9387852,
            status:0, 
            title: "Uluru (Ayers Rock)"
        },
        {   
            id:2,
            name:'Gol bola',
            lat: -19.8127 ,
            lng: -43.9512,
            status:1, 
            title: "Uluru (Ayers Rock)"
        },
        {   
            id:3,
            name:'pegeout 207',
            lat: -19.813,
            lng: -43.9238,
            status:1, 
            title: "Uluru (Ayers Rock)222"
        },
        {   
            id:4,
            name:'Camaro',
            lat: -19.8132,
            lng: -43.9238,
            status:1, 
            title: "Uluru (Ayers Rock)222"
        },
        {   
            id:5,
            name:'Mustang',
            lat: -19.964512,
            lng: -43.962461,
            status:0,  
            title: "Uluru (Ayers Rock)22"
        },
    ]
    const [showPopup, togglePopup] = React.useState(false);

    const [viewport, setViewport] = React.useState({
        latitude: -19.91912,
        longitude: -43.9387852,
        zoom: 10
      });
    const fullscreenControlStyle= {
    right: 10,
    top: 10
    };

         // Fazendo popup 
    const [dados, setDados] = useState(null)
    
    
    // fecha o popup
    const closePopup = () => {
        setDados(null)
    }
    // Escolheu um dispositivo, e abriu o popup 
    const SelectedHotspot = object => {
        setDados(object)
        
    };

    const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature', 
            geometry: 
                {
                    type: 'Point', 
                    coordinates:  [-19.9192, 43.93878]
                }
          }
        ]
      };

    const layerStyle = {
        id: 'point',
        type: 'circle',
        paint: {
          'circle-radius': 10,
          'circle-color': '#007cbf'
        }
      };
   const rotas = [[-19.91912, -43.9387852], [-19.91914, -43.9387854], [-19.91912, -43.9387852]]

    return (    
        <>  
        
            <MapContext.Provider>
                <ReactMapGL
                    {...viewport}
                    width="100%"
                    height="80vh"
                    className='mapBoxContainer'
                    mapStyle={MAP_STYLE}
                    mapboxApiAccessToken='pk.eyJ1IjoiZ3VzdGF2b2FsY3QiLCJhIjoiY2t4ZzZ3YzVpMmExaDMwb2N1eG9iaWkyeSJ9.NmvzyFhoDboy3y8f0uAtvg'
                    onViewportChange={(viewport) => setViewport(viewport)}
                >   
                    <FullscreenControl style={fullscreenControlStyle} />
                    
                    {
                        pos.map((item, index) =>{
                            // ativo
                            if(item.status == 1 ){
                                return(
                                    <div> 
                                        
                                        <Marker latitude={item.lat} longitude={item.lng} offsetLeft={-20} offsetTop={-10}>
                                            <CImage fluid onClick={ () =>{SelectedHotspot(item)}} src = {carEnable} width={30} height={30}  />
                                        </Marker>

                                        {dados !== null ? (
                                            <> 
                                                <PopupRender   parentCallback = {closePopup}   />
                                            </>
                                        )
                                            : null
                                        }
                                    </div>
                                    
                                )  
                            }else{
                                return(
                                    <> 
                                        <Marker latitude={item.lat} longitude={item.lng} offsetLeft={-20} offsetTop={-10}>
                                            <CImage onClick={ () =>{SelectedHotspot(item)}} fluid src = {carDisable} width={25} height={25}  />
                                        </Marker> 
                                        {dados !== null ? (
                                            <> 
                                                <PopupRender  parentCallback = {closePopup}   posicao={dados}   />
                                            </>
                                        )
                                            : null
                                        }                                      
                                        
                                    </>
                                    
                                )  
                            }
                        })
                    }

                   
                     <div>
                        <CButton className='button-css' onClick={verifica} color="light" >
                            <CIcon  icon={cilAlignCenter}   size="xl" />
                        </CButton>
                        <Modal 
                            show={show} 
                            onHide={handleClose}
                            size="xl"
                        >
                            <Modal.Header  closeButton>
                                <Modal.Title>Relatórios</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='container-body'>
                                <Report /> 
                            </Modal.Body>
                            <Modal.Footer>  
                                <CButton  onClick={handleClose}>
                                    Sair
                                </CButton>
                            
                            </Modal.Footer>
                        </Modal>
                    </div>
                </ReactMapGL>
               
            </MapContext.Provider> 
            
        </> 
    )
}

export default  mapBox 


