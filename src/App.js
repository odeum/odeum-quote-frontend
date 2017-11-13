import React, { Component } from 'react';
import {
  AppContainer,
  Header,
  MenuPanel,
  Menu,
  Tab,
  Workspace,
  Footer
} from 'odeum-app'

class App extends Component {

  render() {
    return (
      <AppContainer>
        <Header />
        <MenuPanel>
          <Menu label={'Tilbud'} icon={'home'} route={'/home'}>
            <Tab icon={'assignment'} label={'Opret Tilbud'}>
              <Workspace >
                Opret Tilbud
          </Workspace>
            </Tab>
            <Tab icon={'assignment'} label={'Tilbuds oversigt'}>
              <Workspace >
                Oversigt over alle tilbud
          </Workspace>
            </Tab>
            <Tab icon={'assignment'} label={'Kunde oversigt'}>
              <Workspace >
                Oversigt over alle Kunder
          </Workspace>
            </Tab>
            <Tab icon={'assignment'} label={'Produkt oversigt'}>
              <Workspace >
                Oversigt over alle produkter 
          </Workspace>
            </Tab>
          </Menu>
        </MenuPanel>
      </AppContainer>
    );
  }
}

export default App;
