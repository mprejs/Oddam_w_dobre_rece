import React from 'react';
import { NavLink } from 'react-router-dom';


const HomeLoginMenu = () => {
return (
    <ul role='menu' className='loginMenu'>
        <li>
            <NavLink
                activeClassName='menuLinkActive'
                className='menuLink'
                to='/logowanie'
                role='menuitem'
            >
            Zaloguj się
            </NavLink>
        </li>    
        <li>
            <NavLink
                activeClassName='menuLinkActive'
                className='menuLink'
                to='/rejestracja'
                role='menuitem'
            >
            Załóż konto
            </NavLink>
        </li>
    </ul>
)}

export default HomeLoginMenu;