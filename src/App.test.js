/* global it, expect, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { initialState } from './reducers/root';

it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(
    <App
      state={initialState}
      submitTodo={mockFunction}
      deleteTodo={mockFunction}
      restoreTodo={mockFunction}
      todos={[]}
      deleted={[]}
    />,
  );

  expect(component.exists()).toEqual(true);
});
