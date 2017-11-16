import React, { Component } from 'react';
import { Wrapper, LeftSideWrapper, RightSideWrapper, H1, Input, TableWrapper, Table, TD, TH, TR, TextArea, ProductWrapper, LabelWrapper, Label, TotalPriceWrapper, SaveButton } from '../Styles/createNewQuote';
import { Button } from 'odeum-ui';
import ProductsFields from './renderProductFields';

class CreateNewQuote extends Component {
  constructor(props) {
    super(props);
    this.state = { dropDown: [] };
  }

  onAddBtnClick = (event) => {
    const dropDown = this.state.dropDown;
    this.setState({
      dropDown: dropDown.concat(<ProductsFields key={dropDown.length} />)
    });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <LeftSideWrapper>
            <H1>Vælg kunde:</H1>
            <Input placeholder="Søg efter kunde..." />

            <TableWrapper>
              <Table>
                <tbody>
                  <TR style={{ backgroundColor: '#E3E5E5' }}>
                    <TH>Virksomhed</TH>
                    <TH>E-mail</TH>
                    <TH>Telefon</TH>
                  </TR>
                  <TR>
                    <TD>Alfreds Futterkiste</TD>
                    <TD>Germany</TD>
                    <TD>15915948</TD>
                  </TR>
                  <TR>
                    <TD>Berglunds snabbkop</TD>
                    <TD>Sweden</TD>
                    <TD>15915948</TD>
                  </TR>
                  <TR>
                    <TD>Island Trading</TD>
                    <TD>UK</TD>
                    <TD>15915948</TD>
                  </TR>
                  <TR>
                    <TD>Koniglich Essen</TD>
                    <TD>Germany</TD>
                    <TD>15915948</TD>
                  </TR>
                  <TR>
                    <TD>Koniglich Essen</TD>
                    <TD>Germany</TD>
                    <TD>15915948</TD>
                  </TR>
                </tbody>
              </Table>
            </TableWrapper>

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
           
              <Label marginRight="3px" width="40px" paddingTop="7px">I alt:</Label>
              <Input readOnly />
            </TotalPriceWrapper>

            <SaveButton>Opret tilbud</SaveButton>
            {/*<Button icon='check_circle' label={'Opret tilbud'} size={'small'}/>*/}
          </RightSideWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default CreateNewQuote;