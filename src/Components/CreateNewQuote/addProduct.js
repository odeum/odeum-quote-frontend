import React, { Component } from 'react';
import { H1, LabelWrapper, Label } from '../../Styles/createNewQuote';

class AddProduct extends Component {
    render() {
        return (
            <div>
                <H1>Vælg produkter:</H1>
                <LabelWrapper>
                    <Label marginRight="195px;">Produkt</Label>
                    <Label marginRight="29px;">Antal</Label>
                    <Label marginRight="25px;">Rabat (i kr.)</Label>
                    <Label>Pris</Label>
                </LabelWrapper>
            </div>
        )
    }
}

export default AddProduct; 