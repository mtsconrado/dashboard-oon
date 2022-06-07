import React from 'react';
import { CCard, CCardBody } from '@coreui/react';

import WorkshopData from './render/WorkshopData';
import HeaderOccurrence from '../headers/HeaderOccurrence';
import HeaderContract from '../headers/HeaderContract';

const Workshop = (props) => {
    return (
        <CCard className='card-radius'>
            <CCardBody>
                <HeaderOccurrence protocolo={props.protocolo} />
                <HeaderContract protocolo={props.protocolo} />
                <WorkshopData protocolo={props.protocolo} />
            </CCardBody>
        </CCard>
    )
}


export default  Workshop;
