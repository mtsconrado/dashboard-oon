import React, {useState, useEffect} from 'react'
import {  GoogleMap, InfoWindow, Marker,  useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';

import pontoFinal from '../../../../assets/images/blackPoint.png'
import ponto from '../../../../assets/images/greenPoint.png'

import tokenMap from './../../../../configMap'

const FollowMap = (props) =>{
    const containerStyle = {
        width: '100%' ,
        height: '80vh'
      };
      
      const center = {
        lat: -19.9190991,
        lng: -43.9385985
      };
      const options = {
        // styles: mapSyles,
        disableDefaultUI: false,
        zoomControl:false,
        fullscreenControl: false,
      }
      const [map, setMap] = React.useState(null)
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
      const libraries = ["places"];

      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: tokenMap,  // trocar o token aqui, TOKEN PESSOAL 
        libraries,
      })

      const [direcoes, setDirecoes] = useState()
    
      // opcoes do route 
      const options2 ={
        suppressInfoWindows: false,
        suppressMarkers: false
      }
     function CarregaRotaPrestador () {
        const directionsService = new google.maps.DirectionsService();
        let request = {
       
          origin: {lat: props.history.addressPrestador.lat, lng: props.history.addressPrestador.lng},
          destination: {lat:props.history.adressDestino.lat, lng:props.history.adressDestino.lng},
          waypoints: [{location: {lat:props.history.adressOcorrency.lat, lng:props.history.adressOcorrency.lng}, stopover:true}], //an array of waypoints{lat:props.cliente.adressOcorrency.lat, lng:props.cliente.adressOcorrency.lng}
          optimizeWaypoints: true,
          travelMode: "DRIVING",   // dirigindo carro  
         
        };
        directionsService.route(request, function(result, status) {
          if (status == "OK") {
            setDirecoes()
            setDirecoes(result)
          }
        });
     }

      useEffect(()=>{
        if(isLoaded){
          if(props.history.adressOcorrency.lat != null ){
            CarregaRotaPrestador()
          }
        }
        
      }, [isLoaded])

    return isLoaded ? (

        <>  
         
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onUnmount={onUnmount}
              options={options} // muda a estilizacao do mapa
            >
               { props == null ? 
                  null
                :

                (
                  // Caso vem algo no props mudar aqui 
                  <>
                    {direcoes ?
                      ( 

                        <>

                          <DirectionsRenderer
                            directions={direcoes}
                            options={options2}
                            
                            
                          />

                          <Marker
                              key={props.posicao}
                              position={{lat: props.history.addressPrestador.lat, lng: props.history.addressPrestador.lng} }
                              icon={{
                                  url:ponto,
                                  scaledSize: new window.google.maps.Size(25,25),
                                  origin: new window.google.maps.Point(0,0),
                                  anchor: new window.google.maps.Point(15,15),
                              }} 
                          />

                            <Marker
                              key={props.posicao}
                              position={{lat:props.history.adressOcorrency.lat, lng:props.history.adressOcorrency.lng} }
                              icon={{
                                  url:pontoFinal,
                                  scaledSize: new window.google.maps.Size(25,25),
                                  origin: new window.google.maps.Point(0,0),
                                  anchor: new window.google.maps.Point(15,15),
                              }} 
                            />

                            <Marker
                              key={props.posicao}
                              position={{lat:props.history.adressDestino.lat, lng:props.history.adressDestino.lng} }
                              icon={{
                                  url:pontoFinal,
                                  scaledSize: new window.google.maps.Size(25,25),
                                  origin: new window.google.maps.Point(0,0),
                                  anchor: new window.google.maps.Point(15,15),
                              }} 
                            />

                        </>

                        
                      )
                      : null
                    }
                   

                  </>
                )

                }
             
            </GoogleMap>
        </>
    )
    : null
}


export default  FollowMap
