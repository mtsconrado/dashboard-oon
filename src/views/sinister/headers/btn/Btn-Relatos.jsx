import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilClipboard } from '@coreui/icons'
import { CButton } from '@coreui/react'

const ButtonRelatos = () => {
    const relatosBTN = () => {
        console.log('entrei em relatos')
    }

    return (
        <CButton
            variant='ghost'
            color='link'
            onClick={relatosBTN}
            className='BTN-font'
            size='sm'
        >
            Relatos
            <CIcon className='icon-container' icon={cilClipboard} size="lg" />
        </CButton>
    )
}

export default  ButtonRelatos;
