import React from 'react';
import { CRow, CCol } from '@coreui/react';

const WorkshopData = () => {
    return (
        <div className='container-occurrence-data'>
            <label className='title-container-card'> Dados da oficina</label>
            <div className='container-content-card'>
                <CRow className='containters-ocorrencia' >
                    <CCol xs={5}>
                        <label className='conteudo-label-title'> Data de agendamento da vistoria </label>
                        <br />
                        <label className='conteudo-label-info'>29/03/2022</label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'> Oficina </label>
                        <br />
                        <label className='conteudo-label-info'> Oficina Mecânica Tomazina </label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'> Veículo na oficina ? </label>
                        <br />
                        <label className='conteudo-label-info'> Sim </label>
                    </CCol>
                </CRow>
                <hr />
                <CRow className='containters-ocorrencia' >
                    <CCol xs={5}>
                        <label className='conteudo-label-title'> Contato </label>
                        <br />
                        <label className='conteudo-label-info'> - </label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'> Telefone </label>
                        <br />
                        <label className='conteudo-label-info'>032 99088909ß</label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'> Telefone 2</label>
                        <br />
                        <label className='conteudo-label-info'>031 998076699</label>
                        <br />
                    </CCol>
                </CRow>
                <hr />
                <CRow className='containters-ocorrencia' >
                    <CCol xs={5}>
                        <label className='conteudo-label-title'> Endereço </label>
                        <br />
                        <label className='conteudo-label-info'> Rua Tomazina, 166 - Belo Horizonte -MG </label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'> CEP </label>
                        <br />
                        <label className='conteudo-label-info'> 31259-478 </label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'> E-mail </label>
                        <br />
                        <label className='conteudo-label-info'> oficina.tomazina@gmail.com </label>
                    </CCol>
                </CRow>
            </div>
        </div>
    )
}

export default  WorkshopData;
