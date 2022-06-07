import React from 'react';
import { CRow, CCol } from '@coreui/react';

const OcorrenciaInfos = (props) => {
    return (
        <div className='container-occurrence-data'>
            <label className='title-container-card'> Dados da ocorrência</label>
            <div className='container-content-card'>
                <CRow className='containters-ocorrencia' >
                    <CCol>
                        <label className='conteudo-label-title'>Evento</label>
                        <br />
                        <label className='conteudo-label-info'>Colisão</label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Dia da ocorrência</label>
                        <br />
                        <label className='conteudo-label-info'>Quinta-feira</label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Condutor</label>
                        <br />
                        <label className='conteudo-label-info'>Fernanda Lopes</label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'> Parentesco do condutor </label>
                        <br />
                        <label className='conteudo-label-info'> - </label>
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Proprietário do veículo?</label>
                        <br />
                        <label className='conteudo-label-info'>Sim</label>

                    </CCol>
                </CRow>

                <hr />

                <CRow className='containters-ocorrencia' >
                    <CCol xs={4}>
                        <label className='conteudo-label-title'> Endereço do local </label>
                        <br />
                        <label className='conteudo-label-info'> Av. Hypolito Guerra, 897 - Belo Horizonte - MG </label>
                        <br />
                    </CCol>
                    <CCol >
                        <label className='conteudo-label-title'> Número do B.O. </label>
                        <br />
                        <label className='conteudo-label-info'> 57878201 </label>
                        <br />
                    </CCol>
                    <CCol >
                        <label className='conteudo-label-title'> Vítimas </label>
                        <br />
                        <label className='conteudo-label-info'> Não </label>
                        <br />
                    </CCol>

                    <CCol >
                        <label className='conteudo-label-title'> Terceiros </label>
                        <br />
                        <label className='conteudo-label-info'> Sim </label>
                        <br />
                    </CCol>

                    <CCol xs={3}>
                        <label className='conteudo-label-title'> Ações contra o segurado </label>
                        <br />
                        <label className='conteudo-label-info'> Não </label>
                        <br />
                    </CCol>
                </CRow>

                <hr />

                <CRow className='containters-ocorrencia'>
                    <CCol >
                        <label className='conteudo-label-title'> Constação de dados </label>
                        <br />
                        <label className='conteudo-label-info'> Não </label>
                        <br />
                    </CCol>

                    <CCol xs={5}>
                        <label className='conteudo-label-title'>A quem o segurado atribui a responsabilidade por este acidente?</label>
                        <br />
                        <label className='conteudo-label-info'> Sim </label>
                        <br />
                    </CCol>

                    <CCol >
                        <label className='conteudo-label-title'> Ressarcimento </label>
                        <br />
                        <label className='conteudo-label-info'> - </label>
                        <br />
                    </CCol>

                    <CCol className="text-end">
                        <label className='conteudo-label-title'> Orçamento </label>
                        <br />
                        <label className='conteudo-label-title'> Ocorrência envolvidas </label>
                        <br />
                    </CCol>
                </CRow>
                <hr />
                <CRow className='containters-ocorrencia'>
                    <CCol >
                        <label className='conteudo-label-title'> Descrição do ocorrido </label>
                        <br />
                        <label className='conteudo-label-info'> No local envolveram-se em acidente de trânsido o veículo Lada Vest Sport ASR 7B78 que era conduzido pela senhorita Fernanda Lopes, quando ela perdeu o controle do volante e bateu ao veículo Volkswagen Gol WET 2356 que era conduzido pelo senhor Joao Carlos Barroso </label>
                        <br />
                    </CCol>
                </CRow>
            </div>
        </div >
    )
}

export default  OcorrenciaInfos;
