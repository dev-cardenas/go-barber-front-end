import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signInFailured } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    if (!user.provider) {
      console.tron.error('Usuario no es un prestador de servicios');
      return;
    }

    yield put(signInSuccess(token, user));
    history.push('dashboard');
  } catch (err) {
    yield put(signInFailured());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
