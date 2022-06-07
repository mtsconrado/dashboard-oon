import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import { Spinner } from "react-bootstrap";
import {
    CButton,
    CContainer,
    CNavbar,
    CCollapse,
    CCard,
    CNavbarNav,
    CNavbarToggler,
    CCardBody,
    CFormInput,
    CForm,
    CInputGroup,
} from "@coreui/react";

import ListVehicles from "./render/ListVehicles";
import WidgetsFilterDevices from "./render/components/WidgetsFilterDevices";
import WidgetsDevices from "./render/WidgetsDevices";
import UrlDomain, { configCookies } from "./../../config";
import Decrypt from "./../../security/decripty";

import "./css/devices.css";
import Pagination from "../components/Pagination";
import Cookies from "js-cookie";

const Devices = () => {
    const [op1, setOp1] = useState(false);
    const [op2, setOp2] = useState(false);
    const [op3, setOp3] = useState(false);
    const [op4, setOp4] = useState(false);
    const [op5, setOp5] = useState(false);
    const [filterOp1, setFilterOp1] = useState(false);
    const [filterOp2, setFilterOp2] = useState(false);
    const [filterOp3, setFilterOp3] = useState(false);
    const [filterOp4, setFilterOp4] = useState(false);
    const [filterOp5, setFilterOp5] = useState(false);
    const [filterOp6, setFilterOp6] = useState(false);
    const [filterOp7, setFilterOp7] = useState(false);
    const [filterOp8, setFilterOp8] = useState(false);
    const [otherFilters, setOtherFilters] = useState(false);
    const [filterWidgets, setFilterWidgets] = useState("");
    const [openSearch, setOpenSearch] = useState(false);
    // descriptando
    const [userType, setUserType] = useState();
    const [dados, setDados] = useState([]);
    const [visible, setVisible] = useState(false);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [qtdElements, setQtdElements] = useState();
    const [previousPage, setPreviousPage] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState("");
    const [search, setSearch] = useState("");
    const qtdPgns = 12;
    
    // const token = Cookies.get("TokenID");
    // const configCookies = {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json;charset=UTF-8",
    //         "Access-Control-Allow-Origin": "*",
    //     },
    // };
    useEffect(() => {
        const config = configCookies()
        // setPermissions(Decrypt.userPermissionsDescription())
        setUserType(Decrypt.UserTypeDecryption());

        axios
            .get(`${UrlDomain}/signatures?pageSize=${qtdPgns}`, config)
            .then((response) => {
                setDados(response.data.content);
                setNumberOfPages(response.data.totalPages);
                initPages();
                setQtdElements(response.data.totalElements);
                setOp1(true);
            })
            .catch((r) => {
                console.log(r);
                console.log("error", r),
                    alert("Login expirado"),
                    window.location.reload();
            });
    }, []);

    function initPages() {
        setCurrentPage(1);
        setNextPage(2);
        setPreviousPage("");
    }

    function page(e) {
        setDados([]);
        const config = configCookies()

        axios
            .get(
                `${UrlDomain}/signatures?pageSize=${qtdPgns}&pageNumber=${e}`,
                config
            )
            .then((response) => {
                setDados(response.data.content);
                setNumberOfPages(response.data.totalPages);
            })
            .catch((r) => {
                console.log("error", r),
                    alert("Login expirado"),
                    window.location.reload();
            });
    }

    function searchPlate(e) {
        const config = configCookies()

        if (e.key === "Enter" || e.type === "click") {
            axios
                .get(
                    `${UrlDomain}/signatures/d36bcc6a-5065-4dda-8630-3e6a77fb6880`,
                    config
                )
                .then((response) => {
                    setDados([response.data]);
                    setOpenSearch(true);
                })
                .catch((r) => {
                    console.log("Não encontrado", alert("Não encontrado!"), r);
                });
        }
    }

    function refreshPage() {
        setDados([]);
        const config = configCookies()

        axios
            .get(`${UrlDomain}/signatures?pageSize=${qtdPgns}`, config)
            .then((response) => {
                setDados(response.data.content);
                setNumberOfPages(response.data.totalPages);
                initPages();
                setQtdElements(response.data.totalElements);
            })
            .catch((r) => {
                console.log("error", r),
                    alert("Login expirado"),
                    window.location.reload();
            });
        setOpenSearch(false);
        setOtherFilters(false);
        setFilterWidgets("");
    }

    function open1() {
        setOp1(true);
        setOp2(false);
        setOp3(false);
        setOp4(false);
        setOp5(false);
        refreshPage();
    }

    function open2() {
        setOp1(false);
        setOp2(true);
        setOp3(false);
        setOp4(false);
        setOp5(false);
    }
    function open3() {
        setOp1(false);
        setOp2(false);
        setOp3(true);
        setOp4(false);
        setOp5(false);
    }
    function open4() {
        setOp1(false);
        setOp2(false);
        setOp3(false);
        setOp4(true);
        setOp5(false);
    }
    function open5() {
        setOp1(false);
        setOp2(false);
        setOp3(false);
        setOp4(false);
        setOp5(true);
        setOtherFilters(true);
    }

    function openFilterOp1() {
        setFilterOp1(true);
        setFilterOp2(false);
        setFilterOp3(false);
        setFilterOp4(false);
        setFilterOp5(false);
        setFilterOp6(false);
        setFilterOp7(false);
        setFilterOp8(false);
        setFilterWidgets("sync");
    }

    function openFilterOp2() {
        setFilterOp1(false);
        setFilterOp2(true);
        setFilterOp3(false);
        setFilterOp4(false);
        setFilterOp5(false);
        setFilterOp6(false);
        setFilterOp7(false);
        setFilterOp8(false);
        setFilterWidgets("obd");
    }

    function openFilterOp3() {
        setFilterOp1(false);
        setFilterOp2(false);
        setFilterOp3(true);
        setFilterOp4(false);
        setFilterOp5(false);
        setFilterOp6(false);
        setFilterOp7(false);
        setFilterOp8(false);
        setFilterWidgets("photoVehicle");
    }

    function openFilterOp4() {
        setFilterOp1(false);
        setFilterOp2(false);
        setFilterOp3(false);
        setFilterOp4(true);
        setFilterOp5(false);
        setFilterOp6(false);
        setFilterOp7(false);
        setFilterOp8(false);
        setFilterWidgets("photoDocument");
    }

    function openFilterOp5() {
        setFilterOp1(false);
        setFilterOp2(false);
        setFilterOp3(false);
        setFilterOp4(false);
        setFilterOp5(true);
        setFilterOp6(false);
        setFilterOp7(false);
        setFilterOp8(false);
        setFilterWidgets("notApproved");
    }

    function openFilterOp6() {
        setFilterOp1(false);
        setFilterOp2(false);
        setFilterOp3(false);
        setFilterOp4(false);
        setFilterOp5(false);
        setFilterOp6(true);
        setFilterOp7(false);
        setFilterOp8(false);
        setFilterWidgets("calledOff");
    }

    function openFilterOp7() {
        setFilterOp1(false);
        setFilterOp2(false);
        setFilterOp3(false);
        setFilterOp4(false);
        setFilterOp5(false);
        setFilterOp6(false);
        setFilterOp7(true);
        setFilterOp8(false);
        setFilterWidgets("blocked");
    }

    function openFilterOp8() {
        setFilterOp1(false);
        setFilterOp2(false);
        setFilterOp3(false);
        setFilterOp4(false);
        setFilterOp5(false);
        setFilterOp6(false);
        setFilterOp7(false);
        setFilterOp8(true);
        setFilterWidgets("paymentFailure");
    }

    const ChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    if (dados == "") {
        return (
            <>
                <Spinner animation="grow" variant="info" />
            </>
        );
    } else if (openSearch) {
        return (
            <>
                <CCard className="device-container">
                    <CCardBody>
                        <CNavbar expand="lg" className="menu-device-container">
                            <CContainer fluid>
                                <CNavbarToggler
                                    aria-label="Toggle navigation"
                                    aria-expanded={visible}
                                    onClick={() => setVisible(!visible)}
                                />
                                <CCollapse
                                    className="navbar-collapse"
                                    visible={visible}
                                >
                                    <CNavbarNav className="me-auto mb-2 mb-lg-0"></CNavbarNav>
                                    {/* <CForm className="d-flex">
                                        <CFormInput
                                            type="search"
                                            onChange={ChangeSearch}
                                            color="dark"
                                            className=" me-2"
                                            size="lg"
                                            placeholder="Pesquise pela placa"
                                            onKeyPress={searchPlate}
                                        />
                                        <CButton
                                            className="radius"
                                            onClick={searchPlate}
                                            variant="ghost"
                                            color="secondary"
                                        >
                                            <BiSearchAlt
                                                style={{
                                                    padding: 0,
                                                    fontSize: "2em",
                                                }}
                                            />
                                        </CButton>
                                    </CForm> */}
                                </CCollapse>
                            </CContainer>
                        </CNavbar>
                        <WidgetsDevices
                            open1={open1}
                            open2={open2}
                            open3={open3}
                            open4={open4}
                            open5={open5}
                            op1={op1}
                            op2={op2}
                            op3={op3}
                            op4={op4}
                            op5={op5}
                        />
                        <br />
                        <ListVehicles
                            dados={dados}
                            refreshPage={refreshPage}
                            userType={userType}
                        />
                    </CCardBody>
                </CCard>
            </>
        );
    } else {
        return (
            <>
                <CCard className="device-container">
                    <CCardBody>
                        <CNavbar expand="lg" className="menu-device-container">
                            <CContainer fluid>
                                <CNavbarToggler
                                    aria-label="Toggle navigation"
                                    aria-expanded={visible}
                                    onClick={() => setVisible(!visible)}
                                />
                                <CCollapse
                                    className="navbar-collapse"
                                    visible={visible}
                                >
                                    <CNavbarNav className="me-auto mb-2 mb-lg-0"></CNavbarNav>
                                    <CInputGroup className="mb-3 w-25">
                                        <CFormInput
                                            placeholder="Pesquise pela placa"
                                            onChange={ChangeSearch}
                                            color="dark"
                                            className=""
                                        />
                                        <CButton
                                            type="button"
                                            color="secondary"
                                            variant="outline"
                                            className=""
                                            onClick={searchPlate}
                                        >
                                            <BiSearchAlt
                                            />
                                        </CButton>
                                    </CInputGroup>
                                    {/* <CForm className="d-flex">
                                        <CFormInput
                                            type="search"
                                            onChange={ChangeSearch}
                                            color="dark"
                                            className="me-2 "
                                            placeholder="Pesquise pela placa"
                                        />
                                        <CButton
                                            className=""
                                            onClick={searchPlate}
                                            variant="ghost"
                                            color="secondary"
                                        >
                                            <BiSearchAlt
                                                style={{
                                                    padding: 0,
                                                    fontSize: "2em",
                                                }}
                                            />
                                        </CButton>
                                    </CForm> */}
                                </CCollapse>
                            </CContainer>
                        </CNavbar>
                        <WidgetsDevices
                            open1={open1}
                            open2={open2}
                            open3={open3}
                            open4={open4}
                            open5={open5}
                            op1={op1}
                            op2={op2}
                            op3={op3}
                            op4={op4}
                            op5={op5}
                            qtdElements={qtdElements}
                        />
                        <br />
                        {otherFilters ? (
                            <WidgetsFilterDevices
                                filterOp1={filterOp1}
                                filterOp2={filterOp2}
                                filterOp3={filterOp3}
                                filterOp4={filterOp4}
                                filterOp5={filterOp5}
                                filterOp6={filterOp6}
                                filterOp7={filterOp7}
                                filterOp8={filterOp8}
                                openFilterOp1={openFilterOp1}
                                openFilterOp2={openFilterOp2}
                                openFilterOp3={openFilterOp3}
                                openFilterOp4={openFilterOp4}
                                openFilterOp5={openFilterOp5}
                                openFilterOp6={openFilterOp6}
                                openFilterOp7={openFilterOp7}
                                openFilterOp8={openFilterOp8}
                            />
                        ) : (
                            <>
                                <ListVehicles
                                    dados={dados}
                                    refreshPage={refreshPage}
                                    userType={userType}
                                />

                                <Pagination page={page} numberOfPages={numberOfPages} previousPage={previousPage} setPreviousPage={setPreviousPage} currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} setNextPage={setNextPage} qtdElements={qtdElements} />
                            </>
                        )}
                    </CCardBody>
                </CCard>
            </>
        );
    }
};

export default  Devices;
