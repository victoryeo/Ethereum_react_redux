export const initialState = {
  username: 'seasea',
  totalBalance : 0.0,
  account: '0x1',	
}

export const reducers = (state = initialState, action) => {
  console.log("actiontype "+action.type)
  let val = {}
  switch (action.type) {
    case 'UPDATE_ACCOUNT':
      return {
        ...state,
        account: action.payload,
      };		  
    case 'UPDATE_TOTAL_BALANCE':
      return {
        ...state,
        totalBalance: action.payload,
      };
    case 'UPDATE_USERNAME':
      val = {
        ...state,
        username: action.payload,
      };
      break;
    default:
      val =  state
      
  }
  console.log("val " + val.username)
  return val
};

export default reducers;
