export const AUTHENTICATE = 'AUTHENTICATE';

export const authenticate = (loggedInStatus, user) => {
  return { 
    type: AUTHENTICATE,
    loggedInStatus: loggedInStatus,
    user: user
  }
  
};