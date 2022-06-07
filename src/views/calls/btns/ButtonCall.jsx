import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'

// importando buttons 
import BtnEditPlan from './bottonsOp/EditPlan'
import BtnConfig from './bottonsOp/Config'
import BtnGenerateChart from './bottonsOp/GenerateChart'
import BtnGenerateReport from './bottonsOp/GenerateReport'

import {
    CButton,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CPopover,
} from '@coreui/react'

const ButtonOp = () => {
    // Buttom de relatorio dos cards
    // pegar pelo PROPS, os dados do card selecionado
    // basear esse button no que o card enviar 

    return (
        <CDropdown>
            <CDropdownToggle caret={false} variant='ghost' color="link" className="p-0">
                <CIcon icon={cilOptions} size="lg" />
            </CDropdownToggle>
            <CDropdownMenu>
                <CDropdownItem>Alterar mês</CDropdownItem>
                <CDropdownItem>Gerar relatório</CDropdownItem>
                <CDropdownItem>Editar gráfico...</CDropdownItem>
                <CDropdownItem>Mais Ferramentas</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}

export default  ButtonOp;