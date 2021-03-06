import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';
import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

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
      <button onClick={handleSignOut} type="button">
        Salir de GoBarber
      </button>
    </Container>
  );
}
