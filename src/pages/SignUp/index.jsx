import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

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
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Logo-go-barber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nombre completo" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Contraseña" />

        <button type="submit">
          {loading ? 'Cargando...' : 'Crear cuenta'}
        </button>
        <Link to="/">Ya tengo una cuenta</Link>
      </Form>
    </>
  );
}
