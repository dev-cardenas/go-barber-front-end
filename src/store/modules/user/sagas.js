import { takeLastest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil actualizado');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Error al actualizar perfil');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLastest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
]);
