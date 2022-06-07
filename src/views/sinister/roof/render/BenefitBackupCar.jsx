import React from 'react';
import { CRow, CCol } from '@coreui/react';

const BenefitBackupCar = () => {
    return (
        <div className='container-occurrence-data'>
                <label className='title-container-card'> Benefício: carro reserva</label>
                <div className='container-content-card'>
                    <CRow >
                        <CCol>
                            <label className='conteudo-label-title'> Data/Hora da retirada do veículo </label>
                            <br />
                            <label className='conteudo-label-info'> 27/12/2021 as 09:00:00 </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-title'> Data/hora de devolução do veículo </label>
                            <br />
                            <label className='conteudo-label-info'> 05/01/2022 as 18:00:00 </label>
                            <br />
                        </CCol>
                    </CRow>
                </div>
            </div>
    )
}

export default  BenefitBackupCar;
