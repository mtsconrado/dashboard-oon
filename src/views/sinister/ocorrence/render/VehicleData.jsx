import React from 'react';
import { CRow, CCol } from '@coreui/react';

const VehicleData = (props) => {
    return (
        <div className='container-occurrence-data'>
            <label className='title-container-card'>Dados do veículo</label>
            <div className='container-content-card'>
                <CRow className='containters-ocorrencia' >
                    <CCol>
                        <label className='conteudo-label-title'>Nº dispositivo OBS</label>
                        <br />
                        <label className='conteudo-label-info'> 43455323</label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Placa</label>
                        <br />
                        <label className='conteudo-label-info'>ASR - 4545</label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Marca</label>
                        <br />
                        <label className='conteudo-label-info'>Lada</label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Modelo</label>
                        <br />
                        <label className='conteudo-label-info'>Vest Sport</label>
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Tipo</label>
                        <br />
                        <label className='conteudo-label-info'>Particular</label>
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Fabricação</label>
                        <br />
                        <label className='conteudo-label-info'>2020</label>
                    </CCol>
                </CRow>
                <hr />
                <CRow className='containters-ocorrencia'>
                    <CCol >
                        <label className='conteudo-label-title'>Cor</label>
                        <br />
                        <label className='conteudo-label-info'>Cinza</label>
                        <br />
                    </CCol>
                    <CCol xs={4}>
                        <label className='conteudo-label-title'>Chassi</label>
                        <br />
                        <label className='conteudo-label-info'>6A7 6A5unC 32 gY4947</label>
                        <br />
                    </CCol>
                    <CCol >
                        <label className='conteudo-label-title'>Renavam</label>
                        <br />
                        <label className='conteudo-label-info'>57878201323223</label>
                        <br />
                    </CCol>
                    <CCol>
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Leiloeiro</label>
                        <br />
                        <label className='conteudo-label-info'> - </label>
                        <br />
                    </CCol>
                </CRow>
            </div>
        </div>
    )
}

export default  VehicleData;
