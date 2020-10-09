import React from 'react';
import RejestracjaForm from './RejestracjaForm';
import HomeNavMenu from './HomeNavMenu';
import HomeLoginMenu from './HomeLoginMenu'

const Rejestracja = () => {
    return (
        <>
            <header className='homeHeader'>
                <HomeLoginMenu />    
                <HomeNavMenu />
            </header>
            <section className="rejestracjaContainer">
                <div className="mainText">Załóż konto</div>
                <div className="decorativeElement" />
                <RejestracjaForm />
            </section>
        </>
    )
}

export default Rejestracja;