import PopUpWindow from '../src/Components/popupWindow'
import expect from 'expect';
import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Popup, InnerPopup, Text, StyledModalHeader, StyledModalHeaderIcon, StyledModalHeaderClose, StyledModalHeaderTitle } from '../src/Styles/popup'; 
import { ButtonPanel, Button, Icon } from 'odeum-ui'

Enzyme.configure({ adapter: new Adapter() });
describe('Table Component', () => {
  it('render table component', () => {
    const wrapper = shallow(<PopUpWindow />);
    expect(wrapper).toBe(wrapper);
  });
  it('test of it contains of H1', () => {
    const wrapper = shallow(<PopUpWindow />);
    expect(wrapper.contains(<h1>hello</h1>)).toEqual(true);
  });
  it('Testing StyledCompontents', () => {
    const wrapper = shallow(<PopUpWindow />);
    expect(wrapper.contains(<Text>Tilbud</Text>)).toEqual(true);
  });
  it('Testing styledComponents with props', () => {
    const wrapper = shallow(<PopUpWindow />);
    expect(wrapper.contains(<Icon icon={'check_circle'} iconSize={20} color={'#fff'} active={true} />)).toBe(true);
  });
  it('Testing styledComponents with props', () => {
    const wrapper = shallow(<PopUpWindow />);
    const IconWrapper = <Icon icon={'close'} iconSize={20||21||23} color={'#fff'} active={true} />
    expect(wrapper.contains(IconWrapper)).toBe(true);
  });
});

