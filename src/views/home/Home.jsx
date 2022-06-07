import React from 'react'
import logoOonSeguros from '../../assets/images/oon-seguros-logo.svg'

import './home.css'

const Home = () => {
    return (
        <div className='container-home min-vh-100'>
            <label className='font-home-titulo'>OON Seguros</label>
            <hr />
            <div className='d-flex justify-content-center'>
                <img
                    src={logoOonSeguros}
                    alt="logo-oon-seguros"
                    width={500}
                />
            </div>
        </div>
    )
}

export default  Home;
