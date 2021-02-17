export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: JSON.parse(localStorage.getItem('token')) || null,
  type: JSON.parse(localStorage.getItem('type')) || null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      localStorage.setItem(
        'isLoggedIn',
        JSON.stringify(action.payload.isLoggedIn)
      );
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));

      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
        token: action.payload.token,
      };
    }
    case 'LOGOUT': {
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
        type: null,
      };
    }
    case 'SETTYPE': {
      localStorage.setItem('type', JSON.stringify(action.payload.type));
      return {
        ...state,
        type: action.payload.type,
      };
    }
    default:
      return state;
  }
};
