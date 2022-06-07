import React, { useEffect } from 'react'
import {Source, Layer } from 'react-map-gl';

const Route = (props) =>{

    useEffect(()=>{
        console.log('Props', props)
    },[])

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

    return (
        <> 
            <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...layerStyle} />
            </Source>
        </>

    )
}

export default  Route