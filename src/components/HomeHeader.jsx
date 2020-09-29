import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import HomeNavMenu from './HomeNavMenu';
import HomeLoginMenu from './HomeLoginMenu'

const HomeHeader = () => {
    return (
    <header className='homeHeader'>
        <HomeLoginMenu />    
        <HomeNavMenu />
    </header>)
}

export default HomeHeader;