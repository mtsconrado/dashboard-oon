import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler, CImage } from "@coreui/react";

import { AppSidebarNav } from "./AppSidebarNav";
import logoOON from "./../assets/images/oon-seguros-logo.svg";

import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import NavBar from "../views/navBar/NavBar";

const AppSidebar = () => {
    const dispatch = useDispatch();
    const unfoldable = useSelector((state) => state.sidebarUnfoldable);
    const sidebarShow = useSelector((state) => state.sidebarShow);

    return (
        <CSidebar
            position="fixed"
            className="sideBarContainer bg-light"
            unfoldable={unfoldable}
            visible={sidebarShow}
            onVisibleChange={(visible) => {
                dispatch({ type: "set", sidebarShow: visible });
            }}
        >
            <CSidebarBrand
                className="d-none d-md-flex logoContainer mb-3 radius-border"
                to="/"
                style={{
                    backgroundColor: "#F9F7F7",
                    borderRadius: '0px 0px 20px 20px'
                }}
            >
                <CImage fluid src={logoOON} width={110} className="p-2" />
            </CSidebarBrand>
            <CSidebarNav>
                <SimpleBar
                    className="fontItemNav"
                    style={{
                        backgroundColor: "#F9F7F7",
                    }}
                >
                    <AppSidebarNav items={NavBar()} />
                    <CSidebarToggler
                        className="d-none d-lg-flex controlerSideBar"
                        onClick={() =>
                            dispatch({
                                type: "set",
                                sidebarUnfoldable: !unfoldable,
                            })
                        }
                    />
                </SimpleBar>
            </CSidebarNav>
        </CSidebar>
    );
};

export default  React.memo(AppSidebar);
