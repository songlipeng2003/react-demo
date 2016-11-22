import { LOGIN, LOGOUT } from '../actions/actionTypes'

const initialState = {
  token: '',
  user: [],
  logined: false
};

export default function account(state=initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state,
        {
          token: action.user.token,
          user: action.user,
          logined: true
        });
    case LOGOUT:
      return Object.assign({}, state,
        {
          token: null,
          user: null,
          logined: false
        });
    default:
      return state;
  }
}
