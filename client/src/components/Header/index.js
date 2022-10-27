import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './header.css'
import dice from '../../assets/whitedice.png';
import divider from '../../assets/test.png'
import logo from '../../assets/RollWithIt.png'

function Header() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <Link href="/" className="auth-button" onClick={() => Auth.logout()}>
                    Logout
                </Link>
            );
        } else {
            return (
                <div class="navbar-end">
                    <Link to="/signup" className="auth-button">
                        Signup
                    </Link>
                    <Link to="/login" className="auth-button">
                        Login
                    </Link>
                </div>

            );
        }
    }

    return (
        <header className="main">
            <div className="header">
            <div className="left">
                <Link to="/" class='home-bttn'>

                    <img src={logo} />
                </Link>


            </div>
            <div className="middle">
                <img src={dice} width={50} />
            </div>
            <div className="right">
                {showNavigation()}
            </div>
            <div className="nav">
                <Link class="nav-button">
                    Profile
                </Link>

                <Link class="nav-button">
                    Social
                </Link>

                <Link class="nav-button">
                    Browse
                </Link>
            </div>
            </div>
            
            <div className="divider"></div>
        </header>
    );
}

export default Header;
