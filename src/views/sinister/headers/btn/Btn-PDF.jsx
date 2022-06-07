import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSave } from '@coreui/icons'
import { CButton } from '@coreui/react'

const ButtonPDF = () => {

    const btnPDF = () => {
        console.log('Enntrei no BTN PDF')
    }

    return (
        <CButton
            variant='ghost'
            color='link'
            onClick={btnPDF}
            className='BTN-font'
            size='sm'
        >
            Salvar PDF
            <CIcon className='icon-container' icon={cilSave} size="lg" />
        </CButton>
    )
}

export default  ButtonPDF