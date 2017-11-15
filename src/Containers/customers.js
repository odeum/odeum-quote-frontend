import React, { Component } from 'react'
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { fetchCustomers } from '../Actions/customerAction';

class Customer extends Component {
    componentDidMount(){
        this.props.fetchCustomers();
    }

    renderCustomer = () => {
        return this.props.customer.map((item, index) => {
            return <li key={index}>{item.orgName}</li>;
        })
    }

    render() {
        return (
            <div>
                {this.renderCustomer()}
            </div>
        )
    }
}

function mapStateToProps(state, prop){
    return{
        customer: state.customer
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         action: bindActionCreators(fetchCustomers, dispatch)
//     }
// }

export default connect(mapStateToProps, {fetchCustomers})(Customer);