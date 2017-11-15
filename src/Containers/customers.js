import React, { Component } from 'react'
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { fetchCustomers } from '../Actions/customerAction';

class Customer extends Component {
    componentDidMount(){
        this.props.fetchCustomers();
    }

    render() {
        const renderCustomer = this.props.customer.map((array, index) => {
            //console.log(array)
            return Object.entries(array).map((item, key) => {
                console.log(item)
                return (<h3>{item[1].orgName}</h3>)
            })
        })
        return (
            <div>
                {renderCustomer}
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