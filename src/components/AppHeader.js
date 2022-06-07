import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CHeaderToggler,
    CImage,
    CNavItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMenu } from "@coreui/icons";
import "./appHeader.css";
import NotifySino from "./notify/Notify";

import { AppHeaderDropdown } from "./header/index";
import logoOON from "./../assets/images/oon.svg";

const AppHeader = () => {
    const dispatch = useDispatch();
    const sidebarShow = useSelector((state) => state.sidebarShow);

    var data = new Date();
    var dias = new Array(
        "  domingo",
        "  segunda-feira",
        "  terça-feira",
        "  quarta-feira",
        "  quinta-feira",
        "  sexta-feira",
        "  sábado"
    );
    const diaSemana = dias[data.getDay()];

    var mes = new Array(
        "Janeiro ",
        "Fevereiro ",
        "Março ",
        "Abril ",
        "Maio ",
        "Junho ",
        "Julho ",
        "Agosto ",
        "Setembro ",
        "Outubro ",
        "Novembro ",
        "Dezembro "
    );
    const space = "    ";
    const mesAno = mes[data.getMonth()];
    const anoAtual = data.getFullYear();
    // Mes ano, dia e diaNum
    const diaAtual = data.getDate();
    return (
        <CHeader position="sticky" className="headerContainer pb-3" style={{
            // borderRadius: '0px 0px 20px 20px'
        }}>
            <CContainer fluid>
                <CHeaderToggler
                    className="ps-1"
                    onClick={() =>
                        dispatch({ type: "set", sidebarShow: !sidebarShow })
                    }
                >
                    <CIcon icon={cilMenu} size="lg" />
                </CHeaderToggler>
                {/* LOGO QUANDO A TELA FICA MENOR */}
                <CHeaderBrand className="mx-auto d-md-none" to="/">
                    <CImage fluid src={logoOON} width={180} height={180} />
                </CHeaderBrand>
                <CHeaderNav className="d-none d-md-flex me-auto">
                    <CNavItem className="container-data">
                        <label className="text-ano-mes">
                            {mesAno} {anoAtual}
                        </label>
                        <label className="text-dia">
                            {space} {diaSemana}, {diaAtual}
                        </label>
                    </CNavItem>
                </CHeaderNav>

                <CHeaderNav>
                    <CNavItem>
                        <NotifySino />
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav className="ms-3">
                    <AppHeaderDropdown />
                </CHeaderNav>
                <CHeaderNav className="ms-3">
                    <div className="container-header-name">
                        <label className="name-header">Gustavo Alcantara</label>
                        <br />
                        <label className="funcao-header">Administrador</label>
                    </div>
                </CHeaderNav>
            </CContainer>

            {/* <CContainer fluid>
        <AppBreadcrumb />
      </CContainer> */}
        </CHeader>
    );
};

export default  AppHeader;
