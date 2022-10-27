import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './header.css'
import dice from '../../assets/dice.png';

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
                <div class="navbar-end">
                    <a className="navbar-item">
                        <Link to="/signup">
                            Signup
                        </Link>
                    </a>
                    <a className="navbar-item">
                        <Link to="/login">
                            Login
                        </Link>
                    </a>
                </div>

            );
        }
    }

    return (
        <header className="header">
            <div className="left">
                <div class="navbar-brand">
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                    <a class="navbar-item" href="">
                        <img src={dice} />
                    </a>

                    {/* WHERE LOGO WILL GO*/}


                    
                </div>
            </div>
            <div className="middle">
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">
                            Profile
                        </a>

                        <a class="navbar-item">
                            Social
                        </a>

                        <a class="navbar-item">
                            Browse
                        </a>
                    </div>
                </div>
            </div>
            <div className="right">
                {showNavigation()}
            </div>
        </header>
    );
}

export default Header;
