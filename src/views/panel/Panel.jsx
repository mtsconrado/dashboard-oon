import React, { lazy, useState } from "react";
import { CCard, CCardBody, CCardTitle, CRow, CCol } from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle } from "@coreui/utils";

import ButtonRelatory from "./btns/ButtonCall";
import Usuarios from "./render/Users";
import Ranking from "./render/Ranking";

import "./panel.css";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.jsx"));

const Panel = () => {
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const [data, setData] = useState({
        dia: "Quarta-Feira ",
        mes: "Janeiro ",
        ano: "2022 ",
    }); // deixar vir o mes certo

    const [labelChartSemana, setLabelChartSemana] = useState([
        15, 16, 17, 18, 19, 20, 21,
    ]); // semana

    // chart mensal
    const [comparativo, setComparativo] = useState({
        titleAcumulado: "Acumulado mensal",
        dataAcumulado: [12, 32, 45, 22, 54, 32, 21],
        titleEncerrado: "Atendimentos Encerrados",
        dataEncerrado: [6, 12, 22, 11, 27, 16, 10],
    });

    return (
        <>
            <WidgetsDropdown />
            <CCard className="cardEsquerda">
                <CCardBody>
                    <CCardTitle> Comparativo </CCardTitle>
                    <label>
                        {" "}
                        {data.mes} {data.ano}
                    </label>
                    <ButtonRelatory />

                    <CChartLine
                        style={{ height: "300px", marginTop: "40px" }}
                        data={{
                            labels: labelChartSemana,
                            datasets: [
                                {
                                    label: "Acumudddlado",
                                    backgroundColor: "transparent",
                                    borderColor: getStyle("--cui-info"),
                                    borderWidth: 2,
                                    pointHoverBackgroundColor: "#fff",
                                    data: comparativo.dataAcumulado,
                                    fill: true,
                                },
                                {
                                    label: "Atendimentos Encerrados",
                                    backgroundColor: "transparent",
                                    borderColor: getStyle("--cui-success"),
                                    pointHoverBackgroundColor:
                                        getStyle("--cui-success"),
                                    borderWidth: 2,
                                    pointHoverBackgroundColor: "#fff",
                                    data: comparativo.dataEncerrado,
                                },
                            ],
                        }}
                        options={{
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: true,
                                },
                            },
                            scales: {
                                x: {
                                    grid: {
                                        drawOnChartArea: false,
                                    },
                                },
                                y: {
                                    ticks: {
                                        beginAtZero: true,
                                        maxTicksLimit: 5,
                                        stepSize: Math.ceil(250 / 5),
                                        max: 250,
                                    },
                                },
                            },
                            elements: {
                                line: {
                                    tension: 0.4,
                                },
                                point: {
                                    radius: 0,
                                    hitRadius: 10,
                                    hoverRadius: 4,
                                    hoverBorderWidth: 3,
                                },
                            },
                            point: {
                                radius: 4,
                                hitRadius: 10,
                                hoverRadius: 4,
                            },
                        }}
                    />
                </CCardBody>
            </CCard>
            <br />
            <CRow>
                <CCol>
                    <Usuarios />
                </CCol>
                <CCol>
                    <Ranking />
                </CCol>
            </CRow>
            <br />
        </>
    );
};

export default  Panel;
