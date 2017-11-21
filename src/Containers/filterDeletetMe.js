import React, { Component } from 'react'
var newList = []; 
export default class Filter extends Component {

constructor(props){
    super(props) 
    this.state = {
        value: '',
        list: ['kuku', 'damn', 'niggar', 'kaffe']
    };
}
onHandle = (e) => {
        console.log('event', e.target.value);
        console.log('list', newList);
        this.setState({
            value: e.target.value
        })
}  

rendfier = () => {
    console.log('hallodsd')
    
    var list  = this.state.list
    
    var list2 = list.filter(letter => letter === this.state.value)
    
     newList.push(list2);
    
}
 
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.onHandle}></input> 
        {this.rendfier()}
      </div>
    )
  }
}
