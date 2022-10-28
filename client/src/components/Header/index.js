import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './header.css'
import dice from '../../assets/whitedice.png';
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
                    <Link to="/" className='home-bttn'>
                        <img id="Dice" src={dice} width={50} />
                        <img id="Logo" src={logo} />
                    </Link>


                </div>
                <div className="middle">
                    <Link className="nav-button">
                        Profile
                    </Link>

                    <Link className="nav-button">
                        Social
                    </Link>

                    <Link className="nav-button">
                        Browse
                    </Link>
                </div>
                <div className="right">
                    {showNavigation()}
                </div>
            </div>
        </header>
    );
}

export default Header;
