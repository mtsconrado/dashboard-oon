import React, { useState } from 'react';
import { cilOptions } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';
import ModalFilter from '../components/ModalFilter';

function BtnFilter({ saveFilter }) {
    const [filter, setFilter] = useState(false);
    const [report, setReport] = useState(false);

    return (
        <>
            <CDropdown>
                <CDropdownToggle
                    caret={false}
                    variant='ghost'
                    color="link"
                    className="p-0"
                >
                    <CIcon icon={cilOptions} size="lg" />
                </CDropdownToggle>
                <CDropdownMenu>
                    <CDropdownItem onClick={() => setFilter(true)}>Filtrar...</CDropdownItem>
                    <CDropdownItem>Gerar relatório...</CDropdownItem>
                    <CDropdownItem>Fazer download...</CDropdownItem>
                </CDropdownMenu>
            </CDropdown>

            <ModalFilter filter={filter} setFilter={setFilter} saveFilter={saveFilter} />
        </>
    )
}

export default  BtnFilter