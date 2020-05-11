const initialState = {
  data: {},
  isLoading: false,
  isLogged: false
}

export default function isLogin(state = initialState, {type, payload}) {
  switch (type) {
    case 'IS_LOGIN' : {
      return {
        ...state,
        isLogged: true,
        isLoading: true,
        data: payload,
      }
    }
    case 'SET_LOGOUT': {
      return {
        ...state,
        isLogged: false,
        isLoading: false,
        data: {}
      }
    }
    case 'SET_REGISTER': {
      return {
        ...state,
        isLoading: true,
        isLogged: false,
        data: payload
      }
    }
    case 'FORGET_PASS': {
      return {
        ...state,
        isLoading: true,
        isLogged: false,
        data: payload
      }
    }
    case 'RESET_PASS' : {
      return {
        ...state,
        isLoading: true,
        isLogged: false,
        data: payload
      }
    }
    default: 
      return {...state};
  }
}