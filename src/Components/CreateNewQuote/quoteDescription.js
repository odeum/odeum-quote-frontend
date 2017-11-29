import React, { Component } from 'react'
import { Input, H1, TextArea } from '../../Styles/createNewQuote';

class QuoteDescription extends Component {
    render() {
        return (
            <div>
                <H1>Tilbuds beskrivelse:</H1>
                <Input placeholder="Titel..." value={this.props.titleValue} onChange={this.props.onChangeTitle}/>
                <TextArea placeholder="Beskrivelse..."  value={this.props.descriptionValue} onChange={this.props.onChangeDescription}/>
            </div>
        )
    }
}
export default QuoteDescription; 