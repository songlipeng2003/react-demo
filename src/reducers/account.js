import { LOGIN, LOGOUT } from '../actions/actionTypes'

const initialState = {
  token: null,
  loginname: null,
  logined: false
};

export default function account(state=initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state,
        {
          token: action.user.token,
          loginname: action.user.loginname,
          logined: true
        });
    case LOGOUT:
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
