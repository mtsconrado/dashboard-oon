import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilOptions } from '@coreui/icons'

// importando buttons 
import BtnEditPlan from './bottonsOp/EditPlan'
import BtnConfig from './bottonsOp/Config'
import BtnGenerateChart from './bottonsOp/GenerateChart'
import BtnGenerateReport from './bottonsOp/GenerateReport'

import {
    CButton ,
    CPopover,
  } from '@coreui/react'

const ButtonOp = () => {


    return (

        <>
             
            <CPopover
                content={
                    <div> 
                        <BtnEditPlan />
                        <br />
                        <BtnGenerateReport/>
                        <br />
                        <BtnGenerateChart />
                        <br />
                        <BtnConfig />
                    </div>
                }
                placement="left"
            >
                <CButton color='dark'  size="sm"  variant ="ghost" className='btn1Chamados' >
                    <CIcon icon={cilOptions}  />
                </CButton>
            </CPopover>
            <br />
        </>
    )
}

export default  ButtonOp