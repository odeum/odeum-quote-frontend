import React, { Component } from 'react';
import { Wrapper, LeftSideWrapper, RightSideWrapper, H1, Input, TableWrapper, Table, TD, TH, TR, TextArea, ProductWrapper, LabelWrapper, Label, TotalPriceWrapper, SaveButton } from '../Styles/createNewQuote';

class CreateNewQuote extends Component {
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

  render() {
    return (
      <div>
        <Wrapper>
          <LeftSideWrapper>
            <H1>Vælg kunde:</H1>
            <Input placeholder="Søg efter kunde..."/>

            <TableWrapper>
              <Table>
                <tbody>
                  <TR style={{backgroundColor: '#f1f1f1'}}>
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
            <Input placeholder="Titel..."/>
            <TextArea placeholder="Beskrivelse..."/>
          </LeftSideWrapper>

          <RightSideWrapper>
            <H1>Vælg produkter:</H1>
            <LabelWrapper>
              <Label marginRight="223px;">Produkt</Label>
              <Label marginRight="29px;">Antal</Label>
              <Label marginRight="25px;">Rabat (i kr.)</Label>
              <Label>Pris</Label>
            </LabelWrapper>
            {this.renderProductInputs()}

            <TotalPriceWrapper>
              <Label marginRight="3px" width="40px" paddingTop="7px">I alt:</Label>
              <Input readOnly/>
            </TotalPriceWrapper>

            <SaveButton>Opret tilbud</SaveButton>
          </RightSideWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default CreateNewQuote;