import React, { Component } from 'react';
import { Wrapper, LeftSideWrapper, RightSideWrapper, H1, Input, TableWrapper, Table, TD, TH, TR, TextArea, ProductWrapper, LabelWrapper, Label, TotalPriceWrapper, SaveButton } from '../Styles/createNewQuote';
import { Button, ButtonPanel } from 'odeum-ui';
import ProductsFields from './renderProductFields';
import { connect } from 'react-redux'; 
import { fetchCustomers } from '../Actions/customerAction';
import TableComponent from '../Components/table';

class CreateNewQuote extends Component {
  constructor(props) {
    super(props);
    this.state = { dropDown: [] };
  }
  componentDidMount(){
    this.props.fetchCustomers();
  }

  onAddBtnClick = (event) => {
    const dropDown = this.state.dropDown;
    this.setState({
      dropDown: dropDown.concat(<ProductsFields key={dropDown.length} />)
    });
  }

  renderCustomers = () => {
    if(!this.props.customer){
      console.log('customer is null');
    }
    return this.props.customer.map((array, index) => {
         return Object.entries(array).map((item, index) => {
           console.log('renderCustomer', item)
             return (
                 <TR key={index}>
                     <TD>{item[1].orgName}</TD>
                     <TD>{item[1].contactEmail}</TD>
                     <TD>{item[1].contactPhone}</TD>
                 </TR>
             )
         })
     })
 }

  render() {
    return (
      <div>
        <Wrapper>
          <LeftSideWrapper>
            <H1>Vælg kunde:</H1>
            <Input placeholder="Søg efter kunde..." />

            <TableComponent
              th1={'Virksomhed'}
              th2={'Email'}
              th3={'Telefon'}
              renderTableRows={this.renderCustomers()}
            />
            
            <H1>Tilbuds beskrivelse:</H1>
            <Input placeholder="Titel..." />
            <TextArea placeholder="Beskrivelse..." />
          </LeftSideWrapper>

          <RightSideWrapper>
            <H1>Vælg produkter:</H1>
            <LabelWrapper>
              <Label marginRight="195px;">Produkt</Label>
              <Label marginRight="29px;">Antal</Label>
              <Label marginRight="25px;">Rabat (i kr.)</Label>
              <Label>Pris</Label>
            </LabelWrapper>
            <ProductsFields />
            <button onClick={this.onAddBtnClick}>Add</button>
            {this.state.dropDown.map((item, index) => {
                return item   
            })}
            <TotalPriceWrapper>
              <Label marginRight="3px" width="40px" paddingTop="7px" style={{marginTop: '0px'}}>I alt:</Label>
              <Input readOnly style={{marginTop: '0px', marginBottom: '0px'}}/>
            </TotalPriceWrapper>

            {/*<SaveButton>Opret tilbud</SaveButton>*/}
            <ButtonPanel justify='right' style={{marginRight: '0px', marginTop: '5px'}}>
              <Button icon='check_circle' label={'Opret tilbud'} size={'small'}/>
            </ButtonPanel>
          </RightSideWrapper>
        </Wrapper>
      </div>
    );
  }
}

function mapStateToProps(state, prop){
  return{
      customer: state.customer
  }
}

export default connect(mapStateToProps, {fetchCustomers})(CreateNewQuote);