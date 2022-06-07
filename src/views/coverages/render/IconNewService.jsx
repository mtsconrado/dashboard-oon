import React from 'react'
import CIcon from '@coreui/icons-react'
const icons = ['cilAccountLogout', 'cilActionRedo', 'cilActionUndo', 'cilAddressBook', 'cilAirplaneModeOff', 'cilAirplaneMode', 'cilAirplay', 'cilAlarm']
import {cilAccountLogout, cilActionRedo, cilActionUndo, cilAddressBook, cilAirplaneModeOff, cilAirplaneMode, cilAirplay, cilAlarm } from '@coreui/icons'
import {
    CButton ,
    CPopover,
  } from '@coreui/react'

const IconService = (props) =>{

    return (
        <>
            <CButton  >
                <CIcon icon={props.item}  size="lg" />
            </CButton>
        </>
    )
}


export default  IconService