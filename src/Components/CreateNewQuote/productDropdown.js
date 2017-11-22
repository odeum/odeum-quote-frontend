import React, { Component } from 'react';
import { DropdownWrapper, Link } from '../../Styles/dropdown';

class ProductDropdown extends Component {
    render() {
        return (
            <DropdownWrapper>
                <Link>
                    {this.props.labels}
                </Link>
            </DropdownWrapper>
        )
    }
}

export default ProductDropdown