import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Logo-go-barber" />
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Acceder</button>
        <Link to="/register">Crear cuenta gratuita</Link>
      </form>
    </>
  );
}
