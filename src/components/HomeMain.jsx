import React from 'react';
import { NavLink } from 'react-router-dom';
import { Element } from 'react-scroll';

const HomeMain = () => {
    return (
        <Element name='Start' className='homeMain'>
            <section className='homeMainSection'>
                <div className='mainText'>Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce</div>
                <div className='decorativeElement'/>
                <ul className='mainRedirect'>
                    <li className='btn redirectBtn'>
                        <NavLink to='/logowanie'>
                            oddaj <br /> rzeczy
                        </NavLink>
                    </li>
                    <li  className='btn redirectBtn'>
                        <NavLink to='/logowanie'>
                            zorganizuj zbiórkę
                        </NavLink>
                    </li>
                </ul>
            </section>
        </Element>
    )
}

export default HomeMain;