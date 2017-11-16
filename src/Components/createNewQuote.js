import React, { Component } from 'react';
import { Wrapper, LeftSideWrapper, RightSideWrapper, H1, Input, TableWrapper, Table, TD, TH, TR, TextArea, ProductWrapper, LabelWrapper, Label, TotalPriceWrapper, SaveButton } from '../Styles/createNewQuote';
import { Button, ButtonPanel } from 'odeum-ui';
import { connect } from 'react-redux'; 
import { fetchCustomers } from '../Actions/customerAction';
import TableComponent from '../Components/table';

class CreateNewQuote extends Component {
  componentDidMount(){
    this.props.fetchCustomers();
  }

  renderProductInputs = () => {
      var i
      var arr = []
      for(i = 0; i < 8; i++) {
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

  renderCustomers = () => {
    return this.props.customer.map((array, index) => {
         return Object.entries(array).map((item, index) => {
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
            <Input placeholder="Søg efter kunde..."/>

            <TableComponent
              th1={'Virksomhed'}
              th2={'Email'}
              th3={'Telefon'}
              renderTableRows={this.renderCustomers()}
            />
            
            <H1>Tilbuds beskrivelse:</H1>
            <Input placeholder="Titel..."/>
            <TextArea placeholder="Beskrivelse..."/>
          </LeftSideWrapper>

          <RightSideWrapper>
            <H1>Vælg produkter:</H1>
            <LabelWrapper>
              <Label marginRight="195px;">Produkt</Label>
              <Label marginRight="29px;">Antal</Label>
              <Label marginRight="25px;">Rabat (i kr.)</Label>
              <Label>Pris</Label>
            </LabelWrapper>
            {this.renderProductInputs()}

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