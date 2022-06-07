import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Route } from 'react-router-dom';
import Cookies from 'js-cookie';

// var CryptoJS = require("crypto-js");
import Criptacao from '../../security/cripto';
import UrlDomain from '../../config';
import RecoverPassword from './components/RecoverPassword';
import MainLogin from './components/MainLogin';
const DefaultLayout = React.lazy(() => import('../../layout/DefaultLayout'));

import './css/login.css';

const Login = () => {
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	const [flag, setFlag] = useState(false)   // AQUI A FLAG DEVE SER FALSE
	const [forgotMyPass, setForgotMyPass] = useState(true)

	// LEMBRAR DE MIN
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

	useEffect(() => {
		// const localStor = JSON.parse(localStorage.getItem('user'));
		// if(localStor){
		// 	setChecked(true)
		// 	login({
		// 		email: localStor.user,
		// 		password: localStor.password
		// 	})
		// 	setFlag(true)
		// }
	}, [])


	const userLogin = (e) => {
		setUser(e.target.value)
	}

	const userPassword = (e) => {
		setPassword(e.target.value)
	}

	const login = () => {
		const axiosConfig = {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				"Access-Control-Allow-Origin": "*",
			}
		};

		const postData = {
			email: user,
			password: password
		};

		axios
			.post(`${UrlDomain}/accounts/login`, postData, axiosConfig)
			.then((res) => {
				console.log(res)
				verificaLogin(res)
			})
			.catch(r => {
				console.log('error', r), alert('Senha errada')
			})
	}

	function verificaLogin(response) {
		// var usT = Cookies.get('userType')
		console.log(response, 'response verif')
		// resposta 200 permiti o login
		if (response.status == 200) {
			var ini = Criptacao(response)
			criptar(response)

		}
	}

	function criptar(response) {
		// var aux = response.data.tokenType + ' ' + response.data.token
		console.log('token');
		Cookies.set('typeToken', response.data.tokenType)
		Cookies.set('TokenID', response.data.token)
		//Cookies.set('userType', response.data.role)
		//Cookies.set('permissions', response.data.permissions)
		setFlag(true)
	}

	if (flag) {
		return (
			<Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
		)
	} else {
		return forgotMyPass ? (
			<MainLogin
				userLogin={userLogin}
				user={user}
				userPassword={userPassword}
				password={password}
				setForgotMyPass={setForgotMyPass}
				login={login}
			/>
		) : (
			<RecoverPassword
				setForgotMyPass={setForgotMyPass}
				userLogin={userLogin}
			/>
		)
	}
}

export default  Login;
