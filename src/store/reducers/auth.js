export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: JSON.parse(localStorage.getItem('token')) || null,
  type: JSON.parse(localStorage.getItem('type')) || null,
  amb: JSON.parse(localStorage.getItem('amb')) || null,
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
      const amb = localStorage.getItem('amb');
      localStorage.clear();
      if (amb) {
        localStorage.setItem('amb', JSON.stringify(amb));
      }
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
    case 'SETAMB': {
      localStorage.setItem('amb', JSON.stringify(action.payload.amb));
      return {
        ...state,
        amb: action.payload.amb,
      };
    }

    default:
      return state;
  }
};
