import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeNavMenu from './HomeNavMenu';
import HomeLoginMenu from './HomeLoginMenu'

const Wylogowano = () => {
    return (
        <>
            <header className='homeHeader'>
                <HomeLoginMenu />    
                <HomeNavMenu />
            </header>
            <section className="wylogowanoContainer">
                <div className="mainText">Wylogowanie nastąpiło pomyślnie!</div>
                <div className="decorativeElement" />
                <NavLink
                    className='menuLink wylogowanoBtn'
                    to='/'
                    role='menuitem'
                >
                    Strona główna
                </NavLink>
            </section>
        </>
    )
}

export default Wylogowano;