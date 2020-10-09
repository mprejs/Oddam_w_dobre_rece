import React, { useState} from 'react';
import { useForm } from 'react-hook-form'

const ContactForm = () => {
    
    const { register, handleSubmit, errors } = useForm();
    const [isLoaded, setIsLoaded] = useState(false);


    const onSubmit = (data, e) => {
      fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(response => { 
        if(response.status === 'error') {
          throw Error(`Request rejected with status ${response.status}`);
        }
        setIsLoaded(response); e.target.reset()})
      .catch(error => console.log("Error: ", error))
    };
    

    return (
        <form className='contactForm' onSubmit={handleSubmit(onSubmit)}>
          {isLoaded && <span className='succesMsg'> Wiadomość została wysłana! Wkrótce się skontaktujemy.</span>}
          <div className="fieldContainer">
            <label className='contactFormLabel'>
              Wpisz swoje imię
              <input 
                ref={register({required: true, validate: value => value.indexOf(" ") === -1})}
                type='text' 
                name='name' 
                placeholder='Krzysztof'
              />
            </label>
            {errors.name && <span className='errorMsg'>Podane imię jest nieprawidłowe!</span>}
          </div>
          <div className="fieldContainer">
            <label className='contactFormLabel'>
              Wpisz swój email
              <input 
                ref={register({required: true})}
                type='email' 
                name='email' 
                placeholder='abc@xyz.pl'
              />
            </label>
            {errors.email && <span className='errorMsg'>Podany email jest nieprawidłowy!</span>} 
          </div>
          <label className='contactFormTextarea'>
            Wpisz swoją wiadomość
            <textarea 
              ref={register({required: true, minLength: 120})}
              name='message' 
              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            />
          </label>
          {errors.message && <span className='errorMsg'>Wiadomość musi mieć conajmniej 120 znaków!</span>} 
          <input type='submit' className='contactFormSubmit' value='Wyślij' />
        </form>
    )
}

export default ContactForm