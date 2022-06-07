import React from 'react'

import HeaderOccurrence from '../headers/HeaderOccurrence'
import HeaderContract from '../headers/HeaderContract'
import RoofUser from './render/RoofUser'

import { CCard, CCardBody } from '@coreui/react'

import FranchiseBenefit from './render/FranchiseBenefit'
import BenefitBackupCar from './render/BenefitBackupCar'


const Roof = (props) => {
    return (
        <CCard className="card-radius">
            <CCardBody>
                <HeaderOccurrence protocolo={props.protocolo} />
                <HeaderContract protocolo={props.protocolo} />
                <RoofUser protocolo={props.protocolo} />
                <br />
                <FranchiseBenefit protocolo={props.protocolo} />
                <br />
                <BenefitBackupCar protocolo={props.protocolo} />
            </CCardBody>
        </CCard>
    )
}


export default  Roof;
