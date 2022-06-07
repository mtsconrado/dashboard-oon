import React, { useState } from "react";
import axios  from "axios"
import './associate.css'
import Cookies from 'js-cookie'

import UrlDomain from './../../../../config'

import {
    CButton,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CFormCheck,
    CTableRow,
    CForm,
    CCard,
    CCardBody,
    CFormInput,
    CRow,
    CCol,
    CPopover,
  } from '@coreui/react'
  
  import CIcon from '@coreui/icons-react'
  import {cilPlus, cilFilter , cilMinus } from '@coreui/icons'

const Associate = (props) =>{

    // variaveis sem hooks
    // const userType = Cookies.get('userType')
    const token = Cookies.get('TokenID')
    let buscaDisp
    const dados2 = []
    let disp=[], assoc=[] // variaveis de controle
    //let newAssociates = []
    //let removeAssociate = []
    let flag = 0 
    const limUsers = 10 // limita quantidade de user nos cards
    let userFilter
    let departFilt
    let config = {
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
    
    // variaveis hooks
    const handleClose = () => setShow(false);
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const [aux, setAux] = useState([])
    const [auxAssociate, setAuxAssociate] = useState([])
    const [dataAssociateOri, setDataAssociateOri] = useState([])
    const [data, setData] = useState(props)
    const [buscaDisponible, setBuscaDisponible] = useState('')
    const [newAssociates, setNewAssociates] = useState([])
    const [removeAssociate, setRemoveAssociate] = useState([])
    const [showPop, setShowPop] = useState(false)
   
    const  OpenModal =  async () => {
        
        let arrayAux = []
        // SEM ENDPOIINT PEGANDO PARA TESTAR 
        let i
        for(i = 0; i < props.data.length ; i++){
            if( i < (props.data.length/3)){
                if(props.data[i].id != props.user.id){
                    arrayAux.push(props.data[i])
                }
                
            }
        }
        // console.log('tam ori', props.data.length  ,'tam associate', arrayAux.length)
        setAuxAssociate(arrayAux)
        assoc=arrayAux
        
        setShow(true)

        // await axios 
        //   .get(`${UrlDomain}/employeers`, config)
        //   .then((response) => {
        //       // pegando dados do associate pelo id
        //       // setDataAssociateOri(response)
        //       setShow(true)
        //       // tira usuario selecionado da lista
        //       filterUsers()
              
        //   })
        //   .catch(r =>{ console.log('erro na api....', r)}) // window.location.reload();
    }  

    const filterUsers = () =>{
        let aux2 = []
        // tirar usuario selecionado
        props.data.map(item =>{
            if(item.id != props.user.id){
                aux2.push(item) // users sem o user selecionado
                //setAux(state => [...state, item])
            }
        })
        disp = aux2
        setDataAssociateOri(aux2)
        setAux(aux2)
        filterAssociado()
    }

    const filterAssociado = () =>{
        let aux2 = []
        // tenho q comprar usuarios disponiveis com lista de usuarios associados
        // guardar usuarios nao associados e listar no disponiveis
    
        disp.map(item =>{
            if(!assoc.includes(item)){
                aux2.push(item)
            }
       })
      
       

       console.log('mostra tamanho ONLINE', aux2.length, disp.length, assoc.length)
       
        setDataAssociateOri(aux2)
        setAux(aux2)

    }
    
    // pega os novos associados selecionados , e atualiza a tela
    const AddAssociate = (e)=>{
        console.log('e vale', e)
        // newAssociates.push(e)
        setNewAssociates(newAssociates =>[...newAssociates, e.id])

        setAuxAssociate(auxAssociate =>[...auxAssociate, e]);
        // remover do array disponivel
        let arr = []
        aux.map(i =>{
            if(i!=e){
                arr.push(i); 
            }
        })
        setAux(arr)
    }

    // pega os associados removidos, e atualiza a tela
    const RemoveAssociate = (e)=>{
        console.log('e vale')
        setRemoveAssociate(removeAssociate =>[...removeAssociate, e.id])
        setAux(aux =>[...aux, e])
        let arr = []
        auxAssociate.map(i =>{
            if(i!=e){
                arr.push(i); 
            }
        })
        setAuxAssociate(arr)
    }

    // gerencia requisicoes de newAssociate e remove associate,
    // pode ocorrer que o user so queira remover um associado, a funcao a baixao ira gerencia para que chame so a funcao certa
    const salvarInfos = () =>{
        
        console.log('tamanho do new associate', newAssociates.length ,'tam do delete associate', removeAssociate.length )
        // Verifico os arrays
        if(newAssociates.length > 0){
            // ha novos associados, e pode ter removeAssociate tbm, verificar apos primeira requisicao
            saveNewAssociate()
        }else if(removeAssociate.length > 0){
            // Nao há novos associados, mas o há removeassociata
            saveRemoveUser()
        }else{
            // Usuario nao selecionou nada, fechando modal
            console.log('entrei no sem new e remove')
            setShow(false)
        }

        props.handleClose()
    }

    const saveNewAssociate =  async () =>{
        
        let newAssociate =  {managerId:props.user.id, usersIds:newAssociates}
        console.log('new associate', newAssociate, config)
        await axios 
            .post(`${UrlDomain}/users/associate`,  newAssociate, config )
            .then((response) => {
                console.log('newAssociate', response)
                if(removeAssociate.length > 0){
                    saveRemoveUser()
                }else{
                    setShow(false);
                }
                
            })
            .catch(r =>{ console.log('err api associate..', r)})

    }
    
    const saveRemoveUser = async () => {
        
        let removendoAssociados =  {managerId:props.user.id, usersIds:removeAssociate}
        console.log('removendo associate', removendoAssociados)
        await axios 
            .post(`${UrlDomain}/users/removeAssociation`,  removendoAssociados, config )
            .then((response) => {
                console.log('RemoveAssociate', response)
                setShow(false)
                
            })
            .catch(r =>{ console.log('err api associate..', r)})
    }

    // pega valores do campo buscar
    const Pegandobusca = (e) =>{
        setBuscaDisponible(e.target.value)
        buscaDisp = e.target.value
        searchDisponible()
    }

    // busca pelo campo de busca
    const searchDisponible = () =>{
        let auxBusca = buscaDisp.toLocaleLowerCase()
        dataAssociateOri.map(item =>{
          // converter os dados e os dados de busca para lower case
          let auxName = item.firstName.toLocaleLowerCase()
          let auxEmail = item.employeeRole.toLocaleLowerCase()
          //  let auxEmail = item.depart.toLocaleLowerCase()
          if((auxName.includes(auxBusca) || (auxEmail.includes(auxBusca)))){
            dados2.push(item)
            setAux(dados2)
          }
        })
    }

    // Filtros
    const selectUser = (e) => {
        userFilter = e
    }

    const selectDepart = (e) => {
        departFilt = e
    }
    
    // Realiza o filro
    const filterDisponible = () =>{
        setAux(dataAssociateOri)

        let auxUser = userFilter
        let auxDepart = departFilt
       //  console.log('depart', auxUser, 'userFilte', auxDepart)
   
        if((auxUser != null) && (auxDepart != null)){
            // dois campos seleconados
            console.log('selecionou ambos', auxUser, auxDepart)
            let i 
            for(i =0; i < dataAssociateOri.length; i++){
                let aux1 = dataAssociateOri[i].firstName.toLocaleLowerCase() // trocar por departamento
                let aux2 = dataAssociateOri[i].employeeRole.toLocaleLowerCase()
                //  let auxEmail = item.depart.toLocaleLowerCase()
                if((aux2.includes(auxUser) && (aux1.includes(auxDepart)))){
                    dados2.push(dataAssociateOri[i])
                    setAux(dados2)
                }
            }
        }else if(auxUser != null){
            // selecionou o aux user - tipo dele 
            let i 
            for(i =0; i < dataAssociateOri.length; i++){
                let aux1 = dataAssociateOri[i].firstName.toLocaleLowerCase() // trocar por departamento
                let aux2 = dataAssociateOri[i].employeeRole.toLocaleLowerCase()
                //  let auxEmail = item.depart.toLocaleLowerCase()
                if(aux2.includes(auxUser)){
                    dados2.push(dataAssociateOri[i])
                    setAux(dados2)
                }
            }
        }else if(auxDepart != null){
            // selecionou o departamento
            let i 
            for(i =0; i < dataAssociateOri.length; i++){
                let aux1 = dataAssociateOri[i].firstName.toLocaleLowerCase() // trocar por departamento
                let aux2 = dataAssociateOri[i].employeeRole.toLocaleLowerCase()
                //  let auxEmail = item.depart.toLocaleLowerCase()
                if(aux1.includes(auxDepart)){
                    dados2.push(dataAssociateOri[i])
                    setAux(dados2)
                    
                }
            }
        }
        userFilter=''
        departFilt = ''
        setShowPop(false)
    }

    return (
        <> 
        <div className='container-header-associate'>
        <CRow >
            <CCol >
            <label className="container-fontName-titulo">Associados</label>
            </CCol>
            <CCol  >
                <label className="container-fontName-associado">{props.user.firstName}</label>
                <br /> <br />
                <label className="container-fontDepart-associado"> {props.user.employeeRole.toLowerCase()} TI  </label>
            </CCol>
        </CRow>
            
        </div> 
        

        <CRow>
            <CCol >
                <CCard className="container-card-disponible">
                    <CRow className="align-items-end">
                        <CCol className="container-coluna-esq-associate">
                            <label className="container-card-fontTit"> Disponível</label>
                        </CCol>

                        <CCol className="container-coluna-dir-associate">
                            <CForm className="d-flex">
                                <CFormInput type="text" onChange={Pegandobusca} value={buscaDisponible} size="sm" className="me-2" placeholder="Pesquise" />
                                <CPopover
                                    // onShow={showPop}
                                    content={
                                        <div className="container-pophover-associate"> 

                                                <label className='font-popOver'> Departamento </label>    
                                                <CForm>
                                                <CFormCheck type="radio" onChange={() =>{selectDepart('maria')}} name= "tiposDepart" id="userDepart" label="maria"/>
                                                <CFormCheck type="radio" onChange={() =>{selectDepart('joao')}}  name= "tiposDepart" id="userDepart" label="joao"/>
                                                <CFormCheck type="radio" onChange={() =>{selectDepart('ti')}}    name= "tiposDepart" id="userDepart" label="Ti"/>
                                                <CFormCheck type="radio" onChange={() =>{selectDepart('outro')}} name= "tiposDepart" id="userDepart" label="outro"/>
                                                </CForm>
                                            <br />
                                                <label className='font-popOver' > Tipo Usuário</label>
                                                <CForm>
                                                <CFormCheck type="radio" onChange={() =>{selectUser('admin')}}   name="tiposUsuarios" id="userType" label="Admin"/>
                                                <CFormCheck type="radio" onChange={() =>{selectUser('manager')}} name= "tiposUsuarios" id="userType" label="Gerente"/>
                                                <CFormCheck type="radio" onChange={() =>{selectUser('support')}} name= "tiposUsuarios" id="userType" label="Suporte"/>
                                                </CForm>
                                            

                                            <br />
                                            <div className="container-btn-popover" >
                                                <CButton  size="sm"  onClick={filterDisponible}color="dark" handleClose>
                                                    Filtrar
                                                </CButton>
                                            </div>
                                            

                                        </div>
                                        
                                    }
                                    placement="right"
                                >
                                    <CButton variant='ghost' size="sm"  color="secondary">
                                        <CIcon icon={cilFilter} size="lg" /> 
                                    </CButton>
                                </CPopover>
                                
                            </CForm>
                        </CCol>

                    </CRow>
                    
                    <CCardBody> 
                            <CTable  >
                                <CTableHead>
                                    <CTableRow>
                                    <CTableHeaderCell >Nome</CTableHeaderCell>
                                    <CTableHeaderCell >Departamento</CTableHeaderCell>
                                    <CTableHeaderCell >Tipo</CTableHeaderCell>
                                    <CTableHeaderCell >Adicionar </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                {aux.map( (user, index) =>{
                                    if(index < limUsers){
                                        return(
                                            <> 
                                            
                                                <CTableBody key={index}>
                                                    <CTableRow>
                                                        <CTableDataCell>{user.name}</CTableDataCell>
                                                        <CTableDataCell> ## </CTableDataCell>
                                                        <CTableDataCell>{user.type}</CTableDataCell>
                                                        <CTableDataCell align='middle'> 
                                                            <CButton variant='outline' color='info' size="sm" onClick={()=>{AddAssociate(user)}}> 
                                                                <CIcon color='dark' icon={cilPlus} size="lg"/>
                                                            </CButton> 
                                                        </CTableDataCell>
                                                    </CTableRow>
                                                </CTableBody>
                                                
                                            </>
                                        )
                                    }else{
                                        var falta = aux.length - limUsers
                                        
                                        // Parar o laço com break 
                                        if(flag < 1){
                                            flag = 1
                                            return(
                                                <> 
                                                    <br />
                                                    <h6> Há mais {falta} funcionários </h6>
                                                </>
                                            )
                                        }
                                        
                                    }
                                    
                                })}
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>

            <CCol>
                    <CCard className="container-card-disponible">
                    <CRow className="align-items-end">
                    <CCol className="container-coluna-esq-associate">
                        <label className="container-card-fontTit"> Associados</label>
                    </CCol>

                    <CCol className="container-coluna-dir-associate">
                        <CForm className="d-flex">
                            <CFormInput type="text" size="sm" className="me-2" placeholder="Pesquise" />
                            <CButton  variant='ghost' size="sm"  color="secondary" >
                                <CIcon icon={cilFilter} size="lg" /> 
                            </CButton>
                        </CForm>
                    </CCol>

                    </CRow>
                    <CCardBody> 
                        <CTable  >
                            <CTableHead>
                                <CTableRow>
                                <CTableHeaderCell >Nome</CTableHeaderCell>
                                <CTableHeaderCell >Departamento</CTableHeaderCell>
                                <CTableHeaderCell >Tipo</CTableHeaderCell>
                                <CTableHeaderCell >Adicionar </CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>

                            {/* ALTERAR QUANDO REQUISITAR A API  */}

                            {auxAssociate.map( (user, index) =>{
                                if(index < limUsers){
                                    return(
                                        <> 
                                        
                                            <CTableBody>
                                                <CTableRow>
                                                    <CTableDataCell>{user.name}</CTableDataCell>
                                                    <CTableDataCell> ## </CTableDataCell>
                                                    <CTableDataCell>{user.type}</CTableDataCell>
                                                    <CTableDataCell align='middle'> 
                                                        <CButton variant='outline' color='danger' size="sm" onClick={()=>{RemoveAssociate(user)}}> 
                                                            <CIcon  icon={cilMinus} size="lg"/>
                                                        </CButton> 
                                                    </CTableDataCell>
                                                </CTableRow>
                                            </CTableBody>
                                            
                                        </>
                                    )
                                }else{
                                    var falta = auxAssociate.length - limUsers
                                    
                                    // Parar o laço com break 
                                    if(flag < 1){
                                        flag = 1
                                        return(
                                            <> 
                                                <br />
                                                <h6> Há mais {falta} funcionários </h6>
                                            </>
                                        )
                                    }
                                    
                                }
                                
                            })}
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>

        </CRow>

        <br />
        <div className='container-btns-associate'> 
            <CButton className='btn-associate-salvar' size="sm" color="secondary" onClick={salvarInfos}> Salvar e sair </CButton>
        </div>
        </>
    )
}

export default  Associate