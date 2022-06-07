import React, {useState} from 'react'
import { Button, Modal,  Form, Container, Row, Col    }  from 'react-bootstrap';

import './infoCar.css'

import {
    CRow,
    CCol,
  } from '@coreui/react'

const Editar = (props) => {

    // Pegar dados do veiculo pelo props
    return (
        <div> 
            
            <CRow>
                <CCol>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <label className='font-sub2'> Grupo </label>
                            <p className='font-text2'> A </p>

                            <label className='font-sub2'> Número SIM</label>
                            <p className='font-text2'> 8938u329823 </p>

                            <label className='font-sub2' > Model</label>
                            <p className='font-text2'> C63 - AMG esportivo </p>

                            <label className='font-sub2'> Contato  </label>
                            <p className='font-text2'> 34 99800989</p>

                            <label className='font-sub2'> Categoria </label>
                            <p className='font-text2'> Esportivo </p>

                            <label className='font-sub2'> Status Pagamento</label>
                            <p className='font-text2'> Ativo ou desativo etc </p>

                            <label className='font-sub2'> valor </label>
                            <p className='font-text2'> R$ 510000 </p>

                            <label className='font-sub2'> Marca do veículo</label>
                            <p className='font-text2'> Mercedes Benz</p>

                            <label className='font-sub2'> Chassi do Veículo </label>
                            <p className='font-text2'> jjhdS23ds-23</p>
                        </Form.Group>
                    </Form> 
                </CCol>
                <CCol>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <label className='font-sub2'> Cidade do usuário </label>
                            <p className='font-text2'> Belo Horizonte </p>
                            <label className='font-sub2'> Cor do veículo</label>
                            <p className='font-text2'> Preto </p>
                            <label className='font-sub2'> Fipe code </label>
                            <p className='font-text2'> xxxssssddd </p>
                            <label className='font-sub2'> Tipos Combustíveis </label>
                            <p className='font-text2'> Gasolina </p>
                            <label className='font-sub2'> Modelo do Carro </label>
                            <p className='font-text2'> AMG - 2020</p>
                            <label className='font-sub2'> Placa do Veículo </label>
                            <p className='font-text2'> XXXX-4334 </p>
                            <label className='font-sub2'> Usuário Status </label>
                            <p className='font-text2'> Ativo </p>
                            <label className='font-sub2'> Zip Code</label>
                            <p className='font-text2'> 34788-89 </p>
                            <label className='font-sub2'> Estado </label>
                            <p className='font-text2'> MG </p>
                        </Form.Group>
                    </Form> 
                </CCol>
            </CRow>

                    
                
               
            

        </div>
    )
}

export default  Editar 