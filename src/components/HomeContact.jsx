import React from 'react';
import { Element } from 'react-scroll';
import ContactForm from './ContactForm'

const HomeContact = () => {


    return (
        <Element name='HomeContact' className='homeContact'>
            <div className="formContainer">
                <div className='mainText'>Skontaktuj się z nami</div>
                <div className='decorativeElement' />
                <ContactForm />
            </div>
        </Element>
    )
}

export default HomeContact;