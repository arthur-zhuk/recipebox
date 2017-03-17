import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from './types';

// Set ROOT_URL const to a remote backend server that will serve as API
// server.

export const signinUser = ({ email, password }) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(() => {
        dispatch(authError('Bad login info'));
      })
  }
}

export const signupUser = ({ email, password }) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export const authError = error => {
  return {
    type: AUTH_USER,
    payload: error
  }
}

export const signoutUser = () => {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER }
}
