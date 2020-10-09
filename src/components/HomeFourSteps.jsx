import React from 'react';
import { NavLink } from 'react-router-dom';
import { Element } from 'react-scroll';

const HomeFourSteps = () => {
    return (
        <Element name='HomeFourSteps' className='homeFourSteps'>
            <div className='mainText'>
                Wystarczą 4 proste kroki
            </div>
            <div className='decorativeElement' />
            <div className='fourSteps'>
                <ul className='fourStepsList'>
                    <li className='fourStepsStep'> 
                        <div className='stepIcon iconShirt'/>
                        <div className='stepTitle'>Wybierz rzeczy</div>
                        <div className='stepUnderline' />
                        <div className='stepDiscription'>ubrania, zabawki, <br /> sprzęt i inne</div>
                    </li>
                    <li className='fourStepsStep'> 
                        <div className='stepIcon iconBag' />
                        <div className='stepTitle'>Spakuj je</div>
                        <div className='stepUnderline' />
                        <div className='stepDiscription'>skorzystaj <br /> z worków na śmieci</div>
                    </li>
                    <li className='fourStepsStep'> 
                        <div className='stepIcon iconGlas' />
                        <div className='stepTitle'>Zdecyduj komu <br /> chcesz pomóc</div>
                        <div className='stepUnderline' />
                        <div className='stepDiscription'>wybierz zaufane <br /> miejsce</div>
                    </li>
                    <li className='fourStepsStep'> 
                        <div className='stepIcon iconExchange' />
                        <div className='stepTitle'>Zamów kuriera</div>
                        <div className='stepUnderline' />
                        <div className='stepDiscription'>kurier przyjedzie <br /> w dogodnym terminie</div>
                    </li>
                </ul>
            </div>
            <ul className='mainRedirect'>
                <li className='btn redirectBtn'>
                    <NavLink to='/logowanie'>
                        <span>oddaj <br /> rzeczy</span>
                    </NavLink>
                </li>
            </ul>
        </Element>
    )
}

export default HomeFourSteps;