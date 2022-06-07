import React from 'react'
import { FaCheckCircle, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';

import '../css/status.css'

const Survey = (props) => {
    if (props.status.vistoria == 'atual') {
        return (
            <>
                <div className='container-status'>
                    <FaExclamationCircle className="mb-2 icon-status" color="#FFD809" size={50} />
                    <label> Vistoria </label>
                </div>
            </>
        )
    } else if (props.status.vistoria == 'concluido') {
        return (
            <>
                <div className='container-status'>
                    <FaCheckCircle color='#00F781' size={50} className="mb-2 icon-status" />
                    <label> Vistoria </label>
                </div>
            </>
        )

    } else if (props.status.vistoria == 'falha') {
        return (
            <>
                <div className='container-status'>
                    <FaTimesCircle className="mb-2" color='red' size={50} />
                    <label> Vistoria </label>
                </div>
            </>
        )

    } else {
        // SERIA FECHADO
        return (
            <>
                <div className='container-status'>
                    <FaCheckCircle className="mb-2 icon-status-loading" color='#C4C4C4' size={50} />
                    <label> Vistoria </label>
                </div>
            </>
        )
    }
}

export default  Survey;
