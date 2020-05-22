import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3'
import DisplayHello from "./components/DisplayHello"
import { STPupdateTotalBalance, STPupdateAccounts } from './actions/actions.js';
import getWeb3 from './web3/getWeb3'
import * as Utils from './web3/utils';

getWeb3.catch(
  err => console.warn('Error in web3 initialization.', err)
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
	isConnected: false,
	account: '',
    };
    this.web3 = null
    //this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

    console.log("App web3")
    const web3Returned = setInterval(() => {
      if (this.props.web3 != null) {
	clearInterval(web3Returned);
	this.setState({
              isConnected: true,
        });
        this.web3 = this.props.web3.web3Instance;
        console.log(this.web3)
	try {
          Utils.checkBalance(this.web3, this.props.STPupdateAccounts, this.props.STPupdateTotalBalance);
	  console.log(this.props.totalBalance)
		console.log(this.props.account)
        } catch (err) {
          console.error('error', err);
        }
	try {
          this.web3.eth.subscribe('newBlockHeaders', (err, res) => {
		  console.log(res)
		  console.log(err)
	  }).on("data", (blockHeader) => {
	    console.log(blockHeader)
	  }).on("error", console.error) 
	} catch (err) {
	  console.error('error', err);
	}      
      }
    })
  }  
	
  componentDidMount() {
    if (this.web3) {
      let accounts = this.web3.eth.getAccounts() 
      this.setState({
	      isConnected: true,
	      account: accounts[0] 
      });
    }
  }  

  render() {
    console.log(this.state.account)
    return (
      <div>
        <h2>Ethereum reactjs demo</h2><br/>
        {this.state.isConnected?'Connected to local node':'Not Connected'}
	<DisplayHello />
	 Account is {this.props.account}<br/>
	 Balance is {this.props.totalBalance}
      </div>
    );
  }
}

App.propTypes = {
  STPupdateAccounts: PropTypes.func,
  STPupdateTotalBalance: PropTypes.func,
};

const mapStateToProps = state => ({
  web3: state.web3,
  totalBalance: state.reducers.totalBalance,
  account: state.reducers.account
});

export default connect(
  mapStateToProps,
  {
    STPupdateAccounts,
    STPupdateTotalBalance,
  }
)(App);

//export default App;
