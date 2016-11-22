import { CHANGE_TAB } from './actionTypes'

export function changeTab(selected) {
  return {
    type: CHANGE_TAB,
    selected: selected
  }
}
