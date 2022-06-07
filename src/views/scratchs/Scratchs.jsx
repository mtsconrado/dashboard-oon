import React, { useState, useEffect, useMemo } from 'react'
import axios  from "axios"

import './scratchs.css'
import {
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CContainer,
  CTableRow,
  CNavbar,
  CCollapse,
  CNavLink ,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CCard,
  CCardBody,
  CFormInput,
  CForm,
  CPagination,
  CPaginationItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilLoopCircular, cilMagnifyingGlass, cilChevronRight, cilChevronLeft } from '@coreui/icons'
import { Spinner }  from 'react-bootstrap';
import UploadRiscBtn from './render/UploadRisc'
import Cookies from 'js-cookie'

import UrlDomain, { configCookies } from '../../config'

var CryptoJS = require("crypto-js");
import Decrypt from '../../security/decripty'

const Riscos = () => {

  const [dados, setDados] = useState([])
  const [permissions, setPermissions] = useState([])
  const [userType, setUserType] = useState([])
  // const token = Cookies.get('TokenID')
  // let config = {
  //   headers: {
  //     'Authorization': `Bearer ${token}`,  
  //     'Content-Type': 'application/json;charset=UTF-8',
  //     "Access-Control-Allow-Origin": "*",
  //   }
  // };

   function attPage(){
    
    setDados([])
    const config = configCookies()

    axios 
      .get(`${UrlDomain}/risks`, config)
      .then((response) => {
          setDados(response.data)
      })
      .catch(r =>{ 
        console.log('error', r), alert('Login expirado'),window.location.reload()
      })
  }

  

  useEffect( ()=>{
    setPermissions(Decrypt.userPermissionsDescription())
    setUserType(Decrypt.UserTypeDecryption)
    const config = configCookies()

     axios 
      .get(`${UrlDomain}/risks`, config)
      .then((response) => {
          setDados(response.data)
      })
      .catch(r =>{ 
        //console.log('error', r), alert('Login expirados'),window.location.reload()
      })
  }, []) 

  console.log(dados);
  if (dados == ''){
    return (
        <>
          <h4> <Spinner animation="grow" variant="info" />  </h4> 
          <br />
        </>
      )
  }else{
    return (
      <div>

        <CCard className='container-risco'>
            <CCardBody>
              <CNavbar expand="lg"  className="menuUser">
                      <CContainer fluid>
                      <CNavbarToggler
                          aria-label="Toggle navigation"
                          // aria-expanded={visible}
                          // onClick={() => setVisible(!visible)}
                      />
                      <CCollapse className="navbar-collapse" >
                          {/* <CIcon icon={cilUser } size="xl"/> */}
                          <CNavbarBrand> <h4> Riscos </h4>   </CNavbarBrand>
                          <CNavbarNav className="me-auto mb-2 mb-lg-0">
                          </CNavbarNav>

                          {userType == "ADMIN" ? 
                              ( <UploadRiscBtn parentCallback={attPage} />)
                            :null

                          }
                      </CCollapse>
                      </CContainer>
                  </CNavbar>
              
              <CTable align="middle" className=" container-table-risc " bordered hover  responsive>
                {/* Cabeca head da tabela do clientes */}
                <CTableHead >
                  <CTableRow active>
                    <CTableHeaderCell  className="text-center">Valor Minímo do veículo</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Valor máximo  do Veículo</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Constante de Risco</CTableHeaderCell>
                    <CTableHeaderCell className="text-center"> Varíavel de exposição </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                <CTableBody>

                  { dados.map((item, index) => {
                    return ( 
                          <CTableRow key={index.toString()}>
                              <CTableDataCell  className="valorMin">
                                  <p> R$ {item.to} </p>
                              </CTableDataCell>

                              <CTableDataCell color='secondary'  className="text-center">
                                  <p> R$ {item.until} </p>
                              </CTableDataCell>

                              <CTableDataCell className="text-center">
                                  <p> {item.krisk } </p>
                              </CTableDataCell>

                              <CTableDataCell color='secondary' className="text-center">
                                  <p> {item.exposition} </p>
                              </CTableDataCell>
                          
                          </CTableRow> 
                      )
                  })}

                </CTableBody> 
              </CTable>
              <br />
                  
            </CCardBody>
        </CCard>

        
        </div>
    )
  }
  
}

export default  Riscos