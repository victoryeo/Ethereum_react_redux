import React, {Component} from 'react';
//import FirstStore from "./FirstStore"
import {connect} from "react-redux";

class DisplayHello extends Component {
    render() {
        return (
            <p>
                Hello {this.props.nameAsProps} !
            </p>
        );
    }
}

const mapStateToProps = state => ({
    
        nameAsProps: state.reducers.username,
    
})

export default connect(mapStateToProps)(DisplayHello);
