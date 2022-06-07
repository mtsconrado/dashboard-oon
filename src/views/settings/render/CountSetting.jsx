import React, {useState} from 'react'

import {
    CForm, 
    CCol,
    CButton ,
    CFormLabel,
    CFormInput,
    CFormSelect,
    CFormCheck,
    CAvatar,
  } from '@coreui/react'

  import avatar4 from 'src/assets/images/avatars/4.jpg'

  const useType="admin"
const ContaConfiguracoes = () =>{
    
    
    // Pegar o token do usuario e baixar suas informacoes 
    const [dados, setDados] = useState(
        {
            nome:'Gustavo',
            sobrenome:'Alcantara',
            cargo:'Admin',
            email:'gustavo.alcantara@oonpayperuse.com.br',
            senha: '123456',
            pais:'Brasil',
            idioma:'Portugues',
        }
    )

    return (
        <> 
            <h4> Perfil </h4>
            <CForm className="row g-3">
                <CCol md={6}>
                     <br />
                    <h6>Foto de Perfil</h6>
                    <CAvatar size="xl" src={avatar4} />
                </CCol>
                <CCol md={6}>
                     <br />
                     <br />
                     <br />
                    <CButton  color="light" type="submit">Alterar Foto</CButton>
                </CCol>
                <CCol md={6}>
                    <CFormLabel> Nome </CFormLabel>
                    <CFormInput type="text" value={dados.nome} id="inputEmail4"/>
                </CCol>
                <CCol md={6}>
                    <CFormLabel> Sobrenome</CFormLabel>
                    <CFormInput type="text" value={dados.sobrenome} id="inputPassword4"/>
                </CCol>
                <CCol xs={12}>
                    <CFormLabel> Cargo </CFormLabel>
                    <CFormSelect 
                        aria-label="Default select example"
                        options={[
                            'Administrador',
                            { label: 'Suporte', value: '1' },
                            { label: 'Gerente', value: '2' },
                            { label: 'Administrador', value: '3'}
                        ]}
                    />
                </CCol>
                <h4>Conta</h4>
                <CCol xs={12}>
                    <CFormLabel >E-mail</CFormLabel>
                    <CFormInput  tyoe='email'/>
                </CCol>
                <CCol md={10}>
                    <CFormLabel> Senha </CFormLabel>
                    <CFormInput type='password'/>
                </CCol>
               
                <CCol md={2} >
                    <br />
                    <CButton className='container-help-search' color="light" type="submit">Alterar</CButton>
                </CCol>
                <CCol xs={12}>
                    <CFormLabel >Pais</CFormLabel>
                    <CFormSelect 
                        aria-label="Brasil"
                        options={[
                            'Brasil',
                            { label: 'Colombia', value: '1' },
                            { label: 'EUA', value: '2' },
                            { label: 'Argentina', value: '3' }
                        ]}
                    />
                </CCol>
                <CCol xs={12}>
                    <CFormLabel >Idioma</CFormLabel>
                    <CFormSelect 
                        aria-label="Brasil"
                        options={[
                            'Português',
                            { label: 'Inglês', value: '1' },
                            { label: 'Francês', value: '2' },
                            { label: 'Espanhol', value: '3' }
                        ]}
                    />
                </CCol>
                <h4>Alterações na conta </h4>
                <CCol md={10}>
                    <h6>Desativar conta</h6>
                    <label> Deixar a conta offline por um tempo determinado </label>
                </CCol>
               
                <CCol md={2} >
                    <CButton  color="light" >Desativar conta</CButton>
                </CCol>
                <br />
                <CCol xs={10}>
                    <h6>Deletar conta</h6>
                    <label> Excluir dados da conta </label>
                </CCol>
                <CCol md={2} >
                    <CButton color="light" >Deletar conta</CButton>
                </CCol>
                <hr />
                <CCol xs={10}>
                    
                </CCol>

                <CCol md={2} >
                    <CButton color="light"  className='btn-salvar-setting'> Redefinir </CButton>
                    <CButton className='btn-salvar-setting' color="light" > Salvar </CButton>
                </CCol>
            </CForm>
        </>
    )
}

export default  ContaConfiguracoes