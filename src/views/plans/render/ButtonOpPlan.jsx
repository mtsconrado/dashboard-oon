import React,{useState, useEffect} from 'react'
import CIcon from '@coreui/icons-react'
import {cilOptions } from '@coreui/icons'
import Cookies  from 'js-cookie'
// importando buttons 
 import BtnEditPlan from './../configRender/BtnEditarPlan'
// import BtnConfig from './bottonsOp/Config'
// import BtnGenerateChart from './bottonsOp/GenerateChart'
// import BtnGenerateReport from './bottonsOp/GenerateReport'

import {
    CButton ,
    CPopover,
  } from '@coreui/react'

  var CryptoJS = require("crypto-js");
  import Decrypt from './../../../security/decripty'

const ButtonOp = (props) => {   

    const  [userType, setUserType] = useState()
    const [userPermissions, setPermissions] = useState([])
    const token = Cookies.get('TokenID')
    const tokenType = Cookies.get('typeToken')

    useEffect(() =>{
        setUserType( Decrypt.UserTypeDecryption())
        setPermissions(Decrypt.userPermissionsDescription())
    },[])

    const pageAtt = () =>{
        props.attComp()
    }

    return (

        <>
             
            <CPopover
                content={
                    <div> 
                        {userType == "ADMIN" ? 
                            ( <BtnEditPlan data={props} att={pageAtt}/>)
                            :null
                        }
                        <br />
                    </div>
                }
                close
                placement="bottom"
            >
                <CButton color='dark' variant='ghost' className='buttonOps' >
                    <CIcon icon={cilOptions}  size="sm" />
                </CButton>
            </CPopover>
            <br />
        </>
    )
}

export default  ButtonOp