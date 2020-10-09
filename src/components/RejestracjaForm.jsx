import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const RejestracjaForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {
      console.log(data);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='rejestracjaForm'>
            <div className='rejestracjaInputContainer'>
                <label className='rejestracjaFormLabel'>
                    Email
                    <input 
                    ref={register({required: true })}
                    type='email' 
                    name='email' 
                    />
                </label>
                {errors.email && <span className='errorMsg'>Podany email jest nieprawidłowy!</span>}
                <label className='rejestracjaFormLabel'>
                    Hasło
                    <input 
                    ref={register({minLength: 6 })}
                    type='password' 
                    name='password' 
                    />
                </label>
                {errors.password && <span className='errorMsg'>Hasło musi się składać z minimum 6 znaków!</span>}
                <label className='rejestracjaFormLabel'>
                    Powtórz hasło
                    <input 
                    ref={register({validate: value => value === watch('password')})}
                    type='password' 
                    name='passwordRepeat' 
                    />
                </label>
                {errors.passwordRepeat && <span className='errorMsg'>Hasła muszą być jednakowe!</span>}
            </div>
            <div className='rejestracjaBtnContainer'>
                <NavLink
                    className='menuLink rejestracjaBtn'
                    to='/rejestracja'
                    role='menuitem'
                >
                    Załóż konto
                </NavLink>
                <input type='submit' className='rejestracjaFormSubmit rejestracjaBtn' value='Zaloguj się' />
            </div>
        </form>
    )
}


export default RejestracjaForm