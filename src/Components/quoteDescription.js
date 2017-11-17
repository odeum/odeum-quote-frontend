import React, { Component } from 'react'
import { Input, H1, TextArea } from '../Styles/createNewQuote';

class QuoteDescription extends Component {
    render() {
        return (
            <div>
                <H1>Tilbuds beskrivelse:</H1>
                <Input placeholder="Titel..." />
                <TextArea placeholder="Beskrivelse..." />
            </div>
        )
    }
}
export default QuoteDescription; 