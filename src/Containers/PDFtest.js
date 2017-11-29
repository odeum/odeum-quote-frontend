import React, { Component } from 'react'
import PDFfile from '../Components/PDFfile'
var jsPDF = require('jspdf');

class PDF extends Component {
    reactPDF = () => {
    var doc = new jsPDF()
    //var data = <PDFfile/>
    var source = document.getElementById("hej");
    
    doc.fromHTML(source, 20, 20)
    //doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf')
    }

  render() {
    return (
      <div>
        <div id="hej">
          <PDFfile/>
        </div>
        <button onClick={this.reactPDF}>HEJSA</button>
      </div>
    )
  }
}

export default PDF