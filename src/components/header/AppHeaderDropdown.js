import React, { useState } from "react";
import {
    CAvatar,
    CBadge,
    CButton,
    CDropdown,
    CDropdownDivider,
    CDropdownHeader,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
} from "@coreui/react";

import Cookies from "js-cookie";
import "./appHeader.css";

import {
    cilBell,
    cilCreditCard,
    cilCommentSquare,
    cilEnvelopeOpen,
    cilFile,
    cilLockLocked,
    cilSettings,
    cilExitToApp,
    cilTask,
    cilUser,
    cilAccountLogout,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import avatar8 from "./../../assets/images/avatars/2.jpg";
import { Link } from "react-router-dom";

const AppHeaderDropdown = () => {
    const sairTela = () => {
        // localStorage.removeItem("TokenID") // exclui o token
        // localStorage.removeItem("user");
        Cookies.remove("TokenID", { path: "" });
        window.location.reload();
    };

    const [configRoute, setConfigRoute] = useState(false);
    const configScreen = () => {
        setConfigRoute(true);
    };

    return (
        <CDropdown variant="nav-item">
            <CDropdownToggle
                placement="bottom-end"
                className="py-0"
                caret={false}
            >
                <CAvatar src={avatar8} size="md" />
            </CDropdownToggle>
            <CDropdownMenu placement="bottom-end">
                {/* <CDropdownItem href="#/configuracoes">
                    <CAvatar src={avatar8} size="md" className="mx-2" />
                    <label>gustavo2@oonseguros.com</label>
                </CDropdownItem>
                <CDropdownDivider /> */}
                <CDropdownItem href="#/configuracoes">
                    <CIcon icon={cilUser} className="me-2" />
                    <label>Configurações do perfil</label>
                </CDropdownItem>
                <CDropdownItem onClick={sairTela} href="/" className="mt-2">
                    <CIcon
                        
                        icon={cilAccountLogout}
                        className="me-2 btn-config-screen"
                    />
                    <label className="btn-font-exit"> Sair </label>
                </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    );
};

export default  AppHeaderDropdown;
