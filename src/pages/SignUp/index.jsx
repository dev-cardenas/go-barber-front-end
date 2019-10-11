import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Logo-go-barber" />
      <form action="">
        <input placeholder="Nombre completo" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Crear cuenta</button>
        <Link to="/">Ya tengo una cuenta</Link>
      </form>
    </>
  );
}
