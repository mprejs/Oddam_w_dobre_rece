import React from 'react';
import { Element } from 'react-scroll';

const HomeAboutUs = () => {
    return (
        <Element name='HomeAboutUs' className='homeAboutUs'>
            <div className='aboutUs'>
                <div className='aboutUsTitle mainText'> O nas </div>
                <div className='decorativeElement' />
                <div className='aboutUsText'>
                Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </div>
                <div className='aboutUsSign' />
            </div>
            <div className='aboutUsImage' />
        </Element>
    )
}

export default HomeAboutUs;