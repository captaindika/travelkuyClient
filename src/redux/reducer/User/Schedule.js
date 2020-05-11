const initialState = {
  Schedules: [],
  isLoading: false,
  data: {},
};

export default function GetSchedules(state = initialState, {type, payload}) {
  switch (type) {
    case 'SET_SCHEDULE':
      return {
        ...state,
        isLoading: true,
        Schedules: payload,
      };
    case 'GET_USERDETAIL':
      return {
        ...state,
        isLoading: true,
        data: payload,
      };
    default:
      return {...state};
  }
}
