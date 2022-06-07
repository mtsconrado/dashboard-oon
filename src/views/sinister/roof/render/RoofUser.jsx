import React from 'react'

import { CTable, CTableRow, CTableHead, CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react'

const RoofUser = (props) => {
    const data = [
        { cobertura: 'Compreensiva 01', verba: 'LMI Casco', limiteMax: '32.478,57', franquia: '32.478,57', fatorAjuste: '0' },
        { cobertura: 'CR ou Desc. FQR', verba: '07 D BAS/DESC FRQ', limiteMax: '48,89', franquia: '48,89', fatorAjuste: '0' },
        { cobertura: 'Carro Reserva', verba: '15 dias basico', limiteMax: '47,90', franquia: '47,90', fatorAjuste: '0' },
        { cobertura: 'Assistencia', verba: 'Completo PL3', limiteMax: '238,90', franquia: '238,90', fatorAjuste: '0' },
        { cobertura: 'RCF-V', verba: 'RCFV-DM', limiteMax: '12.989,90', franquia: '12.989,90', fatorAjuste: '0' },
        { cobertura: 'RCF-3', verba: 'RCFV-DC', limiteMax: '11.578,90', franquia: '11.578,90', fatorAjuste: '0' },
        { cobertura: 'Danos morais', verba: 'Danos Mortais-TAB', limiteMax: '2.567,89', franquia: '2.567,89', fatorAjuste: '0' },
    ]

    return (
        <div className='container-occurrence-data'>
            <label className='title-container-card'>Coberturas</label>
            <div className='container-content-card'>
                <CTable borderless small>
                    <CTableHead style={{ borderBottom: 'inset' }}>
                        <CTableRow>
                            <CTableHeaderCell className='conteudo-label-title' scope="col">Cobertura</CTableHeaderCell>
                            <CTableHeaderCell className='conteudo-label-title' scope="col">Verba</CTableHeaderCell>
                            <CTableHeaderCell className='conteudo-label-title' scope="col">Limite Máx. Indenização</CTableHeaderCell>
                            <CTableHeaderCell className='conteudo-label-title' scope="col">Franquia</CTableHeaderCell>
                            <CTableHeaderCell className='conteudo-label-title' scope="col">Fator de ajuste</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody >
                        {data.map((item, index) => {
                            return (
                                <CTableRow key={index.toString()}>
                                    <CTableDataCell style={{color: '#6D6D6D'}} >{item.cobertura}</CTableDataCell>
                                    <CTableDataCell style={{color: '#6D6D6D'}}> {item.verba}</CTableDataCell>
                                    <CTableDataCell style={{color: '#6D6D6D'}}>R$ {item.limiteMax}</CTableDataCell>
                                    <CTableDataCell style={{color: '#6D6D6D'}}>R$ {item.franquia}</CTableDataCell>
                                    <CTableDataCell style={{color: '#6D6D6D'}}>R$ {item.fatorAjuste}</CTableDataCell>
                                </CTableRow>
                            )
                        })}
                    </CTableBody>
                </CTable>
            </div>
        </div>
    )
}

export default  RoofUser;
