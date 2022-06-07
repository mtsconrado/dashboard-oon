
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';
import React from 'react'

import '../../css/users.css'

function DropdownFilter() {
    return (
    <>
       <CDropdown>
            <CDropdownToggle 
            color="secondary"
            className='icon-css filtro'
            >
                Filtro
            </CDropdownToggle>
            <CDropdownMenu >
                <span className="filter-text">
                    FILTRAR POR
                </span> 
                <CDropdownItem onClick={() => console.log('deu')}>Data de filiação: mais recente</CDropdownItem>
                <CDropdownItem onClick={() => console.log('deu')}>Data de filiação: mais antiga</CDropdownItem>
                <CDropdownItem onClick={() => console.log('deu')}>Abertura de sinistros: mais recente</CDropdownItem>
                <CDropdownItem onClick={() => console.log('deu')}>Abertura de sinistros: mais antiga</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    </>
    )
}
    
export default  DropdownFilter;
