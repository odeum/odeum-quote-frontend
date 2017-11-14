import React, { Component } from 'react';
import {
  AppContainer,
  Header,
  MenuPanel,
  Menu,
  Tab,
  Footer
} from 'odeum-app'
import CreateNewQuote from './Components/createNewQuote';

class App extends Component {

  render() {
    return (
      <AppContainer>
        <Header />
        <MenuPanel>
          <Menu label={'Tilbud'} icon={'home'} route={'/home'}>
            <Tab icon={'assignment'} label={'Opret Tilbud'}>
                <CreateNewQuote/>
            </Tab>
            <Tab icon={'assignment'} label={'Tilbuds oversigt'}>
                Oversigt over alle tilbud
            </Tab>
            <Tab icon={'assignment'} label={'Kunde oversigt'}>
                Oversigt over alle Kunder
            </Tab>
            <Tab icon={'assignment'} label={'Produkt oversigt'}>
                Oversigt over alle produkter 
            </Tab>
          </Menu>
        </MenuPanel>
      </AppContainer>
    );
  }
}

export default App;
