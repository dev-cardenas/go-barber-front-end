import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('EL nombre es obligatorio'),
  email: Yup.string()
    .email('Escriba un email valido')
    .required('El email es obligatorio'),
  password: Yup.string()
    .min(8, 'La contraseña require minimo 8 caracteres')
    .required('La contraseña es obligatoria'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Logo-go-barber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nombre completo" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Contraseña" />

        <button type="submit">Crear cuenta</button>
        <Link to="/">Ya tengo una cuenta</Link>
      </Form>
    </>
  );
}
