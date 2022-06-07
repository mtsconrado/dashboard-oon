import React, { useState } from 'react';
import Calendar from "react-calendar";
import { CTable, CTableBody, CTableDataCell, CTableRow, CCard, CCardBody } from '@coreui/react';

import 'react-calendar/dist/Calendar.css';

const CalendarAtts = () => {
    const [value, onChange] = useState(new Date())

    const [pessoas, setPessoas] = useState(22) // caso fizer alguma requisicao, utilizar aqui até carregar

    const [atualizacoes, setAtualizacoes] = useState(
        [
            { protocolo: '23232', status: 'Aberto', data: '12/01/2022', hora: '12:20' },
            { protocolo: '23562', status: 'Encerrado', data: '12/01/2022', hora: '12:30' },
            { protocolo: '89032', status: 'Aberto', data: '12/01/2022', hora: '12:50' }
        ]
    )

    return (
        <CCard className='card-calender'>
            <CCardBody>
                <Calendar
                    onChange={onChange}
                    value={value}
                    className='calender'
                />
                <hr />
                <label>
                    Atualizações
                </label>
                <CTable>
                    <CTableBody>
                        {atualizacoes.map((item, index) => (
                            <CTableRow key={index.toString()}>
                                <CTableDataCell>
                                    {item.protocolo}
                                </CTableDataCell>

                                <CTableDataCell>
                                    {item.status}
                                </CTableDataCell>

                                <CTableDataCell className="px-0">
                                    {`${item.data} às ${item.hora}`}
                                </CTableDataCell>

                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
    )
}

export default  CalendarAtts;
