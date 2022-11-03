import React from 'react';
import './Header.css';
import Pic from '../../images/header-pic.jpg';
import NavBar from '../Navbar/Navbar';
const Header = () => {
    return (
        <div className='header'>
            <NavBar></NavBar>
            <img src= {Pic} alt="pic" />
        </div>
    );
};

export default Header;