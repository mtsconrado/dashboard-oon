import React, { useState } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap';
import { CButton, CFormSelect } from '@coreui/react'

import { configCookies } from 'src/config';
import StatusSituation from './StatusSituation';

import '../../css/status.css'

export const options = [
    { label: 'Cancelado', value: 'CANCELLED' },
    { label: 'Bloqueado', value: 'BLOCKED' },
    { label: 'Sicronizado', value: 'SYNCHRONIZED' },
    { label: 'Enviado', value: 'SENT' },
    { label: 'Não aprovado', value: 'REPROVED' },
    { label: 'Análise documentos', value: 'IN_ANALYSE' },
    { label: 'Documento aprovado', value: 'APPROVED' },
    { label: 'Falha no pagamento', value: 'PAYMENT_FAILURE' },
    //    { lal: 'Veículo aprovado', value: ''}, // color blue
    //    { label: 'Falha fotos veículo', value: ''}, // color orange
    //    { label: 'Análise veículo', value: ''}, // color yellow
    //    { label: 'Erro de documentos', value: ''}, // color orange
    //    { label: 'Pagamento aprovado', value: ''}, // color blue
    //    { label: 'Análise pagamento', value: '' }, // color yellow
    //    { label: 'Aguardando análise', value: '' }, // color orange
]

const Status = (props) => {
    const { status, callBack } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const openModal = () => setShow(true);
    const [choice, setChoice] = useState(status.status)

    const updateStatus = (e) => {
        setChoice(e.target.value)
    }

    const salvarEdicoes = () => {
        let upStatus = { status: choice }
        const config = configCookies()

        const urlDomain = 'http://dashboardbff.oonpayperuse.com.br' //'http://localhost:8080'
        axios
            .patch(`${urlDomain}/signatures/${status.id}`, upStatus, config)
            .then(() => {
                setShow(false)
                callBack()
            })
            .catch(r => {
                console.log('error', r), alert('Login expirado'), window.location.reload()
            })
    }

    return (
        (
            <>
                {status.status == 'WAITING_CHECK_CREDIT_CARD' ?
                    (
                        <StatusSituation title={'Aguardando pagamento'} color={'yellow'} style={{ fontSize: '14px', padding: '3px' }} openModal={openModal} />
                    )
                    : null
                }

                {status.status == 'IN_ANALYSE' ?
                    (
                        <StatusSituation title={'Análise documentos'} color={'yellow'} openModal={openModal} />
                    ) : null}

                {status.status == 'APPROVED' ?
                    (
                        <StatusSituation title={'Documento aprovado'} color={'blue'} openModal={openModal} />
                    )
                    : null}

                {status.status == 'BLOCKED' ?
                    (
                        <StatusSituation title={'Bloqueado'} color={'red'} openModal={openModal} />
                    )
                    : null}

                {status.status == 'SUSPENDED' ?
                    (
                        <StatusSituation title={'Suspenso'} color={'orange'} openModal={openModal} />
                    )
                    : null}
                {status.status == 'DISABLED' ?
                    (
                        <StatusSituation title={'Desabilitado'} color={'red'} openModal={openModal} />
                    )
                    : null}

                {status.status == 'SENT' ?
                    (
                        <StatusSituation title={'Enviado'} color={'blue'} openModal={openModal} />
                    )
                    : null}

                {status.status == 'SYNCHRONIZED' ?
                    (
                        <StatusSituation title={'Sicronizado'} color={'green'} openModal={openModal} />
                    )
                    : null}

                {status.status == 'CANCELLED' ?
                    (
                        <StatusSituation title={'Cancelado'} color={'red'} openModal={openModal} />
                    )
                    : null}

                {status.status == 'REPROVED' ?
                    (
                        <StatusSituation title={'Não aprovado'} color={'red'} openModal={openModal} />
                    )
                    : null}

                {status.status == 'PAYMENT_FAILURE' ?
                    (
                        <StatusSituation title={'Falha no pagamento'} color={'orange'} openModal={openModal} />
                    )
                    : null}

                <Modal
                    show={show}
                    onHide={handleClose}
                    size="sm"
                >
                    <Modal.Body>
                        <h4>Alterar status</h4>
                        <br />
                        <label>Alterar status do cliente:</label>
                        <br />
                        <label><b>{status.customer.fullName}</b></label>
                        <br />
                        <br />
                        <CFormSelect
                            aria-label="Default select example"
                            options={options}
                            value={choice}
                            onChange={updateStatus}
                        />
                        <br />
                        <br />
                        <CButton color="dark" onClick={salvarEdicoes} size='sm' >
                            Salvar Alterações
                        </CButton>
                    </Modal.Body>
                </Modal>
            </>
        )
    )


}

export default  Status;
