export function checkBalance(web3, STPupdateAccounts, STPupdateTotalBalance) {
  try {
    let totalBalance = 0;	  
    web3.eth.getAccounts().then(accounts => {
      STPupdateAccounts(accounts[0])
      console.log(accounts[0])
        web3.eth.getBalance(accounts[0]).then(balance => {
          totalBalance += Number(balance);
          STPupdateTotalBalance(totalBalance)
          console.log(totalBalance)
        });
    });
  } catch (err) {
    console.warn('web3 provider not open');
    return err;
  }
}
