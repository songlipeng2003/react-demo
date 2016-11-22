import { CHANGE_TAB } from '../actions/actionTypes'

const initialState = {
  selected: 'homeTab'
};

export default function tab(state=initialState, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return Object.assign({}, state, {
          selected: action.selected
        });
    default:
      return state;
  }
}
