import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input name="name" placeholder="Nombre completo" />
        <Input name="email" type="email" placeholder="Correo" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Su vieja cotrasenha"
        />
        <Input
          type="password"
          name="password"
          placeholder="Su nueva contrasenha"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme su contrasenha"
        />

        <button type="submit">Actualizar perfil</button>
      </Form>
      <button type="button">Salir de GoBarber</button>
    </Container>
  );
}
