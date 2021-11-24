import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () :JSX.Element => {
    return (
        <nav className={'navbar-fixed'}>
            <div className="nav-wrapper indigo pX-3 ">
                <NavLink to="/" className="brand-logo">
                    Ts
                </NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/active_items">ACTIVE</NavLink></li>
                    <li><NavLink to="/completed_items">COMPLETED</NavLink></li>
                    <li><NavLink to="/chosen_items">CHOSEN</NavLink></li>
                    <li><NavLink to="/deleted_items">DELETED</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}