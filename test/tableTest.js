import Table from '../src/Components/table';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Table />', () => {
  it('renders a <table>', () => {
    const renderedComponent = shallow(
      <Table></Table>
    );
    expect(
      renderedComponent.find("tbody").node
    ).toExist();
  });
});