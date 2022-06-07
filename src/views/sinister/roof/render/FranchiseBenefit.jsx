import React from 'react';
import { CTable, CTableRow, CTableHead, CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react';

const FranchiseBenefit = (props) => {
    const data = [
        { tipoDesc: 'Tabelo de benefício', DescConcedido: 'Segurado', valor: '123,90' },
        { tipoDesc: 'Desconto Contratado', DescConcedido: 'Segurado', valor: '24.424,90' },
    ]

    return (
        <div className='container-occurrence-data'>
            <label className='title-container-card'> Benefício: desconto na franquia </label>
            <div className='container-content-card'>
                <CTable borderless small>
                    <CTableHead style={{ borderBottom: 'inset' }}>
                        <CTableRow>
                            <CTableHeaderCell className='conteudo-label-title' scope="col"> Tipo de desconto na franquia</CTableHeaderCell>
                            <CTableHeaderCell className='conteudo-label-title' scope="col"> Desconto concedido por</CTableHeaderCell>
                            <CTableHeaderCell className='conteudo-label-title' scope="col"> Valor</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {data.map((item, index) => {
                            return (

                                <CTableRow key={index.toString()}>
                                    <CTableDataCell style={{color: '#6D6D6D'}}> {item.tipoDesc}   </CTableDataCell>
                                    <CTableDataCell style={{color: '#6D6D6D'}}> {item.DescConcedido}       </CTableDataCell>
                                    <CTableDataCell style={{color: '#6D6D6D'}}>R$ {item.valor}   </CTableDataCell>
                                </CTableRow>
                            )
                        })}
                    </CTableBody>
                </CTable>
                <p className='text-end pt-3' style={{ borderTop: 'inset', color: '#6D6D6D' }}> Franquia a pagar: R$ 23.890,99 </p>
            </div>
        </div>
    )
}

export default  FranchiseBenefit