import React, { useState } from "react"
import Calendar from "react-calendar"
import { CCard, CCardBody } from '@coreui/react'

import 'react-calendar/dist/Calendar.css';

const Calendar2 = () => {

    const [value, onChange] = useState(new Date())

    const [pessoas, setPessoas] = useState(22) // caso fizer alguma requisicao, utilizar aqui até carregar

    if (pessoas == '') {
        return (
            <>
                <h5>Loading ... </h5>
            </>
        )
    } else {
        return (
            <Calendar
                onChange={onChange}
                value={value}
                className='calendario'
            />
        )
    }
}

export default  Calendar2