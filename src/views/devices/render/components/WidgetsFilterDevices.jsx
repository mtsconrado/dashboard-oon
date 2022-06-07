import { CButton, CCol, CRow } from "@coreui/react";
import React from "react";

import '../../css/widgetsFilterDevices.css';

function WidgetsFilterDevices(props) {
    const { filterOp1, filterOp2, filterOp3, filterOp4, filterOp5, filterOp6, filterOp7, filterOp8, openFilterOp1, openFilterOp2, openFilterOp3, openFilterOp4, openFilterOp5, openFilterOp6, openFilterOp7, openFilterOp8, } = props;

    return (
        <>
            <CRow className="cotainer-widgets-filter-devices mt-3">
                <CCol
                    sm="auto"
                    onClick={openFilterOp1}
                    className={
                        filterOp1 === false
                            ? "container-device-widget-filter-green"
                            : "container-device-widget-filter-green-active"
                    }
                >
                    <div>
                        <label className="container-device-widget-filter-content-title">Sincronizados:</label>
                        <br />
                        <label className="container-device-widget-filter-content">368</label>
                    </div>
                </CCol>
                <CCol
                    sm="auto"
                    onClick={openFilterOp2}
                    className={
                        filterOp2 === false
                            ? "container-device-widget-filter-blue"
                            : "container-device-widget-filter-blue-active"
                    }
                >
                    <div>
                        <label className="container-device-widget-filter-content-title">OBD enviados - {<br />} em trânsito:</label>
                        <br />
                        <label className="container-device-widget-filter-content">149</label>
                    </div>
                </CCol>
                <CCol
                    sm="auto"
                    onClick={openFilterOp3}
                    className={
                        filterOp3 === false
                            ? "container-device-widget-filter-blue"
                            : "container-device-widget-filter-blue-active"
                    }
                >
                    <div>
                        <label className="container-device-widget-filter-content-title">Fotos do veículo {<br />} aprovadas:</label>
                        <br />
                        <label className="container-device-widget-filter-content">314</label>
                    </div>
                </CCol>
                <CCol
                    sm="auto"
                    onClick={openFilterOp4}
                    className={
                        filterOp4 === false
                            ? "container-device-widget-filter-blue"
                            : "container-device-widget-filter-blue-active"
                    }
                >
                    <div>
                        <label className="container-device-widget-filter-content-title">Fotos dos {<br />} documentos {<br />} aprovadas:</label>
                        <br />
                        <label className="container-device-widget-filter-content">248</label>
                    </div>
                </CCol>
                <div className="w-100"></div>
                <CCol
                    sm="auto"
                    onClick={openFilterOp5}
                    className={
                        filterOp5 === false
                            ? "container-device-widget-filter-red"
                            : "                        container-device-widget-filter-red-active"
                    }
                >
                    <div>
                        <label className="container-device-widget-filter-content-title">Planos não {<br />} aprovados:</label>
                        <br />
                        <label className="container-device-widget-filter-content">97</label>
                    </div>
                </CCol>
                <CCol
                    sm="auto"
                    onClick={openFilterOp6}
                    className={
                        filterOp6 === false
                            ? "container-device-widget-filter-red"
                            : "container-device-widget-filter-red-active"
                    }
                >
                    <div>
                        <label className="container-device-widget-filter-content-title">Cancelados:</label>
                        <br />
                        <label className="container-device-widget-filter-content">27</label>
                    </div>
                </CCol>
                <CCol
                    sm="auto"
                    onClick={openFilterOp7}
                    className={
                        filterOp7 === false
                            ? "container-device-widget-filter-red"
                            : "container-device-widget-filter-red-active"
                    }
                >
                    <div>
                        <label className="container-device-widget-filter-content-title">Bloqueados:</label>
                        <br />
                        <label className="container-device-widget-filter-content">29</label>
                    </div>
                </CCol>
                <CCol
                    sm="auto"
                    onClick={openFilterOp8}
                    className={
                        filterOp8 === false
                            ? "container-device-widget-filter-red"
                            : "container-device-widget-filter-red-active"
                    }
                >
                    <div>
                        <label className="container-device-widget-filter-content-title">Falha de {<br />} pagamento:</label>
                        <br />
                        <label className="container-device-widget-filter-content">86</label>
                    </div>
                </CCol>
            </CRow>
            <div className="d-md-flex justify-content-md-end mt-4">
                <CButton
                    color="primary"
                    size="lg"
                    className="m-4 px-5"
                >
                    Filtrar
                </CButton>
            </div>
        </>
    )
}

export default  WidgetsFilterDevices;
