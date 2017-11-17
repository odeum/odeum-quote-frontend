import React from 'react';
import ReactDOM from "react-dom";
import { Wrapper, LeftSideWrapper, RightSideWrapper, H1, Input, TableWrapper, Table, TD, TH, TR, TextArea, ProductWrapper, LabelWrapper, Label, TotalPriceWrapper, SaveButton } from '../Styles/createNewQuote';


class DropDown extends React.Component {
    renderProductInputs = () => {
        var i
        var arr = []
        for(i = 0; i < 1; i++) {
          arr.push(
            <ProductWrapper>
              <Input placeholder="Begynd at skrive..." width="250px" marginRight="4px" marginTop="0px" marginBottom="0px"/>
              <Input width="65px" marginRight="4px" marginTop="0px" marginBottom="0px"/>
              <Input width="65px" marginRight="4px" marginTop="0px" marginBottom="0px"/>
              <Input readOnly width="65px" marginTop="0px" marginBottom="0px"/>
            </ProductWrapper>
          )
        }
      return arr
    }
    render() {
        return (
            <div>
            {this.renderProductInputs()}
            </div>
        );
    }
}


class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dropDown: []};
    }

    onAddBtnClick = (event) => {
        const dropDown = this.state.dropDown;
        this.setState({
            dropDown: dropDown.concat(<DropDown key={dropDown.length} />)
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.onAddBtnClick}>Add</button>
                {this.state.dropDown.map((item, index) => {
                    return item   
                })}
            </div>
        );
    }
}
export default Add;