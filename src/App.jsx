import React, { useState, Component, useEffect } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import DefaultLayout from './layout/DefaultLayout';

import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


// Pages
const Login = React.lazy(() => import('./views/login/Login'))
// const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))



const App = () => {

  const [flag, setFlag] = useState(false)


  // useEffect(()=> {
  //   // pegar o token 
  //   const token = localStorage.getItem("TokenID");
  //   // console.log('tokem em cash..',token)
  //   const config = {
  //     headers: { 
  //         'Authorization': token, 
  //         'Content-Type': 'application/json;charset=UTF-8',
  //         "Access-Control-Allow-Origin": "*"
  //     }
  //   }

  //     // requisito login
  //   axios
  //     .post('http://dashboardbff.oonpayperuse.com.br:8080/dashboardbff/login', 
  //       token,
  //       config
  //     )
  //     .then((res) => {
  //       console.log('resultado', res)
  //       // tinha que analisar o resultado dessa requisicao, depois redirecionar
  //       setFlag(true)

  //     })
  //     .catch((err) => {
  //       console.log("Err Token: ", err);
  //       // setFlag(true)
  //     })
  // },[])



  if (flag == true) {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  } else {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/" name="Login Page" render={(props) => <Login {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default  App
