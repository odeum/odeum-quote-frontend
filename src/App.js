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
        <Header/>
        <MenuPanel>
          <Menu label={'Tilbud'} icon={'assignment'} route={'/home'}>
            <Tab icon={'add_circle'} label={'Opret tilbud'}>
              <CreateNewQuote />
            </Tab>
            <Tab icon={'assignment'} label={'Tilbuds oversigt'}>
              Oversigt over alle tilbud
            </Tab>
          </Menu>
          <Menu label={'Kunder'} icon={'people'} route={'/kunde'}>
            <Tab icon={'assignment'} label={'Kunde oversigt'}>
              Oversigt over alle Kunder
            </Tab>
          </Menu>
          <Menu label={'Produkter'} icon={'view_module'} route={'/produkt'}>
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
