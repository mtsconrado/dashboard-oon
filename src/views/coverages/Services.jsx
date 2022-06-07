import React, { useEffect, useState } from 'react'
import axios from "axios"

import UrlDomain, { configCookies } from './../../config'

import {
    CButton, CCard, CCardBody, CContainer,
    CForm, CFormInput, CNavbar, CNavbarBrand, CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow
} from '@coreui/react'
import { cilLoop } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { Spinner } from 'react-bootstrap'
import BtnEditarRender from './render/BtnEdit'
import DescricaoRender from './render/Describe'
import NovosServicos from './render/NewServices'
import Service from './render/Service'
import ServiceRender from './render/Service'
import StatusRender from './render/Status'
import './service.css'
import Cookies from 'js-cookie'

var CryptoJS = require("crypto-js");

const Services = () =>{

    // descriptando 
    var usT = Cookies.get('userType')
    var msg  = CryptoJS.AES.decrypt(usT, 'OnnSeguros');
    var msgOri = msg.toString(CryptoJS.enc.Utf8);

    const [services, setServices] = useState([])
    // const token = Cookies.get('TokenID')
    const userType = msgOri

    // let config = {
    //     headers: {
    //     'Authorization': `Bearer ${token}`, 
    //     'Content-Type': 'application/json;charset=UTF-8',
    //     "Access-Control-Allow-Origin": "*",
    //     }
    // };
    
    const [dados, setDados] = useState(services)
    const [busca2, setBusca] = useState('')
    let busca
    const dados2 =[]

    const buscaService = (e) =>{
        setBusca(e.target.value)
        busca = e.target.value
        BuscaUser()
    }

    const BuscaUser = () =>{
        let auxBusca = busca.toLocaleLowerCase()

        services.map(item =>{   
      
            let auxService = item.description.toLocaleLowerCase()     // ALTERAR AQUI DE ACORDO COM OS CAMPOS DA API
            
            if(auxService.includes(auxBusca) ){
              dados2.push(item)
              setDados(dados2)
            }
          })
    }

    const atualizar = () =>{
        setDados([])
        const config = configCookies()
        axios 
            .get(`${UrlDomain}/coverages`, config)
            .then((response) => {
                setServices(response.data)
                setDados(response.data)
            })
            .catch(r =>{ 
                console.log('error', r), alert('Login expirado'),window.location.reload()
            }) // window.location.reload();
    }

    useEffect(() => {
        axios 
            .get(`${UrlDomain}/coverages`, config)
            .then((response) => {
                setServices(response.data)
                setDados(response.data)
            })
            .catch(r =>{ 
                console.log('error', r), alert('Login expirado'),window.location.reload()
            }) // window.location.reload();
    }, [])

    if( dados == '') {
        return ( <>  <h4> <Spinner animation="grow" variant="info" />  </h4> </> )
    }else{
        return (
            <> 
                <CCard className="w-100 cardService">
                    <CCardBody>
                        <CNavbar >
                            <CContainer fluid>
                                <CNavbarBrand href="#"></CNavbarBrand>
                                <CForm className="d-flex">
                                    <CFormInput type="search" onChange={buscaService} value={busca2} className="me-2" placeholder="Procurar" />
                                    <CButton  className='btn-pesq' variant="ghost" onClick={atualizar} color="dark" >
                                        <CIcon icon={cilLoop}  size="xl"/>
                                    </CButton>
                                    {userType == "ADMIN" ?
                                        (<NovosServicos  attPage={atualizar}/>)
                                        : null
                                    }
                                    
                                </CForm>
                            </CContainer>
                        </CNavbar>
                        <br />
                        <CTable striped align="middle" className="mb-0 " hover responsive>
                            {/* Cabeca head da tabela do clientes */}
                            <CTableHead>
                                <CTableRow>
                                {/* <CTableHeaderCell ></CTableHeaderCell> */}
                                <CTableHeaderCell >Serviços</CTableHeaderCell>
                                <CTableHeaderCell >Status</CTableHeaderCell>
                                <CTableHeaderCell>Valor por KM</CTableHeaderCell>
                                <CTableHeaderCell >
                                            {userType == "ADMIN" ?
                                                (<> Ações</>)
                                                : null
                                            }
                                </CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
    
                            <CTableBody>
                                {dados.map((item, index) => (
                                    <CTableRow key={index}>
                                        {/* <CTableDataCell >
                                            <IconRender icone={item.icone} />
                                        </CTableDataCell> */}
                                        <CTableDataCell  >
                                            <ServiceRender servico={item.description} />
                                        </CTableDataCell>
                                        <CTableDataCell >
                                            <StatusRender status={item.disabled} />
                                        </CTableDataCell>
                                        <CTableDataCell >
                                            <DescricaoRender descricao={item.valuePerKm} />
                                        </CTableDataCell>
                                        <CTableDataCell >
                                            {userType == "ADMIN" ?
                                                (<BtnEditarRender item={item} parentCallback={atualizar} />)
                                                : null
                                            }
                                            
                                        </CTableDataCell>
                                    </CTableRow>
                                ))}
    
                            </CTableBody>
                        </CTable>
                            
                    </CCardBody>
                </CCard>
                
    
            </>
        )
    }
    
}

export default  Services