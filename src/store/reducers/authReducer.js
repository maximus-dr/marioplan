const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login Error'
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null
      }
    default:
      return state;
  }
};

export default authReducer;