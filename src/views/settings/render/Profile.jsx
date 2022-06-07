import React, { useState } from 'react';
import { CForm, CCol, CAvatar, } from '@coreui/react'

import avatar4 from 'src/assets/images/avatars/4.jpg'

const useType = "admin"
const InfoProfile = () => {
    // Pegar o token do usuario e baixar suas informacoes 
    const [dados, setDados] = useState(
        {
            nome: 'Gustavo',
            sobrenome: 'Alcantara',
            cargo: 'Admin',
            email: 'gustavo.alcantara@oonpayperuse.com.br',
            senha: '123456',
            pais: 'Brasil',
            idioma: 'Portugues',
        }
    )

    return (
        <>
            <label className='container-profile-title'>Perfil</label>
            <CForm className="row g-3">
                <CCol md={7} className='d-flex my-4'>
                    <div className='container-profile-sub-title '>
                        <CAvatar
                            size="xl"
                            style={
                                { width: "3em" }
                            }
                            src={avatar4}
                        />
                    </div>
                    <div className='ms-4'>
                        <label className='container-profile-sub-title'> Nome</label>
                        <br />
                        <label className='container-profile-text'> {dados.nome} {dados.sobrenome} </label>
                    </div>
                </CCol>
                <CCol className=' my-4'>
                    <label className='container-profile-sub-title'> Cargo </label>
                    <br />
                    <label className='container-profile-text'> Administrador Ti </label>
                </CCol>
                <hr />
                <label className='container-profile-title'> Conta </label>
                <CCol xs={7}>
                    <label className='container-profile-sub-title'> E-mail </label>
                    <br />
                    <label className='container-profile-text'> gustavo@oonpayperuse.com.br </label>
                </CCol>
                <CCol xs={5}>
                    <label className='container-profile-sub-title'> Telefone </label>
                    <br />
                    <label className='container-profile-text'> 35 9 99909-2312 </label>
                </CCol>
                <CCol xs={7}>
                    <label className='container-profile-sub-title'> Cidade </label>
                    <br />
                    <label className='container-profile-text'> Belo Horizonte MG </label>
                </CCol>
                <CCol xs={5}>
                    <label className='container-profile-sub-title'> Endereço </label>
                    <br />
                    <label className='container-profile-text'> Av Professor Mario Werneck - 730 </label>
                </CCol>
                <br />
                <CCol xs={7}>
                    <label className='container-profile-sub-title'> País </label>
                    <br />
                    <label className='container-profile-text'> Brasil SA </label>
                </CCol>
                <CCol xs={5}>
                    <label className='container-profile-sub-title'> Idioma </label>
                    <br />
                    <label className='container-profile-text'> Português SA </label>
                </CCol>
            </CForm>
            <br />
        </>
    )
}

export default  InfoProfile;
