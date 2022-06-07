import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { CBadge, CNavLink } from "@coreui/react";
import CIcon from "@coreui/icons-react";

export const AppSidebarNav = ({ items }) => {
    const [activeKey, setActiveKey] = useState(0);
    console.log(activeKey);

    const location = useLocation();
    const navLink = (name, icon, badge, colorIcon) => {
        return (
            <>
                <CIcon
                    style={{ color: colorIcon }}
                    icon={icon}
                    customClassName="nav-icon"
                />
                {name && name}
                {badge && <CBadge className="ms-auto">{badge.text}</CBadge>}
            </>
        );
    };

    const navItem = (item, index) => {
        const { component, name, badge, icon, ...rest } = item;
        const Component = component;
        let colorIcon = "#6D6D6D";
        activeKey !== index ? colorIcon : (colorIcon = "#216CFF");
        return component.render.displayName === 'CNavTitle' ? (
            <Component
                style={{ color: "#6D6D6D" }}
                {...(rest.to &&
                    !rest.items && {
                        component: NavLink,
                        activeClassName: "active",
                    })}
                key={index}
                {...rest}
            >
                {navLink(name, icon, badge)}
            </Component>
        ) : (
            <Component key={index}>
                <CNavLink
                    style={
                        activeKey === index
                            ? {
                                  borderColor: "#216CFF",
                                  borderWidth: "3px",
                                  borderStyle: "none none none solid",
                                  backgroundColor: "rgba(231, 231, 231, 0.35)",
                                  borderRadius: 0,
                                  color: "#216CFF",
                              }
                            : { color: "#6D6D6D" }
                    }
                    active={activeKey === index}
                    onClick={() => setActiveKey(index)}
                    {...(rest.to &&
                        !rest.items && {
                            component: NavLink,
                        })}
                    {...rest}
                >
                    {navLink(name, icon, badge, colorIcon)}
                </CNavLink>
            </Component>
        );
    };

    // const navGroup = (item, index) => {
    //     const { component, name, icon, to, ...rest } = item;
    //     const Component = component;
    //     return (
    //         <Component
    //             idx={String(index)}
    //             key={index}
    //             toggler={navLink(name, icon)}
    //             visible={location.pathname.startsWith(to)}
    //             {...rest}
    //         >
    //             {item.items?.map((item, index) =>
    //                 item.items ? navGroup(item, index) : navItem(item, index)
    //             )}
    //         </Component>
    //     );
    // };

    return (
        <React.Fragment>
            {items &&
                items.map((item, index) =>
                    item.items ? navGroup(item, index) : navItem(item, index)
                )}
        </React.Fragment>
    );
};

AppSidebarNav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
