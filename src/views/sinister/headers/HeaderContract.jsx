import React, { useEffect } from 'react'
import { CRow, CCol } from '@coreui/react'

import '../css/headerContract.css';

const HeaderContract = (props) => {
    useEffect(() => {
        console.log('props no header', props.protocolo);
    }, [])

    return (
        <div className='container-header-contract'>
            <CRow>
                <CCol xs={2}>
                    <label className='title-contract'> Nº do Contrato</label>
                    <h1>{props.protocolo} 332</h1>
                </CCol>
                <CCol xs={1}>
                    <label className='title-contract'> Item </label>
                    <br />
                    <label className='title-infos'> 2 </label>
                    <br />
                </CCol>
                <CCol xs={3}>
                    <label className='title-contract'> Filial </label>
                    <br />
                    <label className='title-infos'> Av. Barão Homen de Melo - BH</label>
                    <br />
                </CCol>
                <CCol>
                    <label className='title-contract'> Produto </label>
                    <br />
                    <label className='title-infos'> Plano Gold</label>
                    <br />
                </CCol>
                <CCol>
                    <label className='title-contract'> Vigência </label>
                    <br />
                    <label className='title-infos'> 21/03/2022 a </label>
                    <br />
                    <label className='title-infos'> 23/03/2022</label>
                    <br />
                </CCol>
                <CCol>
                    <div >
                        <label className='title-contract'> Veículo </label>
                        <br />
                        <label className='title-infos'> Lada Vest Sport </label>
                    </div>
                </CCol>
            </CRow>
        </div>
    )
}

export default  HeaderContract;
