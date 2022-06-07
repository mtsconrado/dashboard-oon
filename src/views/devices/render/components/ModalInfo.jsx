import React from 'react';
import { CCol, CRow } from '@coreui/react';
import { Button, Modal } from 'react-bootstrap';
import { options } from './Status';

import '../../css/modalInfos.css'

function ModalInfo(props) {
    const { infos, infoCustomer, show, handleClose } = props;

    const expiration = () => {
        const day = new Date(infos.plan.expiration).getUTCDay();
        const month = new Date(infos.plan.expiration).getUTCDate();
        const year = new Date(infos.plan.expiration).getUTCFullYear();
        const cDay = day < 10 ? `0${day}` : day;
        const cMonth = month < 10 ? `0${month}` : month;
        return `${cDay}/${cMonth}/${year}`
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="xl"
        >
            <Modal.Header closeButton>
                <Modal.Title className='font-info-title'>Informações do cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CRow>
                    <CCol>
                        <label className='font-info-subTitle'>Dados do cliente</label>
                        <br />
                        <label className='font-info-interTitle'>Nome do cliente</label>
                        <br />
                        <label className='font-info-content'>{infoCustomer.firstName + ' ' + infoCustomer.fullName}</label>
                        <br />
                        <label className='font-info-interTitle'>Documento CPF</label>
                        <br />
                        <label className='font-info-content'>{infoCustomer.document}</label>
                        <br />
                        <label className='font-info-interTitle'> Documento CNH</label>
                        <br />
                        <label className='font-info-content'>{`FALTANDO`}</label>
                        <br />
                        <label className='font-info-interTitle'>Data de nascimento</label>
                        <br />
                        <label className='font-info-content'>{'FALTANDO'}</label>
                        <br />
                        <label className='font-info-interTitle'>E-mail</label>
                        <br />
                        <label className='font-info-content'>{infoCustomer.email}</label>
                        <br />
                        <label className='font-info-interTitle'> Telefone de contato</label>
                        <br />
                        <label className='font-info-content'> {`(${infoCustomer.phone.slice(0, 2)}) ${infoCustomer.phone.slice(2, 7)}-${infoCustomer.phone.slice(7)}`}</label>
                        <br />
                        <hr />

                        <label className='font-info-subTitle'>Dados do plano</label>
                        <br />
                        <label className='font-info-interTitle'> Status do cliente </label>
                        <br />
                        <label className='font-info-content'> {options.find((sts) => sts.value === infos.status).label}</label>
                        <br />
                        <label className='font-info-interTitle'>Status do pagamento</label>
                        <br />
                        <label className='font-info-content'>{infos.paymentStatus === 'ACTIVE' ? 'Ativo' : 'Inativo'}</label>
                        <br />
                        <label className='font-info-interTitle'>Valor base do usuário</label>
                        <br />
                        <label className='font-info-content'>{`R$ ${infos.plan.baseValue.toString().replace('.', ',')}`}</label>
                        <br />
                        <label className='font-info-interTitle'>Valor por Km do plano</label>
                        <br />
                        <label className='font-info-content'>{`R$ ${infos.plan.valuePerKm.toString().replace('.', ',')}`}</label>
                        <br />
                        <label className='font-info-interTitle'>Descrição do plano</label>
                        <br />
                        <label className='font-info-content'>{infos.plan.description}</label>
                        <br />
                        <label className='font-info-interTitle'>Expiração do plano</label>
                        <br />
                        <label className='font-info-content'>{expiration(new Date(infos.plan.expiration))}</label>
                        <br />
                    </CCol>

                    <CCol>
                        <label className='font-info-subTitle'>Endereço</label>
                        <br />
                        {infoCustomer.addresses.map((address, key) => (
                            <div key={key}>
                                <label className='font-info-interTitle'>Logradouro/Nome</label>
                                <br />
                                <label className='font-info-content'> {`${address.address} ${!address.number ? '' : `, ${address.number}`} ${!address.complement ? '' : ` - ${address.complement}`}`}</label>
                                <br />
                                <label className='font-info-interTitle'>Bairro/Distrito</label>
                                <br />
                                <label className='font-info-content'>{address.district}</label>
                                <br />
                                <label className='font-info-interTitle'>Cidade/UF</label>
                                <br />
                                <label className='font-info-content'>{`${address.city}/${address.state.toUpperCase()}`}</label>
                                <br />
                                <label className='font-info-interTitle'> CEP</label>
                                <br />
                                <label className='font-info-content'>{`${address.zipCode.slice(0, 5)}-${address.zipCode.slice(5)}`}</label>
                                <br />
                            </ div>
                        ))}
                    </CCol>

                    <CCol>
                        <label className='font-info-subTitle'>Dados do veículo</label>
                        <br />
                        <label className='font-info-interTitle'>Marca do veículo</label>
                        <br />
                        <label className='font-info-content'>{infos.vehicle.brand}</label>
                        <br />
                        <label className='font-info-interTitle'>Modelo do veículo</label>
                        <br />
                        <label className='font-info-content'>{infos.vehicle.model}</label>
                        <br />
                        <label className='font-info-interTitle'>Ano do veículo</label>
                        <br />
                        <label className='font-info-content'>{infos.vehicle.year}</label>
                        <br />
                        <label className='font-info-interTitle'>Placa de veículo</label>
                        <br />
                        <label className='font-info-content'>{infos.vehicle.plateNumber}</label>
                        <br />
                        <label className='font-info-interTitle'>Chassi do veículo</label>
                        <br />
                        <label className='font-info-content'>{infos.vehicle.chassis}</label>
                        <br />
                        <label className='font-info-interTitle'>cor do veículo</label>
                        <br />
                        <label className='font-info-content'>{infos.vehicle.color}</label>
                        <br />
                        <label className='font-info-interTitle'>Código FIPE</label>
                        <br />
                        <label className='font-info-content'>{infos.vehicle.fipeCode}</label>
                        <br />
                        <label className='font-info-interTitle'>Valor da FIPE</label>
                        <br />
                        <label className='font-info-content'>{`R$ ${infos.vehicle.fipeValue}`}</label>
                        <br />
                        <label className='font-info-interTitle'>Tipo de combustível</label>
                        <br />
                        <label className='font-info-content'>{infos.vehicle.fuel}</label>
                        <br />
                        <label className='font-info-interTitle'>Referência</label>
                        <br />
                        <label className='font-info-content'>{infos.vehicle.reference}</label>
                        <br />
                        <label className='font-info-interTitle'>status</label>
                        <br />
                        <label className='font-info-content'>{infos.vehicle.vehicleStatus === 'ACTIVE' ? 'Ativo' : 'Inativo'}</label>
                        <br />
                    </CCol>
                </CRow>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Sair
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default  ModalInfo;
