/* global expect, it, describe, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from './addTodo';

describe('AddTodo component', () => {
  let component;
  const submitMock = jest.fn();
  const restoreMock = jest.fn();
  const deleted = [{
    id: 1,
    text: 'do things and stuff',
  }];
  beforeEach(() => {
    component = shallow(
      <AddTodo
        submitTodo={submitMock}
        restoreTodo={restoreMock}
        deleted={deleted}
      />,
    );
  });
  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
  it('Should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  });
  describe('Add todo button ', () => {
    it('Should exist', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    });
    it('Should call the submitTodo function when clicked', () => {
      component = mount(
        <AddTodo
          submitTodo={submitMock}
          restoreTodo={restoreMock}
          deleted={deleted}
        />,
      );

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });
  describe('Restore todo button', () => {
    it('Should exist', () => {
      expect(component.find('.todo-restore').length).toEqual(1);
    });
    it('Should call the restoreTodo function when clicked', () => {
      expect(restoreMock.mock.calls.length).toEqual(0);
      component.find('.todo-restore').simulate('click');
      expect(restoreMock.mock.calls.length).toEqual(1);
    });
  });
});
