import React, { useState } from "react";
import axios from "axios";
import { FaUserEdit } from "react-icons/fa";
import { Button, Modal, Spinner } from "react-bootstrap";
import { CRow, CButton, CCol, CFormInput } from "@coreui/react";

import UrlDomain, { configCookies } from "../../../../config";

import "../../css/btnEditCostumer.css";

const BtnEditCostumer = (props) => {
    const { data, callBack } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [dataCostumer, setDataCostumer] = useState("");
    // INFORMAÇOES do cliente
    const [address, setAddress] = useState();
    const [firstName, setFirstName] = useState(data.customer.firstName);
    const [fullName, setFullName] = useState(data.customer.fullName);
    const [document, setDocument] = useState(data.customer.document);
    const [email, setEmail] = useState(data.customer.email);
    const [phone, setPhone] = useState(data.customer.phone);
    const userFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const userFullName = (e) => {
        setFullName(e.target.value);
    };
    const userDocument = (e) => {
        setDocument(e.target.value);
    };
    const userEmail = (e) => {
        setEmail(e.target.value);
    };
    const userPhone = (e) => {
        setPhone(e.target.value);
    };
    // informacoes do cliente
    const [brand, setBrand] = useState(data.vehicle.brand);
    const [chassis, setChassis] = useState(data.vehicle.chassis);
    const [cityVehicle, setCityVehicle] = useState(data.vehicle.city);
    const [colorVehicle, setColorVehicle] = useState(data.vehicle.color);
    const [fipeCode, setFipeCode] = useState(data.vehicle.fipeCode);
    const [fipeValue, setFipeValue] = useState(data.vehicle.fipeValue);
    const [fuel, setFuel] = useState(data.vehicle.fuel);
    const [model, setModel] = useState(data.vehicle.model);
    const [plateNumber, setPlateNumber] = useState(data.vehicle.plateNumber);
    const [reference, setReference] = useState(data.vehicle.reference);
    const [state, setState] = useState(data.vehicle.state);
    const [yearVehicle, setYearVehicle] = useState(data.vehicle.year);
    const [Status, setStatus] = useState(data.vehicle.vehicleStatus);
    const setVehicleBrand = (e) => {
        setBrand(e.target.value);
    };
    const setVehicleChassis = (e) => {
        setChassis(e.target.value);
    };
    const setVehicleCity = (e) => {
        setCityVehicle(e.target.value);
    };
    const setVehicleColor = (e) => {
        setColorVehicle(e.target.value);
    };
    const setVehicleFipeCode = (e) => {
        setFipeCode(e.target.value);
    };
    const setVehicleFipeValue = (e) => {
        setFipeValue(e.target.value);
    };
    const setVehicleFuel = (e) => {
        setFuel(e.target.value);
    };
    const setVehicleModel = (e) => {
        setModel(e.target.value);
    };
    const setVehiclePlateNumber = (e) => {
        setPlateNumber(e.target.value);
    };
    const setVehicleReference = (e) => {
        setReference(e.target.value);
    };
    const setVehicle = (e) => {
        setState(e.target.value);
    };
    const setVehicleYear = (e) => {
        setYearVehicle(e.target.value);
    };
    const setVehicleStatus = (e) => {
        setStatus(e.target.value);
    };

    // informações
    const [addressStreet, setAddressStreet] = useState();
    const [complement, setComplement] = useState();
    const [district, setDistrict] = useState();
    const [number, setNumber] = useState();
    const [zipCode, setZipCode] = useState();
    const [stateUser, setStateUser] = useState();
    const [city, setCity] = useState();
    const [idAddress, setIdAddress] = useState();
    const AddressAddressStreet = (e) => {
        setAddressStreet(e.target.value);
    };
    const AddressComplement = (e) => {
        setComplement(e.target.value);
    };
    const AddressDistrict = (e) => {
        setDistrict(e.target.value);
    };
    const Addressnumber = (e) => {
        setNumber(e.target.value);
    };
    const AddresszipCode = (e) => {
        setZipCode(e.target.value);
    };
    const AddressStateUser = (e) => {
        setStateUser(e.target.value);
    };
    const AddressCity = (e) => {
        setCity(e.target.value);
    };

    const [op1, setOp1] = useState(true);
    const [op2, setOp2] = useState(false);
    const [op3, setOp3] = useState(false);
    const choiceUser = () => {
        setOp1(true), setOp2(false), setOp3(false);
    };
    const choiceAddress = () => {
        setOp1(false), setOp2(true), setOp3(false);
    };
    const choiceVehicle = () => {
        setOp1(false), setOp2(false), setOp3(true);
    };

    const [flag, setFlag] = useState(0);
    function openModal(d) {
        const handleShow = setShow(true);
        const config = configCookies()

        axios
            .get(`${UrlDomain}/customers/${d.customer.id}`, config)
            .then((response) => {
                setAddress(response.data.addresses);
                setDataCostumer(response);
            })
            .catch((r) => {
                console.log("error", r),
                    alert("Login expirado"),
                    window.location.reload();
            });
    }

    function verify() {
        // verificacoes no telefone
        setFlag(0);
        if (phone.length == 11 && phone[2] === "9") {
            saveCustomer();
        } else {
            setFlag(1);
        }
    }

    function saveCustomer() {
        let upStatus = {
            firstName: firstName,
            fullName: fullName,
            document: document,
            email: email,
            phone: phone,
        };
        axios
            .patch(
                `${UrlDomain}/customers/${dataCostumer.customer.id}`,
                upStatus,
                config
            )
            .then(() => {
                callBack();
                setShow(false);
            })
            .catch((r) => {
                console.log("error", r),
                    alert("Login expirado"),
                    window.location.reload();
            });
    }

    function saveVehicle() {
        let upStatus = {
            brand: brand,
            chassis: chassis,
            city: cityVehicle,
            color: colorVehicle,
            fipeCode: fipeCode,
            fipeValue: fipeValue,
            fuel: fuel,
            model: model,
            plateNumber: plateNumber,
            reference: reference,
            state: state,
            vehicleStatus: status,
            year: yearVehicle,
        };

        axios
            .patch(
                `${UrlDomain}/customers/${data.customer.id}`,
                upStatus,
                config
            )
            .then((response) => {
                callBack();
                setShow(false);
            })
            .catch((r) => {
                console.log("error", r),
                    alert("Login expirado"),
                    window.location.reload();
            });
    }
    const [flagChoiceAddres, setFlagChoiceAddres] = useState(false);
    const [addressChoice, setAddressChoice] = useState({ address: "" });
    function getValueAddress(e) {
        setFlagChoiceAddres(true);
        setAddressChoice(e);
        setIdAddress(e.id);
        setAddressStreet(e.address);
        setComplement(e.complement);
        setDistrict(e.district);
        setNumber(e.number);
        setZipCode(e.zipCode);
        setStateUser(e.state);
        setCity(e.city);
    }

    function backAddress() {
        setFlagChoiceAddres(false);
    }

    function saveAddress() {
        let save = {
            address: addressStreet,
            complement: complement,
            district: district,
            number: number,
            zipCode: zipCode,
            state: state,
            city: city,
        };
        axios
            .patch(`${UrlDomain}/addresses/${idAddress}`, save, config)
            .then(() => {
                callBack();
                setShow(false);
            })
            .catch((r) => {
                console.log("error", r),
                    alert("Login expirado"),
                    window.location.reload();
            });
    }

    return (
        <div>
            <CButton
                size="sm"
                onClick={() => openModal(data)}
                color="white"
            >
                <FaUserEdit
                    name="user-edit"
                    size={24}
                    color="black"
                />
            </CButton>

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
            >
                <div className="container-costumer-header">
                    <h3> Editar informações do cliente </h3>
                </div>
                <hr />
                {data !== "" ? (
                    <Modal.Body>
                        <CRow>
                            <CCol
                                className={
                                    op1 === true
                                        ? "nav-costumer-active"
                                        : "nav-costumer"
                                }
                                onClick={choiceUser}
                            >
                                <label> Dados do cliente </label>
                            </CCol>
                            <CCol
                                className={
                                    op2 === true
                                        ? "nav-address-active"
                                        : "nav-address"
                                }
                                onClick={choiceAddress}
                            >
                                <label> Dados do endereço </label>
                            </CCol>
                            <CCol
                                className={
                                    op3 === true
                                        ? "nav-vehicle-active"
                                        : "nav-vehicle"
                                }
                                onClick={choiceVehicle}
                            >
                                <label> Dados do veículo </label>
                            </CCol>
                        </CRow>
                        <br />
                        <CRow>
                            {op1 === true ? (
                                <CRow>
                                    <CCol>
                                        <label className="label-customer-input">
                                            {" "}
                                            Primeiro nome
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={firstName}
                                            value={firstName}
                                            onChange={userFirstName}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            {" "}
                                            Nome completo{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={fullName}
                                            value={fullName}
                                            onChange={userFullName}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            {" "}
                                            Documento{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={document}
                                            value={document}
                                            onChange={userDocument}
                                        />
                                        <br />
                                    </CCol>
                                    <CCol>
                                        <label className="label-customer-input">
                                            {" "}
                                            E-mail{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={email}
                                            value={email}
                                            onChange={userEmail}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            {" "}
                                            Telefone{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={phone}
                                            value={phone}
                                            onChange={userPhone}
                                        />
                                        <br />
                                    </CCol>

                                    <hr />
                                    <div className="container-customer-footer">
                                        <Button
                                            className="btn-customer-exit"
                                            variant="secondary"
                                            onClick={handleClose}
                                        >
                                            Sair
                                        </Button>
                                        <Button
                                            onClick={verify}
                                            className="btn-customer-save"
                                            variant="dark"
                                        >
                                            Salvar Alterações
                                        </Button>
                                    </div>
                                </CRow>
                            ) : null}

                            {op2 === true ? (
                                <div>
                                    {flagChoiceAddres === false ? (
                                        <div className="container-choice-address">
                                            <h5>
                                                {" "}
                                                Escolha um endereço para edição{" "}
                                            </h5>
                                            <hr />

                                            {address.map((item) => {
                                                return (
                                                    <div key={item}>
                                                        <CRow>
                                                            <CCol>
                                                                <label className="label-customer-input">
                                                                    {" "}
                                                                    Endereço
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    {" "}
                                                                    -{" "}
                                                                    {
                                                                        item.address
                                                                    }{" "}
                                                                </label>
                                                            </CCol>
                                                            <CCol>
                                                                <CButton
                                                                    color="dark"
                                                                    variant="outline"
                                                                    onClick={() => {
                                                                        getValueAddress(
                                                                            item
                                                                        );
                                                                    }}
                                                                >
                                                                    {" "}
                                                                    Selecionar{" "}
                                                                </CButton>
                                                            </CCol>
                                                        </CRow>
                                                        <br />
                                                        <br />
                                                        <hr />
                                                        <div className="container-customer-footer">
                                                            <Button
                                                                className="btn-customer-exit"
                                                                variant="secondary"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                            >
                                                                Sair
                                                            </Button>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <CRow>
                                            <CCol>
                                                <label className="label-customer-input">
                                                    {" "}
                                                    Endereço
                                                </label>
                                                <CFormInput
                                                    className=""
                                                    type="text"
                                                    placeholder={
                                                        addressChoice.address
                                                    }
                                                    value={addressStreet}
                                                    onChange={
                                                        AddressAddressStreet
                                                    }
                                                />
                                                <br />

                                                <label className="label-customer-input">
                                                    {" "}
                                                    Complemento{" "}
                                                </label>
                                                <CFormInput
                                                    className=""
                                                    type="text"
                                                    placeholder={
                                                        addressChoice.complement
                                                    }
                                                    value={complement}
                                                    onChange={AddressComplement}
                                                />
                                                <br />

                                                <label className="label-customer-input">
                                                    {" "}
                                                    Bairro{" "}
                                                </label>
                                                <CFormInput
                                                    className=""
                                                    type="text"
                                                    placeholder={
                                                        addressChoice.district
                                                    }
                                                    value={district}
                                                    onChange={AddressDistrict}
                                                />
                                                <br />

                                                <label className="label-customer-input">
                                                    {" "}
                                                    Número{" "}
                                                </label>
                                                <CFormInput
                                                    className=""
                                                    type="text"
                                                    placeholder={
                                                        addressChoice.number
                                                    }
                                                    value={number}
                                                    onChange={Addressnumber}
                                                />
                                                <br />
                                            </CCol>
                                            <CCol>
                                                <label className="label-customer-input">
                                                    {" "}
                                                    CEP{" "}
                                                </label>
                                                <CFormInput
                                                    className=""
                                                    type="text"
                                                    placeholder={
                                                        addressChoice.zipCode
                                                    }
                                                    value={zipCode}
                                                    onChange={AddresszipCode}
                                                />
                                                <br />

                                                <label className="label-customer-input">
                                                    {" "}
                                                    Estado{" "}
                                                </label>
                                                <CFormInput
                                                    className=""
                                                    type="text"
                                                    placeholder={
                                                        addressChoice.state
                                                    }
                                                    value={stateUser}
                                                    onChange={AddressStateUser}
                                                />
                                                <br />

                                                <label className="label-customer-input">
                                                    {" "}
                                                    Cidade{" "}
                                                </label>
                                                <CFormInput
                                                    className=""
                                                    type="text"
                                                    placeholder={
                                                        addressChoice.city
                                                    }
                                                    value={city}
                                                    onChange={AddressCity}
                                                />
                                                <br />
                                                <br />

                                                <CButton
                                                    className="btn-back-address"
                                                    color="dark"
                                                    onClick={backAddress}
                                                >
                                                    {" "}
                                                    Voltar aos endereços{" "}
                                                </CButton>
                                            </CCol>

                                            <hr />
                                            <div className="container-customer-footer">
                                                <Button
                                                    className="btn-customer-exit"
                                                    variant="secondary"
                                                    onClick={handleClose}
                                                >
                                                    Sair
                                                </Button>
                                                <Button
                                                    onClick={saveAddress}
                                                    className="btn-customer-save"
                                                    variant="dark"
                                                >
                                                    Salvar Alterações
                                                </Button>
                                            </div>
                                        </CRow>
                                    )}
                                </div>
                            ) : null}

                            {op3 === true ? (
                                <CRow>
                                    <CCol>
                                        <label className="label-customer-input">
                                            {" "}
                                            Marca
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={brand}
                                            disabled
                                            value={brand}
                                            onChange={setVehicleBrand}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            {" "}
                                            Chassis{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={chassis}
                                            disabled
                                            value={chassis}
                                            onChange={setVehicleChassis}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            {" "}
                                            Cidade do veículo{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={cityVehicle}
                                            disabled
                                            value={cityVehicle}
                                            onChange={setCityVehicle}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            {" "}
                                            Cor do veículo{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={colorVehicle}
                                            disabled
                                            value={colorVehicle}
                                            onChange={setVehicleColor}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            {" "}
                                            Modelo{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={model}
                                            disabled
                                            value={model}
                                            onChange={setModel}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            {" "}
                                            Status{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={status}
                                            disabled
                                            value={status}
                                            onChange={setStatus}
                                        />
                                        <br />
                                    </CCol>
                                    <CCol>
                                        <label className="label-customer-input">
                                            {" "}
                                            Código Fipe{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={fipeCode}
                                            value={fipeCode}
                                            disabled
                                            onChange={setVehicleFipeCode}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            {" "}
                                            Valor Fipe{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={fipeValue}
                                            value={fipeValue}
                                            disabled
                                            onChange={setFipeValue}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            {" "}
                                            Tipo de Combustível{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={fuel}
                                            value={fuel}
                                            disabled
                                            onChange={setFuel}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            {" "}
                                            Placa{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={plateNumber}
                                            value={plateNumber}
                                            disabled
                                            onChange={setPlateNumber}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            {" "}
                                            Referência{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={reference}
                                            value={reference}
                                            disabled
                                            onChange={setReference}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            {" "}
                                            Ano do veículo{" "}
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder={yearVehicle}
                                            value={yearVehicle}
                                            disabled
                                            onChange={setYearVehicle}
                                        />
                                        <br />
                                    </CCol>
                                    <hr />
                                    {/* <div className='container-customer-footer'>
                                                <Button className="btn-customer-exit" variant="secondary" onClick={handleClose}>
                                                    Sair
                                                </Button>
                                                <Button  className="btn-customer-save" variant="dark" >
                                                    Salvar Alterações
                                                </Button>
                                            </div> */}
                                </CRow>
                            ) : null}
                        </CRow>
                    </Modal.Body>
                ) : (
                    <>
                        <br />
                        <br />
                        <Spinner animation="grow" variant="info" />
                        <br />
                        <br />
                    </>
                )}
            </Modal>
        </div>
    );
};

export default  BtnEditCostumer;
