import React from 'react'
import './css/mapOff.css'

import { CImage} from '@coreui/react'

import img from './../../../assets/images/maps.png'
const MapOff = () =>{


    return (
        <>
            <div className='container-body-map'>
                {/* <h3>Mapass</h3> */}
                <CImage rounded thumbnail src={img} width={200} height={200} />
            </div>
        </>
    )
}

export default  MapOff