import React, { Component } from 'react'
import { CContainer, CButton, CCol, CFormCheck } from '@coreui/react'
import './permission.css' 

const Support = (props) => {

    // telas
    const painel = ''
    const planos = ''
    const servicos = '3'

    // BTNS
    const btnEditUser = ''
    const btnEditDev = ''

    const ativo = false
    const desativo = false
    
    let array = []
    function permissoes (e){

       array.push(e.target.value)
       props.choices(array)
    }

    return (
        <>
            <label className='newUserTil'>Permissões</label>
            <br />
            <br />
            <div className='container-permissoes'>
                <div className='container-left-componentes'>
                    <label className='font-titulo-permission'>Telas</label>
                    
                    <CFormCheck className='container-checkForm' id="painel" onChange = {permissoes} value='dispositivos' label="Dispositivos" />
                    
                    <CFormCheck className='container-checkForm' id="painel" onChange = {permissoes} value='rastreamento'  label="Rastreamento" />
                   
                    <CFormCheck className='container-checkForm' id="painel" onChange = {permissoes} value='financeiro' label="Financeiro" />
                    
                    <CFormCheck className='container-checkForm' id="painel" onChange = {permissoes} value='painel' label="Painel" />
                   
                    <CFormCheck className='container-checkForm' id="painel"  onChange = {permissoes} value='sinistro' label="Sinistro" />
                  
                    <CFormCheck className='container-checkForm' id="painel" onChange = {permissoes} value='assistencia' label="Assistência" />
                
                    <CFormCheck className='container-checkForm' id="painel"  onChange = {permissoes} value='risco' label="Risco" />
                
                    <CFormCheck className='container-checkForm' id="painel" onChange = {permissoes} value='funcionarios' label="Funcionários" />
                
                    <CFormCheck className='container-checkForm' id="painel" onChange = {permissoes} value='planos' label="Planos" />
                
                    <CFormCheck className='container-checkForm' id="painel" onChange = {permissoes} value='coberturas' label="Coberturas" />
                
                    <CFormCheck className='container-checkForm' id="painel" onChange = {permissoes} value='chamados' label="Chamados" />
        
                    <CFormCheck className='container-checkForm' id="painel" onChange = {permissoes} value='configuracoes' label="Configurações"  />
                </div>

                <div className='container-mid-componentes'>
                    <label className='font-titulo-permission'> Funções </label>
                    <br />
                    <label className='font-subTitulo-permission'> Home</label>
                    <CFormCheck id="planos" label="Criar nova notícia" />

                    <label className='font-subTitulo-permission'> veículo </label>
                    <CFormCheck id="planos" label="Editar dados do cliente"  />
                    <CFormCheck id="planos" label="Alterar status do usuário"  />

                    <label className='font-subTitulo-permission'> Rastreamento </label>
                    <CFormCheck id="planos" label="Obter relátorios"  />
                    <CFormCheck id="planos" label="Mostrar quilometragem"  />

                    <label className='font-subTitulo-permission'> Financeiro </label>
                    <CFormCheck id="planos" label="Obter relátorios"  />
                    <CFormCheck id="planos" label="Editar gráficos" />
                    
                    <label className='font-subTitulo-permission'> Painel</label>
                    <CFormCheck id="planos" label="Editar gráfico" />
                    <CFormCheck id="planos" label="Gerar relátorio" />

                    <label className='font-subTitulo-permission'> Sinistro </label>
                    <CFormCheck id="planos" label="Salvar PDF"  />
                    <CFormCheck id="planos" label="Enviar por e-mail"  />
                    <CFormCheck id="planos" label="Relatos"  />
                    
                    <label className='font-subTitulo-permission'> Empregados </label>
                    <CFormCheck id="planos" label="Adicionar empregado"  />
                    <CFormCheck id="planos" label="Editar empregado"  />
                    <CFormCheck id="planos" label="Alterar permissões" />
                </div>

                <div className='container-right-componentes'>
                    <label className='font-subTitulo-permission'> Assistência </label>
                    <CFormCheck id="planos" label="Criar novo chamado"  />
                    <CFormCheck id="planos" label="Menu configurar prestadores"  />
                    <CFormCheck id="planos" label="Editar prestador"  />
                    <CFormCheck id="planos" label="Excluir prestador"  />
                    <CFormCheck id="planos" label="Inserir novo prestador"  />
                    <CFormCheck id="planos" label="Menu tipos de serviçoes"  />
                    <CFormCheck id="planos" label="Excluir serviço"  />
                    <CFormCheck id="planos" label="Editar serviço"  />

                    <label className='font-subTitulo-permission'> Risco </label>
                    <CFormCheck id="planos" label="Atualizar valores" />

                    <label className='font-subTitulo-permission'> Planos </label>
                    <CFormCheck id="planos" label="Criar plano"  />
                    <CFormCheck id="planos" label="Editar plano"  />

                    <label className='font-subTitulo-permission'> Coberturas </label>
                    <CFormCheck id="planos" label="Alterar status"  />
                    <CFormCheck id="planos" label="Adicionar nova cobertura"  />
                    <CFormCheck id="planos" label="Adicionar nova cobertura"  />

                    <label className='font-subTitulo-permission'> Risco </label>
                    <CFormCheck id="planos" label="Editar termos de privacidade"  />
                </div>
            </div>
            <br />
            {/* <div className='container-button-save-permissino'>
                <CButton className="container-button-salvar" onClick = {salvarInfos}  >
                    Salvar Alterações
                </CButton>
            </div> */}
          
        </>
    )   
}


export default  Support