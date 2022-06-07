import React , {useState} from 'react'
import {
    CForm, 
    CCol,
    CButton ,
    CFormLabel,
    CRow,
    CFormSelect,
    CFormCheck,
    CAvatar,
    CFormInput,
  } from '@coreui/react'

  import CIcon from '@coreui/icons-react'
  import {cilMagnifyingGlass } from '@coreui/icons'


const Help = () =>{

    const [pesquisa, setPesquisa] = useState('')
    const pegandoHelp = (e) =>{
        console.log('help vem ', e.target.value)
        setPesquisa(e.target.value)
    }
    return (
        <> 
            <br />
            <h4>Ajuda</h4>
            <br />
            <CRow>
                <CCol xs={2}> </CCol>

                <CCol xs={8}> 
                    <h2 className='container-help-search' >Como podemos ajudar?</h2>
                    <CFormInput type="search" onChange={pegandoHelp} className="me-2" placeholder="Procurar" />
                    {/* <CButton type="submit" color='secondary' className='buttonCss' >
                        <CIcon icon={cilMagnifyingGlass}  size="md" /> 
                    </CButton> */}
                </CCol>

                <CCol xs={2}> </CCol>
            </CRow>
            <CRow>
               {pesquisa.length >= 3 ?(
                   <h2>Campo pesquisa {pesquisa}</h2>
               ) : (
                   <div> 
                       <CCol xs={10}> 
                            <br />
                            <br />
                            <h4>Dúvidas frequentes</h4>
                            <CButton type="submit" color='dark' variant='ghost'> 
                                Gerenciar as configurações de segurança dos usuários
                            </CButton>
                            <br />
                            <CButton type="submit" color='dark' variant='ghost'> 
                                Mudar ou redefinir a senha de acesso
                            </CButton>
                            <br />
                            <CButton type="submit" color='dark' variant='ghost'> 
                                Salvar ou baixar relatórios dos meses anteriores
                            </CButton>
                            <br />
                            <CButton type="submit" color='dark' variant='ghost'> 
                                Salvar ou baixar relatórios dos meses anteriores
                            </CButton>
                            <br />
                            <CButton type="submit" color='dark' variant='ghost'> 
                                Enviar mensagem para outro funcionário
                            </CButton>
                            <br />
                            <CButton type="submit" color='dark' variant='ghost'> 
                                Entrar em contato com o usuário
                            </CButton>
                            <br />
                            <CButton type="submit" color='dark' variant='ghost'> 
                                Ver mais
                            </CButton>

                            <br />
                            <br />
                            <h4>Primeiros passos</h4>
                            <CButton type="submit" color='dark' variant='ghost'> 
                                Como utilizar a plataforma
                            </CButton>
                            <br />
                            <CButton type="submit" color='dark' variant='ghost'> 
                                Fazendo login
                            </CButton>
                            <br />
                            <br />
                            <h4>Conectar</h4>
                            <CButton type="submit" color='dark' variant='ghost'> 
                                Como interagir com outras pessoas
                            </CButton>
                            <br />
                        </CCol>

                        <CCol xs={2}> </CCol>
                   </div>
                    
                )}
            </CRow>

        </>
    )
}

export default  Help