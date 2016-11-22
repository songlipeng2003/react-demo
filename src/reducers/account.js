import { LOGIN, LOGOUT } from '../actions/actionTypes'

const initialState = {
  token: localStorage.getItem('token'),
  loginname: localStorage.getItem('loginname'),
  logined: localStorage.getItem('logined')
};

export default function account(state=initialState, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.user.token);
      localStorage.setItem('loginname', action.user.loginname);
      localStorage.setItem('logined', action.user.logined);

      return Object.assign({}, state,
        {
          token: action.user.token,
          loginname: action.user.loginname,
          logined: true
        });
    case LOGOUT:
      localStorage.setItem('token', null);
      localStorage.setItem('loginname', null);
      localStorage.setItem('logined', false);

      return Object.assign({}, state,
        {
          token: null,
          loginname: null,
          logined: false
        });
    default:
      return state;
  }
}
