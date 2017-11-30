import React, { Component } from 'react'
import Product from '../Containers/products'

class PDFfile extends Component {

  constructor(props){
    super(props)
    this.state = {
      person: 'Brian '
    }
  }
  render() {
    return (
      <div>
        <h1>Tilbud</h1>
        <h2>{this.state.person}</h2>
        <p>Dette er en beskrivelse</p>
      </div>
    )
  }
}

export default PDFfile