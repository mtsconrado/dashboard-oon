import React, { useState } from 'react';
import { CCol, CForm, CFormInput, CFormLabel, CFormSelect, CRow } from '@coreui/react';

import '../../css/activeAndInactive.css';
import BtnEditPlan from '../btn/BtnEditPlan';

function ActiveAndInactivePlan() {
    const [op1, setOp1] = useState(true);
    const [op2, setOp2] = useState(false);

    const choiceActive = () => {
        setOp1(true), setOp2(false)
    };
    const choiceInactive = () => {
        setOp1(false), setOp2(true)
    };

    return (
        <>
            <CRow>
                <CCol
                    className={
                        op1 === true
                            ? "nav-plan-active-active"
                            : "nav-plan-active"
                    }
                    onClick={choiceActive}
                >
                    <label>Plano ativo</label>
                </CCol>
                <CCol
                    className={
                        op2 === true
                            ? "nav-plan-inactive-active"
                            : "nav-plan-inactive"
                    }
                    onClick={choiceInactive}
                >
                    <label>Plano inativo</label>
                </CCol>
                <CCol></CCol>
                <CCol></CCol>
            </CRow>
            <br />
            {op1 === true ? (
                <>
                    <CRow className="my-4">
                        <CCol>
                            <CForm>
                                <CFormLabel
                                    htmlFor="name-plan"
                                >
                                    Nome do plano
                                </CFormLabel>
                                <CFormInput
                                    id="name-plan"
                                    type="text"
                                    placeholder="Plano principal"
                                    readOnly
                                />
                            </CForm>
                        </CCol>
                        <CCol>
                            <CForm>
                                <CFormLabel
                                    htmlFor="value-km-plan"
                                >
                                    Valor do km (R$)
                                </CFormLabel>
                                <CFormInput
                                    id="value-km-plan"
                                    label="Valor do km (R$)"
                                    type="text" placeholder="R$ 0,06"
                                    readOnly
                                />
                            </CForm>
                        </CCol>
                    </CRow>
                    <CRow className="my-4">
                        <CCol>
                            <CForm>
                                <CFormLabel
                                    htmlFor="toppings-included-plan"
                                >
                                    Coberturas inclusas no plano
                                </CFormLabel>
                                <CFormSelect
                                    id="toppings-included-plan"
                                    size="lg"
                                    className="form-select"
                                    multiple
                                    disabled
                                >
                                    <option value="1">Roubo e furto</option>
                                    <option value="2">Assistência 24h</option>
                                    <option value="3">Incêndio</option>
                                    <option value="4">Alagamentos</option>
                                    <option value="5">Reboque</option>
                                    <option value="6">Colisão de perda total</option>
                                </CFormSelect>
                            </CForm>
                        </CCol>
                        <CCol>
                            <CForm>
                                <CFormLabel
                                    htmlFor="customizable-coverage-plan"
                                >
                                    Coberturas customizáveis no plano
                                </CFormLabel>
                                <CFormSelect
                                    id="customizable-coverage-plan"
                                    size="lg"
                                    multiple
                                    disabled
                                >
                                    <option value="1"> Colisão de danos parciais</option>
                                    <option value="2">Proteção de danos materiais</option>
                                    <option value="3">Cobertura de vidros</option>
                                    <option value="4">Chaveiro</option>
                                </CFormSelect>
                            </CForm>
                        </CCol>
                    </CRow>
                    <BtnEditPlan />
                </>
            ) : null}

            {/* {op2 === true ? () : null}*/}
        </>
    )
}

export default  ActiveAndInactivePlan