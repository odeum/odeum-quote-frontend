import React, { Component } from 'react';
import { TotalPriceWrapper, Label, Input } from '../Styles/createNewQuote';


 class TotalPrice extends Component {
    render() {
        return (
            <div>
                <TotalPriceWrapper>
                    <Label marginRight="3px" width="40px" paddingTop="7px" style={{ marginTop: '0px' }}>I alt:</Label>
                    <Input readOnly style={{ marginTop: '0px', marginBottom: '0px' }} />
                </TotalPriceWrapper>

            </div>
        )
    }
}
export default TotalPrice; 