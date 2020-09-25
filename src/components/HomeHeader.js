import React from 'react';
import {
    BrowserRouter,
    Route,
    withRouter,
    Switch,
    NavLink,
} from 'react-router-dom';
import { 
    Link, 
    DirectLink, 
    Element, 
    Events, 
    animateScroll as scroll, scrollSpy, scroller 
} from 'react-scroll'

const HomeHeader = () => {
    return (
    <header>
        <ul>
            <li>
                <NavLink
                    to='/logowanie'
                    className="menu-link"
                    activeClassName="menu-link-active"
                >
                Zaloguj się
                </NavLink>
            </li>    
            <li>
                <NavLink
                    to='/rejestracja'
                    className="menu-link"
                    activeClassName="menu-link-active"
                >
                Załóż konto
                </NavLink>
            </li>
        </ul>    
        <ul>
            <li>
                <Link 
                    activeClass="active" 
                    className="Start" 
                    to="Start" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                >
                Start
                </Link>
            </li>
            <li>
                <Link 
                    activeClass="active" 
                    className="FourSteps" 
                    to="HomeFourSteps" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                >
                O co chodzi?
                </Link>
            </li>
            <li>
                <Link 
                    activeClass="active" 
                    className="AboutUs" 
                    to="HomeAboutUs" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                >
                O nas
                </Link>
            </li>
            <li>
                <Link 
                    activeClass="active" 
                    className="WhoWeHelp" 
                    to="HomeWhoWeHelp" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                >
                Fundacja i organizacje
                </Link>
            </li>
            <li>
                <Link 
                    activeClass="active" 
                    className="Contact" 
                    to="HomeContact" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                >
                Kontakt
                </Link>
            </li>
        </ul>
    </header>)
}

export default HomeHeader;