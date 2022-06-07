import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilEnvelopeClosed } from '@coreui/icons'
import { CButton } from '@coreui/react'

const ButtonSentEmail = () => {
    const buttonEmail = () => {
        console.log('Button enviar email')
    }

    return (
        <CButton
            variant='ghost'
            color='link'
            onClick={buttonEmail}
            className='BTN-font'
            size='sm'
        >
            Enviar por e-mail
            <CIcon className='icon-container' icon={cilEnvelopeClosed} size="lg" />
        </CButton>
    )
}

export default  ButtonSentEmail;
