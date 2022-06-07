import React, {useState} from 'react'
import './render/css/assistence.css'
import Cookies from 'js-cookie'
import { BsWrench } from 'react-icons/bs';

import {
    
    CButton ,
   
  } from '@coreui/react'

  // importando componentes

import FollowCall from './render/FollowCall'
import HistoryCalls from './render/History'

import { useEffect } from 'react';

var CryptoJS = require("crypto-js");
import Decrypt from './../../security/decripty'

const Assistence24 = () =>{

    const [op1, setOp1] = useState(false)
    const [op2, setOp2] = useState(false)
    const [op3, setOp3] = useState(true)
    const [op4, setOp4] = useState(false)
    const [op5, setOp5] = useState(false)
    const [op6, setOp6] = useState(false)

    const [visible, setVisible] = useState(false) 
    const [menu, setMenu] = useState('acompanhar')
    const flag = 'admin'

    // controle das telas
    const controle = (e) =>{
        setMenu(e)

        if(e == 'home'){
            setOp1(true)
           // setOp2(false)
            setOp3(false)
            setOp4(false)
           // setOp5(false)
           // setOp6(false)
        }
        // else if(e == 'novoAtendimento'){
        //     setOp1(false)
        //     setOp2(true)
        //     setOp3(false)
        //     setOp4(false)
        //     setOp5(false)
        //     setOp6(false)

        // }
        else if(e == 'acompanhar'){
            setOp1(false)
            //setOp2(false)
            setOp3(true)
            setOp4(false)
            //setOp5(false)
            //setOp6(false)

        }else if(e == 'historico'){
            setOp1(false)
            //setOp2(false)
            setOp3(false)
            setOp4(true)
            //setOp5(false)
            //setOp6(false)
        }
        // else if(e == 'configuracoes'){
        //     setOp1(false)
        //     setOp2(false)
        //     setOp3(false)
        //     setOp4(false)
        //     setOp5(true)
        //     setOp6(false)
        // }
        // else if( e == 'tipoServico'){
        //     setOp1(false)
        //     setOp2(false)
        //     setOp3(false)
        //     setOp4(false)
        //     setOp5(false)
        //     setOp6(true)
        // }
    }

    const [userType, setUserType] = useState()
    const [permissions, setPermissions] = useState()

    useEffect(()=>{
        setUserType(Decrypt.UserTypeDecryption)
        setPermissions(Decrypt.permissions)
    },[])

    const token = Cookies.get('TokenID')
    

    return (

        <> 
            <div className='container-assistence mx-2'  >

                <div className='container-assistence-header'> 
                    {/* <label className="font-icon-header"> <BsWrench /> </label> */}
                    <label className="font-name-header" >  Assistência  </label> 
                    
                    {/* <CButton 
                        className='btn-assistence'
                        color='dark' 
                        active={op1} 
                        size='md'
                        onClick={()=>{controle('home')}} 
                        variant='ghost' > 
                            Assistência 
                    </CButton>  */}
                    
                    {/* <CButton 
                        className='btn-assistence'
                        color='dark' 
                        active={op2}
                        size="sm" 
                        onClick={()=>{controle('novoAtendimento')}} 
                        variant='ghost' > 
                            Novo chamado
                    </CButton> */}

                    <CButton 
                        className='btn-assistence'
                        color='dark' 
                        active={op3} 
                        size="sm"
                        onClick={()=>{controle('acompanhar')}} 
                        variant='ghost' > 
                            Acompanhar
                    </CButton>       

                    <CButton 
                        className='btn-assistence'
                        color='dark' 
                        active={op4} 
                        onClick={()=>{controle('historico')}} 
                        variant='ghost'
                        size="sm"
                    > 
                        Histórico
                    </CButton>   

                    

                    {/* {userType=="ADMIN" ? 
                    (
                        <CButton 
                            className='btn-assistence'
                            color='dark' 
                            active={op5} 
                            onClick={()=>{controle('configuracoes')}} 
                            variant='ghost'
                            size="sm" > 
                                Configurações
                        </CButton>  
                    )
                        :
                        null
                    }

                    <CButton 
                        className='btn-assistence'
                        color='dark' 
                        active={op6} 
                        onClick={()=>{controle('tipoServico')}} 
                        variant='ghost'
                        size='sm' > 
                            Tipos de serviços
                    </CButton>   */}
                    
                    
                    
                </div>
                      

                    {menu == 'home' ? 
                        (
                            <> 
                                {/* <Home /> */}
                                <FollowCall />
                            </>
                        )
                        : null
                    }

                    {/* {menu == 'novoAtendimento' ? 
                        (
                            <> 
                               <NewService />
                            </>
                        )
                        : null
                    } */}

                    {menu == 'acompanhar' ? 
                        (
                            <> 
                                <FollowCall />
                            </>
                        )
                        : null
                    }   

                    {menu == 'historico' ? 
                        (
                            <> 
                                <HistoryCalls />
                            </>
                        )
                        : null
                    }

                    {/* {menu == 'configuracoes' ? 
                        (
                            <> 
                                <ConfigAssistence 
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHKaVOonbL8-sJ5BM_StSZhM2pAw2CK9A"
                                    loadingElement={<div style={{ height: `100%` }} />}
                                />
                            </>
                        )
                        : null
                    }

                    {menu == 'tipoServico' ? 
                        (
                            <> 
                                <ListService /> 
                            </>
                        )
                        : null
                    } */}

            </div>
        </>

    )
}

export default  Assistence24;
