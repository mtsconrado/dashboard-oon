import React, { useEffect, useState } from 'react'
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'

function BtnAddPlan({ savePlan }) {
    const [visible, setVisible] = useState(false);
    const [customize, setCustomize] = useState([]);
    const [fixed, setFixed] = useState([]);
    const [finalKmValue, setFinalKmValue] = useState(0);
    const [namePlan, setNamePlan] = useState('');

    const coberturas = [
        { name: 'Alagamentos', cusFixed: false, valueKm: 0.02 },
        { name: 'Assistência 24h', cusFixed: false, valueKm: 0.01 },
        { name: 'Chaveiro', cusFixed: false, valueKm: 0.01 },
        { name: 'Colisão de danos parciais', cusFixed: false, valueKm: 0.03 },
        { name: 'Colisão de perda total', cusFixed: false, valueKm: 0.01 },
        { name: 'Incêndio', cusFixed: false, valueKm: 0.02 },
        { name: 'Proteção de danos materiais', cusFixed: false, valueKm: 0.02 }
    ]

    useEffect(() => {
        coberturas.map((cobertura) => {
            customize.push(cobertura)
        })
    }, [])

    const addFixedCoverage = (valueKm, name) => {
        setFinalKmValue(finalKmValue + valueKm)
        setFixed([...fixed, { name, cusFixed: false, valueKm }])
        const toppings = customize.filter((c) => c.name != name);

        const sort = [...toppings, { name, cusFixed: true }].sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });

        setCustomize(sort)
    }

    const removeFixedCovers = (valueKm, name) => {
        const zero = finalKmValue - valueKm;
        Math.sign(zero) != -1 ? setFinalKmValue(zero)
            : setFinalKmValue(0)
        const toppingsFixed = fixed.filter((c) => c.name != name);

        setFixed(toppingsFixed);

        const toppingsCustomize = customize.filter((c) => c.name != name);

        const sort = [...toppingsCustomize, { name, cusFixed: false, valueKm }].sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });

        setCustomize(sort)

    }

    return (
        <>
            <CButton
                onClick={() => setVisible(!visible)}
            >
                Adicionar plano
            </CButton>
            <CModal
                alignment="center"
                size='xl'
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <CModalHeader>
                    <CModalTitle>Adicionar plano</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CRow>
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
                                    className='inputs-edit-plan'
                                    onChange={({ target }) => setNamePlan(target.value)}
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
                                    type="text"
                                    placeholder="R$ 0,06"
                                    className='inputs-edit-plan'
                                    value={`R$ ${finalKmValue.toFixed(2).replace('.', ',')}`}
                                    disabled
                                />
                            </CForm>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol className='mt-4'>
                            <p>Selecione as coberturas fixas para o plano:</p>
                            <p>COBERTURAS FIXAS</p>
                            <CRow xs={{ cols: 4 }} className="p-2">
                                {fixed ? fixed.map(({ name, valueKm }, key) => (
                                    <CCol key={key} className='check-plan my-1 py-2'>
                                        <CFormCheck
                                            id={`${name}-fixed`}
                                            value={name}
                                            label={name}
                                            onChange={() => removeFixedCovers(valueKm, name)}
                                            checked
                                        />
                                    </CCol>
                                )) : null}
                            </CRow>
                        </CCol>
                        <CRow>
                            <CCol className='mt-2'>
                                <p>COBERTURAS CUSTOMIZÁVEIS</p>
                                <CRow xs={{ cols: 4 }} className="p-2">
                                    {customize ? customize.map(({ name, cusFixed, valueKm }, key) => (
                                        <CCol key={key} className='check-plan my-1 py-2'>
                                            <CFormCheck
                                                id={`${name}-customize`}
                                                label={name}
                                                onChange={() => addFixedCoverage(valueKm, name)}
                                                disabled={cusFixed}
                                                checked={cusFixed}
                                            />
                                        </CCol>
                                    )) : null}
                                </CRow>
                            </CCol>
                        </CRow>
                    </CRow>
                </CModalBody>
                <CModalFooter>
                    <CButton
                        color="secondary"
                        onClick={() => setVisible(false)}
                    >
                        Cancelar
                    </CButton>
                    <CButton
                        onClick={() => savePlan(
                            namePlan,
                            finalKmValue,
                            customize,
                            fixed,
                        )}
                        color="primary"
                    >
                        Salvar
                    </CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default  BtnAddPlan;
