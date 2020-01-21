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
                
                <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="mx-auto">
                        <NavLink className="nav-link" to={"/"}>Ana Sayfa</NavLink>
                        <NavLink className="nav-link" to={"/products"}>Ürünler</NavLink>
                        <NavLink className="brand-link navbar-brand nav-link" to="/"><img src={Logo} alt=""/></NavLink>
                        <NavLink className="nav-link" to="/gallery">Galeri</NavLink>
                        <NavLink className="nav-link" to="/contact">İletişim</NavLink>
                        
                        </Nav>
                </Navbar.Collapse>
                </div>
            </div>
            </Navbar>
        </>
    );
};


export default Header;
