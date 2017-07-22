import {createStore, combineReducers} from 'redux';

let defaultState = {
  isLogin: false,
  user: null,
  accesstoken: null
}

function user(state=defaultState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLogin: true,
        user: action.user,
        accesstoken: action.accesstoken
      }
    case 'LOGOUT':
      return {
        isLogin: false,
        user: null,
        accesstoken: null
      }
    default:
      return state
  }
}
let store = createStore(combineReducers({user}))

export default store;
