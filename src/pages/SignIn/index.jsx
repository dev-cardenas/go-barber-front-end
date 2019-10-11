import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <img src={logo} alt="Logo-go-barber" />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Acceder</button>
        <Link to="/register">Crear cuenta gratuita</Link>
      </Form>
    </>
  );
}
