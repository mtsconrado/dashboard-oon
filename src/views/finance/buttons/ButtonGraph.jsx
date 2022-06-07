import React, { useState } from 'react'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'

import Filter from '../modais/Filter';
import Reports from '../modais/Reports';

import '../css/modaisFilterReports.css';

const ButtonChart = ({ name, saveFilter }) => {
    const [filter, setFilter] = useState(false);
    const [report, setReport] = useState(false);
    
    return (
        <>
            <CDropdown direction="dropstart">
                <CDropdownToggle caret={false} variant='ghost' color="link" className="p-0">
                    <CIcon icon={cilOptions} size="lg" />
                </CDropdownToggle>
                <CDropdownMenu>
                    <CDropdownItem onClick={() => setFilter(true)}>Filtrar...</CDropdownItem>
                    <CDropdownItem onClick={() => setReport(true)}>Gerar relatório...</CDropdownItem>
                    <CDropdownItem>Fazer download...</CDropdownItem>
                </CDropdownMenu>
            </CDropdown>
            <Filter name={name} filter={filter} setFilter={setFilter} saveFilter={saveFilter}/>
            <Reports name={name} report={report} setReport={setReport} saveFilter={saveFilter} />
        </>
    )
}

export default  ButtonChart;
