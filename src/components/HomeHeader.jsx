import React from 'react';
import HomeNavMenu from './HomeNavMenu';
import HomeLoginMenu from './HomeLoginMenu'

const HomeHeader = () => {
    return (
        <header className='homeHeader'>
            <HomeLoginMenu />    
            <HomeNavMenu />
        </header>
    )
}

export default HomeHeader;