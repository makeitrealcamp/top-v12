import React from 'react';
import store from '../store';
import { Provider } from 'react-redux';
import * as counterReducer from '../store/reducers/counterReducer';
import {render, fireEvent, screen} from '@testing-library/react'
import Button from './Button';

describe('testing Button', () => { 
  const ButtonComponent = () => {
    return <Provider store={store}><Button /></Provider>
  }

  it('renders without crashing', () => {
    render(<ButtonComponent />);
    const buttonText = screen.getByText('Increment');
    expect(buttonText).not.toBeNull();
  });

  it('increments when button is clicked', () => {
    render(<ButtonComponent />);
    const incrementedSpy = jest.spyOn(counterReducer, 'incremented');
    const buttonEl = screen.getByRole('button');
    fireEvent.click(buttonEl);
    expect(incrementedSpy).toHaveBeenCalled();
  });
})


