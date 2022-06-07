import React, { useEffect } from 'react';
import { CRow, CCol, CProgress, CProgressBar } from '@coreui/react';

import BtnPDF from './btn/Btn-PDF';
import SentEmail from './btn/Btn-SentEmail';
import BtnRelatos from './btn/Btn-Relatos';

import "../css/headerOccurrence.css"

const HeaderOccurrence = (props) => {
    const { protocolo, status } = props;
console.log(status);
    useEffect(() => {
        console.log('props no header', protocolo);
    }, []);

    return (
        <>
            <CRow>
                <CCol>
                    <label className='text-title-header'>Nº da Ocorrência</label>
                    <h2>123456</h2>
                </CCol>

                <CCol>
                    <label className='text-title-header'> Portal de origem</label>
                    <br />
                    <label className='text-content-header'> PET</label>
                    <br />
                    <label className='text-title-header'>Nome do analista</label>
                    <br />
                    <label className='text-content-header'> Lucas de Castro</label>
                    <br />
                </CCol>

                <CCol>
                    <label className='text-title-header'>Nome do atendente</label>
                    <br />
                    <label className='text-content-header'>Gustavo Antonio Candido de Alcantara</label>
                    <br />
                    <label className='text-title-header'> Número do informe </label>
                    <br />
                    <label className='text-content-header'>58686</label>
                    <br />
                </CCol>
                <CCol>
                    <label className='text-title-header'>Data/Hora do Aviso</label>
                    <br />
                    <label className='text-content-header'>23/12/2021 17:23:02</label>
                    <br />
                    <label className='text-title-header'>Data/Hora da Ocorrência</label>
                    <br />
                    <label className='text-content-header'>23/12/2021 17:23:02</label>
                    <br />
                </CCol>
                <CCol>
                    <div className='container-btns'>
                        <BtnPDF />
                        <br />
                        <SentEmail />
                        <br />
                        <BtnRelatos />
                        <br />
                    </div>
                </CCol>
            </CRow>
            <CProgress className="my-3">
                <CProgressBar color='warning' value={50} />
            </CProgress>
        </>
    )
}

export default  HeaderOccurrence;
