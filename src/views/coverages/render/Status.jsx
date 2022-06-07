import React from 'react'
import {
    CFormSwitch
  } from '@coreui/react'

const Status = (props) =>{

    if(props.status == true){
        return (
            <>
               <CFormSwitch  id="formSwitchCheckChecked" size="xl" defaultChecked/>
            </>
        )
    }else{
        return (
            <>
               <CFormSwitch  id="formSwitchCheckChecked" size="xl"  defaultChecked />
            </>
        )
    }
    
}


export default  Status