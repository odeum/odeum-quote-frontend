import React, { Component } from 'react'
import { Button, ButtonPanel } from 'odeum-ui';

 class SaveButton extends Component {
    render() {
        return (
            <div>
                <ButtonPanel justify='right' style={{ marginRight: '0px', marginTop: '5px' }}>
                    <Button icon='check_circle' label={'Opret tilbud'} size={'small'} />
                </ButtonPanel>
            </div>
        )
    }
}
export default SaveButton; 