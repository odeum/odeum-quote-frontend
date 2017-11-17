import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import Store from './store';


const StoreInstace = Store();

//TODO Check Hot Reloading
class AppRouter extends Component {
	render() {
		return (
			<Provider store={StoreInstace}>
				<Router>
					<div>
						<Route path='/' component={App} />
					</div>
				</Router>
			</Provider>
		)
	}
}

render(
	<AppRouter />,
	document.getElementById('root')
)

registerServiceWorker()
