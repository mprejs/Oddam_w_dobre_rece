import React from 'react';
import LogowanieForm from './LogowanieForm';
import HomeNavMenu from './HomeNavMenu';
import HomeLoginMenu from './HomeLoginMenu'

const Logowanie = () => {
    return (
        <>
            <header className='homeHeader'>
                <HomeLoginMenu />    
                <HomeNavMenu />
            </header>
            <section className="logowanieContainer">
                <div className="mainText">Zaloguj się</div>
                <div className="decorativeElement" />
                <LogowanieForm />
            </section>
        </>
    )
}

export default Logowanie;