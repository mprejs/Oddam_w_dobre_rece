import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const LogowanieForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {
      console.log(data);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='logowanieForm'>
            <div className='logowanieInputContainer'>
                <label className='logowanieFormLabel'>
                    Email
                    <input 
                    ref={register({required: true })}
                    type='email' 
                    name='email' 
                    />
                </label>
                {errors.email && <span className='errorMsg'>Podany email jest nieprawidłowy!</span>}
                <label className='logowanieFormLabel'>
                    Hasło
                    <input 
                    ref={register({minLength: 6 })}
                    type='password' 
                    name='password' 
                    />
                </label>
                {errors.password && <span className='errorMsg'>Hasło musi się składać z minimum 6 znaków!</span>}
            </div>
            <div className='logowanieBtnContainer'>
                <NavLink
                    className='menuLink logowanieBtn'
                    to='/rejestracja'
                    role='menuitem'
                >
                    Załóż konto
                </NavLink>
                <input type='submit' className='contactFormSubmit logowanieBtn' value='Zaloguj się' />
            </div>
        </form>
    )
}


export default LogowanieForm