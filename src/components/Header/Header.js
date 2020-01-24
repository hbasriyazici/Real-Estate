import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.scss';

const Header = () => {

    return (
        <>
         
        <header className="header-transparent">
            <nav className="navbar navbar-expand-lg text-center">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">E.</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div> 
                </div>
            </nav>
        </header>
        </>
    );
};


export default Header;
