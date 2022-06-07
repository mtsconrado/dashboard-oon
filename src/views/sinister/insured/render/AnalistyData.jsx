import React from 'react';
import { CRow, CCol } from '@coreui/react';

const AnalistyData = (props) => {
    return (
        <div className='container-occurrence-data'>
            <label className='title-container-card'>Dados do analista</label>
            <div className='container-content-card'>
                <CRow className='containters-ocorrencia'>
                    <CCol>
                        <label className='conteudo-label-title'> Nome do analista </label>
                        <br />
                        <label className='conteudo-label-info'> Lucas de Castro </label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'> Telefone </label>
                        <br />
                        <label className='conteudo-label-info'>(031) 98783131</label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Perito</label>
                        <br />
                        <label className='conteudo-label-info'>Aloísio Guedes</label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'> Supervisor </label>
                        <br />
                        <label className='conteudo-label-info'> Carla Fernandes </label>
                    </CCol>
                </CRow>
                <hr />
                <CRow className='containters-ocorrencia' >
                    <CCol >
                        <label className='conteudo-label-title'>Regulador responsável</label>
                        <br />
                        <label className='conteudo-label-info'>Aloísio Fernandes</label>
                        <br />
                    </CCol>
                    <CCol >
                        <label className='conteudo-label-title'>Sindicancia</label>
                        <br />
                        <label className='conteudo-label-info'>Ababel</label>
                        <br />
                    </CCol>
                    <CCol xs={6} >
                        <label className='conteudo-label-title'>Supervisor</label>
                        <br />
                        <label className='conteudo-label-info'>Marcelo Vieira</label>
                        <br />
                    </CCol>
                </CRow>
            </div>
        </div>
    )
}

export default  AnalistyData;
