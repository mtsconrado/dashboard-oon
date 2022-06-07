import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CInputGroup, CRow } from '@coreui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import urlDomain from 'src/config';

import logoOon from '../../../assets/images/oon-seguros-logo.svg';
import NewAccount from './NewAccount';


function MainLogin({ userLogin, user, userPassword, password, setForgotMyPass, login }) {
    const [newAccountBtn, setNewAccountBtn] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    const lembra = ({ target }) => {
        // console.log(
        // 	target.checked, 'aa'
        // );

        // if (target.checked) {
        // localStorage.setItem('user', JSON.stringify({ user, password, checked: target.checked }))
        // 		setChecked(true)
        // 	} else {
        // 		localStorage.removeItem('user')
        // 		setChecked(false)
        // 	}
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center fundo-body">
            <CRow>
                <CCol className='login-esq'>
                    <p className='title-login-esq'>Bem vindo de volta</p>
                    <p className='subtitle-login-esq'>Sentimos sua falta!</p>
                </CCol>
                {
                    newAccountBtn ? (
                        <CCol className='login-dir'>
                            <img className="img-oon" src={logoOon} alt="logo oon seguros" />
                            <p className="subtitle-login-dir">Faça login na sua conta</p>
                            <div className='inputs-container'>
                                <CForm>
                                    <CFormLabel
                                        htmlFor="email"
                                        className="mb-1 email-password-form"
                                    >
                                        E-mail
                                    </CFormLabel>
                                    <CInputGroup
                                        className="mb-3"
                                    >
                                        <CFormInput
                                            className='radius-border'
                                            id="email"
                                            type="email"
                                            onChange={userLogin}
                                            value={user}
                                            placeholder="Digite seu e-mail"
                                        />
                                    </CInputGroup>
                                    <CFormLabel
                                        htmlFor="senha"
                                        className="mb-1 email-password-form"
                                    >
                                        Senha
                                    </CFormLabel>
                                    <CInputGroup
                                        className="mb-3"
                                    >
                                        <div className="input-icons d-flex flex-row-reverse w-100">
                                            <CFormInput
                                                className='radius-border'
                                                id="senha"
                                                type={!showPassword ? 'password' : 'text'}
                                                onChange={userPassword}
                                                value={password}
                                                placeholder="Digite sua senha"
                                                aria-describedby="eye-password"
                                            />
                                            <i
                                                id="eye-password"
                                                className='icon-login i-absolute'
                                                onClick={() => !showPassword ? setShowPassword(true) : setShowPassword(false)}
                                            >
                                                {!showPassword ? <FaEye /> : <FaEyeSlash />}
                                            </i>
                                        </div>
                                    </CInputGroup>
                                    <CFormCheck
                                        className="email-password-form"
                                        id="Lembrar de min"
                                        onChange={lembra}
                                        label="Lembrar de mim"
                                    // checked={checked}
                                    />
                                </CForm>
                                <br />
                                <CButton
                                    onClick={() => login()}
                                    className="btns-login"
                                    style={{
                                        backgroundColor: '#216CFF',
                                        borderColor: '#216CFF'
                                    }}
                                >
                                    Entrar na minha conta
                                </CButton>
                                <CButton
                                    color='link'
                                    style={{ color: '#14142B' }}
                                    variant='ghost'
                                    onClick={() => setForgotMyPass(false)}
                                    className="btn-forgot-password"
                                >
                                    Esqueci minha senha
                                </CButton>
                                <p className='pt-5 text-center new-account-text'>Não tem uma conta ainda? Crie já!</p>
                                <CButton
                                    onClick={() => setNewAccountBtn(false)}
                                    style={{
                                        color: '#216CFF',
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #216CFF',
                                        borderRadius: '12px',
                                        width: '100%'
                                    }}
                                >
                                    Criar uma nova conta
                                </CButton>
                            </div>
                        </CCol>) : (
                        <CCol className='login-dir'>
                            <NewAccount
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                                setNewAccountBtn={setNewAccountBtn}
                            />
                        </CCol>
                    )
                }
            </CRow>
        </div>
    )
}

export default  MainLogin