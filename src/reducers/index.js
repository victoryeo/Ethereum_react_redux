import { combineReducers } from 'redux';
import reducers from './reducers.js';

const web3Reducer = (state = null, action) => {
  if (action.type === 'WEB3_INITIALIZED') {
	  console.log("action payload ")
	  console.log(action.payload.web3Instance)
    return { ...state, web3Instance: action.payload.web3Instance };
  }
  return state;
};

const appReducer = combineReducers({
  reducers,
  web3: web3Reducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
