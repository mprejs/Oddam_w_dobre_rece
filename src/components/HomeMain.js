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

const HomeMain = () => {
    return (<Element name='Start' className='container'>
        <div className='HomeBackground'/>
        <div>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</div>
        <button 
            className={'btn redirectBtn'}
        >
            <NavLink
                to='/logowanie'
            >
                oddaj rzeczy
            </NavLink>
        </button>
        <button 
            className={'btn redirectBtn'}
        >
            <NavLink
                to='/logowanie'
            >
                zorganizuj zbiórkę
            </NavLink>
        </button>
        </Element>)
}

export default HomeMain;