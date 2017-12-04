import React, { Component } from 'react';
import {
	AppContainer,
	Header,
	MenuPanel,
	Menu,
	Tab
} from 'odeum-app'
import CreateNewQuote from './Containers/createNewQuote';
import Product from './Containers/products';
import Customer from './Containers/customers';
import Quote from './Containers/quote';

class App extends Component {

	render() {
		return (
			<AppContainer>
				<Header />
				<MenuPanel>
					<Menu label={'Tilbud'} icon={'assignment'} route={'/tilbud'}>
						<Tab icon={'add_circle'} label={'Opret tilbud'}>
							<CreateNewQuote />
						</Tab>
						<Tab icon={'assignment'} label={'Tilbuds oversigt'}>
							<Quote/>
            			</Tab>
					</Menu>
					<Menu label={'Kunder'} icon={'people'} route={'/kunder'}>
						<Tab icon={'assignment'} label={'Kunde oversigt'}>
							<Customer />
						</Tab>
					</Menu>
					<Menu label={'Produkter'} icon={'view_module'} route={'/produkter'}>
						<Tab icon={'assignment'} label={'Produkt oversigt'}>
							<Product />
						</Tab>
					</Menu>
					<Menu label={'Workspace'} icon={'home'} route={'/workspace'}>
						<Tab icon={'assignment'} label={'produkt'}>
							<Product />
						</Tab>
						<Tab icon={'assignment'} label={'add'}>
						</Tab>
					</Menu>
				</MenuPanel>
			</AppContainer>
		);
	}
}

export default App;
