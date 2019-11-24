import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
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
      toast.error('Usuario no es un prestador de servicios');
      return;
    }

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('dashboard');
  } catch (err) {
    toast.error('Fallo de autenticacion, verifique sus datos');
    yield put(signInFailured());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    const { token, user } = response.data;
    if (!user.provider) {
      toast.error('Usuario no es un prestador de servicios');
      return;
    }

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falla en cadastrarse, verifique sus datos');
    yield put(signInFailured());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
