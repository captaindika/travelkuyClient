const initialState = {
  data: [],
  payment: [],
  validation: [],
  orderId: [],
  idPayment: 0,
  isLoading: false,
  
};

export default function TopUp(state = initialState, {type, payload}) {
  switch (type) {
    case 'TOPUP':
      return {
        ...state,
        isLoading: true,
      };
    case 'INDOMARET':
      return {
        ...state,
        isLoading: true,
        data: payload,
      };
    case 'VALIDATION':
      return {
        ...state,
        isLoading: true,
        validation: payload,
      };
    case 'CREATE_PAYMENT':
      return {
        ...state,
        isLoading: true,
        idPayment: payload,
      };
    case 'HISTORY_PAYMENT':
      return {
        ...state,
        isLoading: false,
        payment: payload,
      };
    case 'GET_ORDERID':
      return {
        ...state,
        isLoading: false,
        orderId: payload,
      };
    case 'UPDATE_PAYMENT':
      return {
        ...state,
        isLoading: true,
      };
    case 'ADD_TRANS':
      return {
        ...state,
        isLoading: true,
      }
    default:
      return {...state};
  }
}
