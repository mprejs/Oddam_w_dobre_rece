import React from 'react';
import { Link } from 'react-scroll';


const HomeNavMenu = () => {
return (
     <ul role='menu' className='navMenu'>
        <li role='none'>
            <Link 
                activeClass='navLinkActive' 
                className='Start navLink'
                to='Start'
                spy={true} 
                smooth={true} 
                duration={500} 
            >
            Start
            </Link>
        </li>
        <li role='none'>
            <Link 
                activeClass='navLinkActive' 
                className='FourSteps navLink' 
                to='HomeFourSteps' 
                spy={true} 
                smooth={true} 
                duration={500} 
            >
            O co chodzi?
            </Link>
        </li>
        <li role='none'>
            <Link 
                activeClass='navLinkActive' 
                className='AboutUs navLink'
                to='HomeAboutUs'
                spy={true} 
                smooth={true} 
                duration={500} 
            >
            O nas
            </Link>
        </li>
        <li role='none'>
            <Link 
                activeClass='navLinkActive' 
                className='WhoWeHelp navLink'
                to='HomeWhoWeHelp' 
                spy={true} 
                smooth={true} 
                duration={500} 
            >
            Fundacja i organizacje
            </Link>
        </li>
        <li role='none'>
            <Link 
                activeClass='navLinkActive' 
                className='Contact navLink'
                to='HomeContact' 
                spy={true} 
                smooth={true} 
                duration={500} 
            >
            Kontakt
            </Link>
        </li>
    </ul>
)}

export default HomeNavMenu;