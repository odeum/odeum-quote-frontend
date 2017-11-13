import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import App from 'App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'


//TODO Check Hot Reloading
class AppRouter extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path='/' component={App} />
				</div>
			</Router>
		)
	}
}

render(
	<AppRouter />,
	document.getElementById('root')
)

registerServiceWorker()
