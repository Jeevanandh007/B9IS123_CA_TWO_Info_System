import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/order" activeStyle>
                        ORDER
                    </NavLink>
                    
                    <NavLink to="/search" activeStyle>
                        SEARCH PO
                    </NavLink>
                    
                    <NavLink to="/login" activeStyle>
                        LOGIN
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;