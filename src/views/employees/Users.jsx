import React, { useState, useEffect } from 'react'
import axios from "axios"
import { BsArrowCounterclockwise } from 'react-icons/bs';
import {
  CButton,
  CContainer,
  CNavbar,
  CCollapse,
  CFormSelect,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CCard,
  CCardBody,
  CFormInput,
  CForm,
} from '@coreui/react'
import { BiSearchAlt } from 'react-icons/bi';
import { Spinner } from 'react-bootstrap';

// var CryptoJS = require("crypto-js");
import Decrypt from './../../security/decripty';

import UrlDomain, { configCookies } from './../../config'
import Pagination from '../components/Pagination';
import NewUser from './render/NewUser'
import DropdownFilter from './render/midia/DropdownFilter'
import EmployeesList from './render/EmployeesList'

import './css/users.css'

const Clients = () => {

  const [dados, setDados] = useState([])
  const [dadosOri, setDadosOri] = useState([])
  const [visible, setVisible] = useState(false)
  const [busca2, setBusca] = useState('')
  const [n_employeer, setN_employeer] = useState()
  const [userType, setUserType] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [flagSearch, setFlagSearch] = useState('')
  const [openSearch, setOpenSearch] = useState(true)
  const [previousPage, setPrevios] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [nextPage, setNextPage] = useState('')
  const [numberOfPages, setNumberOfPages] = useState()
  const [arrayUsers, setArrayUsers] = useState()
  // const [userPermissions, setPermissions] = useState([])
  // const tokenType = Cookies.get('typeToken')


  const options = [
    { label: 'Todos ', value: 'todos' },
    { label: 'Ativos ', value: 'funcAtive' },
    { label: 'Desligados', value: 'funcDisable' }
  ]

  // useEffect para limpar o state
  useEffect(() => {
    return () => {
      setDados([])
      setDadosOri([])
      setVisible(false)
      setBusca('')
      setN_employeer()
      setUserType()
      setSearchValue('')
      setFlagSearch('')
      setOpenSearch(true)
    }
  }, [])

  const Pegandobusca = (e) => {
    setBusca(e.target.value)
  }

  function searchMail(e) {
    if (e.key === "Enter" || e.type === 'click') {
      setFlagSearch('')
      const config = configCookies()

      axios
        .get(`${UrlDomain}/employees/email/${busca2.toLocaleLowerCase()}`, config)
        .then((response) => {
          setSearchValue(response.data)
          setFlagSearch(true)
          setOpenSearch(false)
        })
        .catch((r) => {
          setOpenSearch(false)
          setFlagSearch(false)
          console.log('Não encontrado', r)
        }) // window.location.reload();
      //.catch(r =>{ console.log('erro na api....', r), setOpenSearch('err'), setFlagSearch(false)})
    }
  }



  const retiraFiltro = async () => {
    clear()
    const config = configCookies()

    axios
      .get(`${UrlDomain}/employees?pageSize=12`, config)
      .then((response) => {
        setArrayUsers(response.data.content)
        setDados(response.data.content)
        initPages(response)
        setBusca('')
        setNumberOfPages(response.data.totalPages)
        setN_employeer(response.data.totalElements)
      })
      .catch(r => {
        console.log('error', r), alert('Login expirado'), window.location.reload()
      })
  }

  function clear() {
    setDados([])
    setDadosOri([])
    setSearchValue('')
    setPrevios('')
    setOpenSearch(true)
  }

  useEffect(() => {
    setUserType(Decrypt.UserTypeDecryption())
    // setPermissions(Decrypt.userPermissionsDescription())
    const config = configCookies()

    axios
      .get(`${UrlDomain}/employees?pageSize=12`, config)
      .then((response) => {
        setArrayUsers(response.data.content)
        setDados(response.data.content)
        setN_employeer(response.data.totalElements)
        initPages(response)
        setNumberOfPages(response.data.totalPages)
      })
      .catch(r => {
        console.log('error', r) //, alert('Login expirado'),window.location.reload()
      })
  }, [])


  function initPages(e) {
    if (e.data.totalPages > 1) {
      setCurrentPage(1)
      setNextPage(2)
      setPrevios("");
    }
  }

  // volta pagina
  // function capturePrevious(e, nPage) {
  //   if (currentPage == 1) {
  //     setPrevios("");
  //     setNextPage(2);
  //   } else if (e === nPage) {
  //     setNextPage(2);
  //     setCurrentPage(1);
  //     setPrevios("");
  //   } else {
  //     setNextPage(currentPage);
  //     setCurrentPage(currentPage - 1);
  //     setPrevios(currentPage - 2);
  //   }
  //   const aux = e - 1;
  //   page(aux);
  // }

  // //  Proxima pagina
  // function captureNextPage(e, nPage) {
  //   if (currentPage == 1 && nPage == 2) {
  //     setCurrentPage(currentPage + 1);
  //     setPrevios(1), setNextPage("");
  //   } else if (e === nPage) {
  //     setNextPage("");
  //     setCurrentPage(e);
  //     setPrevios(numberOfPages - 1);
  //   } else if (currentPage == 1 && nPage != 2) {
  //     setNextPage(3);
  //     setCurrentPage(currentPage + 1);
  //     setPrevios(1);
  //   } else if (currentPage < nPage - 1) {
  //     setNextPage(currentPage + 2);
  //     setCurrentPage(currentPage + 1);
  //     setPrevios(currentPage);
  //   }

  //   const aux = e - 1;
  //   page(aux);
  // }

  // escolha a pagina de acesso 
  function page(e) {
    setDados([])
    const config = configCookies()

    axios
      .get(`${UrlDomain}/employees?pageSize=12&pageNumber=${e}`, config)
      .then((response) => {
        setArrayUsers(response.data.content)
        setDados(response.data.content)
        setNumberOfPages(response.data.totalPages)
      })
      .catch(r => {
        console.log('error', r), alert('Login expirado'), window.location.reload()
      })
  }

  function userActive(e) {
    var arrayDisable = []
    var arrayActive = []

    arrayUsers.map(user => {
      if (user.disabled == true) {
        arrayDisable.push(user)
      } else {
        arrayActive.push(user)
      }
    })

    if (e == 'todos') {
      retiraFiltro();
    } else if (e == 'funcAtive') {
      setDados(arrayActive)
      setN_employeer(arrayActive.length)
      initPages({ data: { TotalPages: 1 } })
    } else if (e == 'funcDisable') {
      setDados(arrayDisable)
      setN_employeer(arrayDisable.length)
      initPages({ data: { TotalPages: 1 } })
    } else {
      retiraFiltro()
    }

  }

  // const [menuChoice, setMenuChoice] = useState()


  function menuUsers(e) {
    // console.log('Escolha menu',e.target.value)
    // pega funcionarios desligados
    // if(e.target.value === 'todos' ){
    //   setMenuChoice(e.target.value)
    // }else if(e.target.value === 'funcAtive'){
    //   setMenuChoice(e.target.value)
    // }else if(e.target.value === 'funcDisable'){
    //   setMenuChoice(e.target.value)
    // }else{
    //   setMenuChoice(e.target.value)
    // } 

    userActive(e.target.value)
  }


  if (dados == '') {
    return (
      <CCard className='usersContainer'>
        <CCardBody>
          <h4> <Spinner animation="grow" variant="info" />  </h4>
        </CCardBody>
      </CCard>
    )
  } else if (openSearch) {
    return (
      <div>
        <CCard className='usersContainer'>
          <CCardBody>
            <CNavbar expand="lg" className="menuUser">
              <CContainer fluid>
                <CNavbarToggler
                  aria-label="Toggle navigation"
                  aria-expanded={visible}
                  onClick={() => setVisible(!visible)}
                />
                <CCollapse className="navbar-collapse" visible={visible}>
                  <CNavbarBrand>Funcionários </CNavbarBrand>
                  <CNavbarBrand>
                    <CFormSelect
                      aria-label="Default select example"
                      options={options}
                      onChange={menuUsers}
                    />
                  </CNavbarBrand>
                  <CNavbarNav className="me-auto mb-2 mb-lg-0">
                  </CNavbarNav>
                  <CForm className="d-flex">
                    <CFormInput type="text" onChange={Pegandobusca} value={busca2} className="me-2 input-filter" placeholder="Pesquise um e-mail"
                      onKeyPress={searchMail} />

                    <CButton onClick={searchMail} className="btn-filter" variant='ghost' color="secondary" >
                      <BiSearchAlt style={{ padding: 0, fontSize: '2em' }} />
                    </CButton>
                    <DropdownFilter />
                  </CForm>
                  <div className='newUser'>
                    <NewUser callBack={retiraFiltro} />
                  </div>
                </CCollapse>
              </CContainer>
            </CNavbar>
            <EmployeesList dados={dados} userType={userType} retiraFiltro={retiraFiltro} dadosOri={dadosOri} />
            <br />
            <br />
            <Pagination page={page} numberOfPages={numberOfPages} previousPage={previousPage} setPreviousPage={setPrevios} currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} setNextPage={setNextPage} qtdElements={n_employeer} />
          </CCardBody>
        </CCard>
      </div>
    )
  } else {
    return (
      <>
        <CCard className='usersContainer'>
          <CCardBody>
            <CNavbar expand="lg" className="menuUser">
              <CContainer fluid>
                <CNavbarToggler
                  aria-label="Toggle navigation"
                  aria-expanded={visible}
                  onClick={() => setVisible(!visible)}
                />
                <CCollapse className="navbar-collapse" visible={visible}>
                  <CNavbarBrand> Funcionário </CNavbarBrand>
                  <CNavbarNav className="me-auto mb-2 mb-lg-0">
                  </CNavbarNav>
                  <CForm className="d-flex">
                    <CFormInput type="text" onChange={Pegandobusca} value={busca2} className="me-2 input-filter" placeholder="Pesquise um e-mail"
                      onKeyPress={searchMail} />

                    <CButton onClick={searchMail} variant='ghost' className="btn-filter" color="secondary" >
                      <BiSearchAlt style={{ padding: 0, fontSize: '2em' }} />
                    </CButton>

                  </CForm>
                  <div className='newUser'>
                    <NewUser callBack={retiraFiltro} />
                  </div>
                  <CButton onClick={retiraFiltro} variant='ghost' color="secondary" >
                    <BsArrowCounterclockwise className='user-icons' />
                  </CButton>
                </CCollapse>
              </CContainer>
            </CNavbar>

            {flagSearch === '' ?
              (
                <CCard className='usersContainer'>
                  <CCardBody>
                    <h4> <Spinner animation="grow" variant="info" /></h4>
                  </CCardBody>
                </CCard>
              )
              : flagSearch ?
                (
                  <EmployeesList dados={[searchValue]} userType={userType} retiraFiltro={retiraFiltro} dadosOri={dadosOri} />
                )
                : (
                  <div className='container-users-notFind'>
                    <h3>E-mail não encontrado ...</h3>
                    <br />
                    <CButton onClick={retiraFiltro} variant='ghost' color="dark" >
                      Voltar a lista
                    </CButton>
                  </div>
                )
            }
            <br />
          </ CCardBody>
        </CCard>
      </>
    )
  }

}

export default  Clients;
