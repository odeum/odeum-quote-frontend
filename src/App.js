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
import Cart from './Components/cart'; 
import Product from './Containers/products';
import Customer from './Containers/customers';

class App extends Component {

  render() {
    return (
      <AppContainer>
        <Header/>
        <MenuPanel>
          <Menu label={'Tilbud'} icon={'assignment'} route={'/tilbud'}>
            <Tab icon={'add_circle'} label={'Opret tilbud'}>
              <CreateNewQuote />
            </Tab>
            <Tab icon={'assignment'} label={'Tilbuds oversigt'}>
              Oversigt over alle tilbud
            </Tab>
          </Menu>
          <Menu label={'Kunder'} icon={'people'} route={'/kunder'}>
            <Tab icon={'assignment'} label={'Kunde oversigt'}>
              Oversigt over alle Kunder:
              <Customer/>
            </Tab>
          </Menu>
          <Menu label={'Produkter'} icon={'view_module'} route={'/produkter'}>
            <Tab icon={'assignment'} label={'Produkt oversigt'}>
              Oversigt over alle produkter
            </Tab>
            </Menu>
          <Menu label={'Workspace'} icon={'home'} route={'/workspace'}>
            <Tab icon={'assignment'} label={'workspace'}>
              <Cart/>
            </Tab>
            <Tab icon={'assignment'} label={'produkt'}>
              <Product/>
            </Tab>
          </Menu>
        </MenuPanel>
      </AppContainer>
    );
  }
}

export default App;
