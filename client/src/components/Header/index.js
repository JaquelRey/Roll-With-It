import React from "react";
import Nav from './Nav';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Header() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            );
        }
    }

    return (
        <header>
            <div className="flex-row px-1">
                <h1>
                    Sample Application
                </h1>

                <div>
                    {showNavigation()}
                </div>
            </div>
            <Nav />
        </header>
    );
}

export default Header;
