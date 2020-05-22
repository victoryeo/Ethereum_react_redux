import Web3 from 'web3'

const actionTypes = {
	UPDATE_TOTAL_BALANCE: 'UPDATE_TOTAL_BALANCE',
	UPDATE_ACCOUNT: 'UPDATE_ACCOUNT'
}

const web3 = new Web3('http://localhost:7545');

export const STPupdateTotalBalance = balance => dispatch => {
  dispatch({
    type: actionTypes.UPDATE_TOTAL_BALANCE,
    payload: balance,
  });
};

export const STPupdateAccounts = account0 => dispatch => {
  dispatch({
    type: actionTypes.UPDATE_ACCOUNT,
    payload: account0,
  });
};

