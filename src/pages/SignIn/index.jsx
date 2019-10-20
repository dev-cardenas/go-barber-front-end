import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Escriba un email valido')
    .required('El email es obligatorio'),
  password: Yup.string().required('La contraseña es obligatoria'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Logo-go-barber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Contraseña" />

        <button type="submit">Acceder</button>
        <Link to="/register">Crear cuenta gratuita</Link>
      </Form>
    </>
  );
}
