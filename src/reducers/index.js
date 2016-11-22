import { combineReducers } from 'redux'
import account from './account'
import tab from './tab'

const demoApp = combineReducers({account, tab})
export default demoApp
