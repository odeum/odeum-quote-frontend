import React, { Component } from 'react'
import { Button } from 'odeum-ui'
import uuid from 'uuid'

class ReactComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showVideo: false
		}
	}

	switch = () => this.setState({ showVideo: !this.state.showVideo })

	render() {
		return (
			<div>
				<Button 
					label={'Show video: ' + String(this.state.showVideo).toLowerCase()} 
					icon={'play_circle_outline'}
					color={'#25B89A'} 
					onClick={this.switch}
				/>
				<p style={{ marginLeft: '3px' }}>Unique ID: {uuid()}</p>
				<div>
					{this.state.showVideo && <iframe 
						title={'Lady Gaga - Telephone ft. Beyoncé'} 
						width="560" 
						height="315" 
						src="https://www.youtube.com/embed/EVBsypHzF3U?start=170" 
						frameBorder="0" 
						allowFullScreen>
					</iframe>}
				</div>
			</div>
		)
	}
}

export default ReactComp