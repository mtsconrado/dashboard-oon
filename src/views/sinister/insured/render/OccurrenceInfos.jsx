import React from 'react'
import { CRow, CCol } from '@coreui/react'

const OccurrenceInfos = (props) => {
    return (
        <div className='container-occurrence-data'>
            <label className='title-container-card'>Dados do comunicante e segurado</label>
            <div className='container-content-card'>
                <label className='subtitle-tipo-data'>Dados do comunicante</label>
                <CRow className='containters-ocorrencia' >
                    <CCol>
                        <label className='conteudo-label-title'>Tipo de comunicante</label>
                        <br />
                        <label className='conteudo-label-info'>Segurado</label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Nome</label>
                        <br />
                        <label className='conteudo-label-info'>Fernanda Lopes</label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Vínculo</label>
                        <br />
                        <label className='conteudo-label-info'>-</label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Telefone</label>
                        <br />
                        <label className='conteudo-label-info'>(031) 95478-2014</label>
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>E-mail</label>
                        <br />
                        <label className='conteudo-label-info'>ferlopes@mail.com.br</label>

                    </CCol>
                </CRow>
                <hr />
                <label className='subtitle-tipo-data' > Dados do segurado </label>
                <CRow className='containters-ocorrencia' >
                    <CCol >
                        <label className='conteudo-label-title'> Nome do segurado </label>
                        <br />
                        <label className='conteudo-label-info'> Fernanda Lopes </label>
                        <br />
                    </CCol>
                    <CCol >
                        <label className='conteudo-label-title'> Telefone </label>
                        <br />
                        <label className='conteudo-label-info'> (031) 99890890</label>
                        <br />
                    </CCol>

                    <CCol >
                        <label className='conteudo-label-title'> E-mail </label>
                        <br />
                        <label className='conteudo-label-info'> ferlopes@gmail.com </label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Utilizou o reboque ?</label>
                        <br />
                        <label className='conteudo-label-info'> Sim </label>
                        <br />
                    </CCol>
                </CRow>
                <hr />
                <CRow className='containters-ocorrencia'>
                    <CCol xs={4} >
                        <label className='conteudo-label-title'> Endereço do cliente</label>
                        <br />
                        <label className='conteudo-label-info'> Rua Laurindo Ferreira, 789 - Belo Horizonte MG </label>
                        <br />
                    </CCol>
                    <CCol >
                        <label className='conteudo-label-title'> CEP </label>
                        <br />
                        <label className='conteudo-label-info'> 31587-985 </label>
                        <br />
                    </CCol>
                    <CCol >
                        <label className='conteudo-label-title'> Data de nascimento </label>
                        <br />
                        <label className='conteudo-label-info'> 17/03/1999 </label>
                        <br />
                    </CCol>
                    <CCol >
                        <label className='conteudo-label-title'> Reparos autorizados ?  </label>
                        <br />
                        <label className='conteudo-label-info' > Não </label>
                        <br />
                    </CCol>
                </CRow>
                <hr />
                <CRow className='containters-ocorrencia'>
                    <CCol xs={4} >
                        <label className='conteudo-label-title'>Segurado declara ser, ou ter relacionamento, com a pessoa politicamente exposta estrangeira</label>
                        <br />
                        <label className='conteudo-label-info'> Não </label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Conta</label>
                        <br />
                        <label className='conteudo-label-info'> - </label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Unidade</label>
                        <br />
                        <label className='conteudo-label-info'> - </label>
                        <br />
                    </CCol>
                    <CCol>
                        <label className='conteudo-label-title'>Cargo</label>
                        <br />
                        <label className='conteudo-label-info'> - </label>
                        <br />
                    </CCol>
                </CRow>
            </div>
        </div>
    )
}

export default  OccurrenceInfos;
