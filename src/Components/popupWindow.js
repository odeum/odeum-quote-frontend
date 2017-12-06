import React, { Component } from 'react'
import { Popup, InnerPopup, Text, StyledModalHeader, StyledModalHeaderIcon, StyledModalHeaderClose, StyledModalHeaderTitle } from '../Styles/popup'
import { ButtonPanel, Button, Icon } from 'odeum-ui'

class PopupWindow extends Component {
    render() {
        return (
            <Popup>
                <InnerPopup>
                <StyledModalHeader>
				
					<StyledModalHeaderIcon>
						<Icon icon={'check_circle'} iconSize={20} color={'#fff'} active={true} />
					</StyledModalHeaderIcon>
				
					<StyledModalHeaderTitle><Text>Tilbud</Text></StyledModalHeaderTitle>
				
					<StyledModalHeaderClose onClick={this.props.closeModal}>
						<Icon icon={'close'} iconSize={20} color={'#fff'} active={true} />
					</StyledModalHeaderClose>
				
                </StyledModalHeader>
                
                    <Text>{this.props.text}</Text>
                    <ButtonPanel justify='center' style={{marginTop: '20px'}}>
                        <Button onClick={this.props.closePopup} icon='check' label={'OK'} size={'small'}/>
                    </ButtonPanel>
                </InnerPopup>
            </Popup>
        )
    }
}

export default PopupWindow