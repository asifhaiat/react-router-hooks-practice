import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h3>Welcome to t-shirt mania!!</h3>
            <nav className='home-nav-bar'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/OrderReview'>Order Review</CustomLink>
            </nav>
        </div>
    );
};

export default Header;