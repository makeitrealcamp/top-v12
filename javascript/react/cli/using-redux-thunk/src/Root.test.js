import React from 'react';
import { shallow } from 'enzyme';
import Root from './Root';

describe('testing Root', () => { 
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    shallow(<Root />);
  });
  
  it('updates the title when is clicked', () => {
    const wrapper = shallow(<Root />);
    wrapper.find('h1').simulate('click');
    expect(wrapper.find('h1').text()).toBe("Hola Class")
  });
})


