import React, { Component } from 'react'

 class Sheif extends Component {
     constructor(props) {
         super(props); 
         this.state = {
             shelfItems: [
                 'shampoo',
                 'chocolate',
                 'yougurt'
             ]
         }
         this.onClickAdd = this.onClickAdd.bind(this);
     }

     onClickAdd(item)  {
         this.props.addItem(item); 
     }

  render() {
      const shelfItems = this.state.shelfItems.map((item, idx) => {
          return <li key={idx}> <button onClick={() => this.onClickAdd(item)}>[+]</button>{item}</li>
      })
    return (
      <div>
      <ul>
        {shelfItems}
        </ul>
      </div>
    )
  }
}
export default Sheif; 