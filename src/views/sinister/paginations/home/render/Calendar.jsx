import React, { useState } from 'react';
import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';

const Calender = () => {

    const [value, onChange] = useState(new Date())

    // const [ocorrencias, setOcorrencias] = useState(
    //     [
    //         {protocolo:'1111', status:'Recém aberto', data:'12/12/2022', hora:'12:45'},
    //         {protocolo:'2222', status:'Em andamento', data:'02/02/2023', hora:'14:45'},
    //         {protocolo:'3333', status:'Em vistoria', data:'12/09/2022', hora:'13:45'},
    //         {protocolo:'4444', status:'Concluído', data:'12/08/2022', hora:'16:45'},
    //         {protocolo:'1111', status:'Recém aberto', data:'12/12/2022', hora:'12:45'},
    //         {protocolo:'2222', status:'Em andamento', data:'02/02/2023', hora:'14:45'},
    //         {protocolo:'3333', status:'Em vistoria', data:'12/09/2022', hora:'13:45'},
    //         {protocolo:'4444', status:'Concluído', data:'12/08/2022', hora:'16:45'},
    //         {protocolo:'1111', status:'Recém aberto', data:'12/12/2022', hora:'12:45'},
    //         {protocolo:'2222', status:'Em andamento', data:'02/02/2023', hora:'14:45'},
    //         {protocolo:'1111', status:'Recém aberto', data:'12/12/2022', hora:'12:45'},
    //         {protocolo:'2222', status:'Em andamento', data:'02/02/2023', hora:'14:45'},
    //         {protocolo:'2222', status:'Em andamento', data:'02/02/2023', hora:'14:45'},
    //         {protocolo:'1111', status:'Recém aberto', data:'12/12/2022', hora:'12:45'},
    //         {protocolo:'2222', status:'Em andamento', data:'02/02/2023', hora:'14:45'},

    //     ]
    // )

    return (
        <>
            <div className='calendario-home-css'>
                <Calendar
                    height={180}
                    onChange={onChange}
                    value={value}
                    className='calendario-css'
                />
            </div>
            {/* <div className='ocorrencias-container'>
                <h5>Ocorrências</h5>
                <br />
                <CTable align="middle"  hover responsive>
                    <CTableBody>
                        {ocorrencias.map((i, index) => {
                            if (index < 11){
                                return (
                                    <CTableRow key={index.toString()}>
                                        <CTableDataCell >
                                            <p className='text-calendar-ocorrence'>{i.protocolo}</p>
                                        </CTableDataCell>
                                        {/* <CTableDataCell >
                                            <p className='text-calendar-ocorrence'>{i.status}</p>
                                        </CTableDataCell> *
                                        <CTableDataCell >
                                            <p className='text-calendar-ocorrence'>{i.data}</p>
                                        </CTableDataCell>
                                        <CTableDataCell >
                                            <p className='text-calendar-ocorrence'>{i.hora}</p>
                                        </CTableDataCell>
                                    </CTableRow>
                                )
                            }
                        })}
                        
                    </CTableBody>
                </CTable>
            </div> */}
        </>
    )
}

export default  Calender;
