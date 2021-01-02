import { AUTHENTICATE } from '../actions/auth';

const initialState = {
  loggedInStatus: 'NOT_LOGGED_IN',
  user: {}
};

const authReducer =  (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case AUTHENTICATE:
      return {
        loggedInStatus: action.loggedInStatus,
        user: action.user    
      };
    default:
      return state;
  }
};

export default authReducer