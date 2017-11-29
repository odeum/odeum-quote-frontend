import React, { Component } from 'react'
import { Input, H1, TextArea } from '../../Styles/createNewQuote';

class QuoteDescription extends Component {
    render() {
        return (
            <div>
                <H1>Tilbuds beskrivelse:</H1>
                <Input placeholder="Titel..." value={this.props.titleValue} />
                <TextArea placeholder="Beskrivelse..."  value={this.props.descriptionValue}/>
            </div>
        )
    }
}
export default QuoteDescription; 