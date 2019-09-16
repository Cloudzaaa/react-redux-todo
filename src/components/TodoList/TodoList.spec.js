import React from 'react';
import TodoList from './'
import Todo from '../Todo';

describe('TodoList test', () => {
  const props = {
    todos: [{id: 1, complete: false, text: '1'},{id: 2, complete: false, text: '2'},{id: 3, complete: true, text: '3'}],
    TODO_UPD: jest.fn(),
    TODO_DELETE: jest.fn(),
  };

  it('TodoList render todos without crashing', () => {
    const wrapper = shallow(<TodoList {...props} />);
    expect(wrapper.find(Todo)).toHaveLength(props.todos.length);
  });

});