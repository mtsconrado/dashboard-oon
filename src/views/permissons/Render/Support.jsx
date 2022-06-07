import React, { Component } from 'react'
import { CContainer, CButton, CCol, CFormCheck } from '@coreui/react'
import './../permission.css' 

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
    
    function salvarInfos (){
        props.save('SALVAR ISSSSOOOOOOOO')
    }

    return (
        <>
            <div className='container-permissoes'>
                <div className='container-left-componentes'>
                    <label className='font-titulo-permission'>Acesso aos modulos</label>
                    
                    <CFormCheck className='container-checkForm' id="painel" label="Dispositivos" defaultChecked={ativo}/>
                    
                    <CFormCheck className='container-checkForm' id="painel" label="Rastreamento" defaultChecked={ativo}/>
                   
                    <CFormCheck className='container-checkForm' id="painel" label="Financeiro" defaultChecked={desativo}/>
                    
                    <CFormCheck className='container-checkForm' id="painel" label="Painel" defaultChecked={ativo}/>
                   
                    <CFormCheck className='container-checkForm' id="painel" label="Sinistro" defaultChecked={desativo}/>
                  
                    <CFormCheck className='container-checkForm' id="painel" label="Assistência" defaultChecked={desativo}/>
                
                    <CFormCheck className='container-checkForm' id="painel" label="Risco" defaultChecked={desativo}/>
                
                    <CFormCheck className='container-checkForm' id="painel" label="Funcionários" defaultChecked={desativo}/>
                
                    <CFormCheck className='container-checkForm' id="painel" label="Planos" defaultChecked={desativo}/>
                
                    <CFormCheck className='container-checkForm' id="painel" label="Coberturas" defaultChecked={desativo}/>
                
                    <CFormCheck className='container-checkForm' id="painel" label="Chamados" defaultChecked={desativo}/>
        
                    <CFormCheck className='container-checkForm' id="painel" label="Configurações" defaultChecked={desativo} />
                </div>

                <div className='container-mid-componentes'>
                    <label className='font-titulo-permission'>Acesso as funções </label>
                    <br />
                    <label className='font-subTitulo-permission'> Home</label>
                    <CFormCheck id="planos" label="Criar nova notícia" defaultChecked={ativo}/>

                    <label className='font-subTitulo-permission'> veículo </label>
                    <CFormCheck id="planos" label="Editar dados do cliente" defaultChecked={desativo} />
                    <CFormCheck id="planos" label="Alterar status do usuário" defaultChecked={desativo} />

                    <label className='font-subTitulo-permission'> Rastreamento </label>
                    <CFormCheck id="planos" label="Obter relátorios" defaultChecked={ativo} />
                    <CFormCheck id="planos" label="Mostrar quilometragem" defaultChecked={desativo} />

                    <label className='font-subTitulo-permission'> Financeiro </label>
                    <CFormCheck id="planos" label="Obter relátorios" defaultChecked={ativo} />
                    <CFormCheck id="planos" label="Editar gráficos" defaultChecked={desativo} />
                    
                    <label className='font-subTitulo-permission'> Painel</label>
                    <CFormCheck id="planos" label="Editar gráfico" defaultChecked={ativo}/>
                    <CFormCheck id="planos" label="Gerar relátorio" defaultChecked={ativo}/>

                    <label className='font-subTitulo-permission'> Sinistro </label>
                    <CFormCheck id="planos" label="Salvar PDF" defaultChecked={desativo} />
                    <CFormCheck id="planos" label="Enviar por e-mail" defaultChecked={desativo} />
                    <CFormCheck id="planos" label="Relatos" defaultChecked={desativo} />
                    
                    <label className='font-subTitulo-permission'> Empregados </label>
                    <CFormCheck id="planos" label="Adicionar empregado" defaultChecked={ativo} />
                    <CFormCheck id="planos" label="Editar empregado" defaultChecked={ativo} />
                    <CFormCheck id="planos" label="Alterar permissões" defaultChecked={ativo} />
                </div>

                <div className='container-right-componentes'>
                    <label className='font-subTitulo-permission'> Assistência </label>
                    <CFormCheck id="planos" label="Criar novo chamado" defaultChecked={ativo} />
                    <CFormCheck id="planos" label="Menu configurar prestadores" defaultChecked={desativo} />
                    <CFormCheck id="planos" label="Editar prestador" defaultChecked={desativo} />
                    <CFormCheck id="planos" label="Excluir prestador" defaultChecked={desativo} />
                    <CFormCheck id="planos" label="Inserir novo prestador" defaultChecked={desativo} />
                    <CFormCheck id="planos" label="Menu tipos de serviçoes" defaultChecked={desativo} />
                    <CFormCheck id="planos" label="Excluir serviço" defaultChecked={desativo} />
                    <CFormCheck id="planos" label="Editar serviço" defaultChecked={desativo} />

                    <label className='font-subTitulo-permission'> Risco </label>
                    <CFormCheck id="planos" label="Atualizar valores" defaultChecked={ativo} />

                    <label className='font-subTitulo-permission'> Planos </label>
                    <CFormCheck id="planos" label="Criar plano" defaultChecked={ativo} />
                    <CFormCheck id="planos" label="Editar plano" defaultChecked={ativo} />

                    <label className='font-subTitulo-permission'> Coberturas </label>
                    <CFormCheck id="planos" label="Alterar status" defaultChecked={ativo} />
                    <CFormCheck id="planos" label="Adicionar nova cobertura" defaultChecked={ativo} />
                    <CFormCheck id="planos" label="Adicionar nova cobertura" defaultChecked={ativo} />

                    <label className='font-subTitulo-permission'> Risco </label>
                    <CFormCheck id="planos" label="Editar termos de privacidade" defaultChecked={ativo} />
                </div>
            </div>
            <br />
            <div className='container-button-save-permissino'>
                <CButton className="container-button-salvar" onClick = {salvarInfos}  >
                    Salvar Alterações
                </CButton>
            </div>
          
        </>
    )   
}


export default  Support