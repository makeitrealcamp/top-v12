import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';
import Root from './Root';

describe('testing Root', () => { 
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        name: 'Ditto',
        weight: 14
      })
    }));
  });

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

  it('get the pokeData from the api', async () => {
    const wrapper = mount(<Root />);
    await act(async () => {
      await Promise.resolve(wrapper);
      wrapper.update();
    })
    expect(wrapper.find('h3').text()).toBe("Ditto")
  });
})


