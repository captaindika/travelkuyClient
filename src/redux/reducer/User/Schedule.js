const initialState = {
  Schedules: [],
  isLoading: false,
  data: {},
  transactionUser: [],
};

export default function Schedules(state = initialState, {type, payload}) {
  switch (type) {
    case 'SET_SCHEDULE':
      return {
        ...state,
        isLoading: true,
        Schedules: payload.data,
      };
    case 'GET_USERDETAIL':
      return {
        ...state,
        isLoading: true,
        data: payload,
      };
    case 'USER_TRANSACTION':
      return {
        ...state,
        isLoading: true,
        transactionUser: payload,
      };
    default:
      return {...state};
  }
}
