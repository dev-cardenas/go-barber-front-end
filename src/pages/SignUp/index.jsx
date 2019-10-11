import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Logo-go-barber" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nombre completo" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Crear cuenta</button>
        <Link to="/">Ya tengo una cuenta</Link>
      </Form>
    </>
  );
}
