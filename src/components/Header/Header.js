import React from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from './logo.png';
import './header.css';

const Header = () => {

    return (
        <>
            
            <Navbar bg="light" expand="lg">
            <div className="container">
                <div className="row">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <NavLink className="brand-mobile navbar-brand nav-link" to="/"><img src={Logo} alt=""/></NavLink>
                <a className="insta-mobile-icon text-right" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/uniquechairsvip"> <i className="fab fa-instagram" aria-hidden="true"></i> </a>
                <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="mx-auto">
                        <NavLink className="nav-link" to={"/"}>Ana Sayfa</NavLink>
                        <NavLink className="nav-link" to={"/products"}>Ürünler</NavLink>
                        <NavLink className="brand-link navbar-brand nav-link" to="/"><img src={Logo} alt=""/></NavLink>
                        <NavLink className="nav-link" to="/gallery">Galeri</NavLink>
                        <NavLink className="nav-link" to="/contact">İletişim</NavLink>
                        <a className="insta-icon text-right" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/uniquechairsvip"> <i className="fab fa-instagram" aria-hidden="true"></i> </a>
                        </Nav>
                </Navbar.Collapse>
                </div>
            </div>
            </Navbar>
        </>
    );
};


export default Header;
