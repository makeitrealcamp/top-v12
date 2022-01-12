import React from 'react';
import { shallow } from 'enzyme';
import TitleClass from './TitleClass';

it('renders without crashing', () => {
  shallow(<TitleClass />);
});

it('updates the title when is clicked', () => {
  const wrapper = shallow(<TitleClass firstPart="Hello" />);
  wrapper.find('h1').simulate('click');
  expect(wrapper.find('h1').text()).toBe("Hello clase")
});
