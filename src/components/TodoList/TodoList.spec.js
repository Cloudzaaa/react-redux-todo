import React from 'react';
import TodoList from './'
import Todo from '../Todo';
import {Icon} from 'evergreen-ui';

describe('TodoList test', () => {
  const props = {
    todos: [{id: 1, complete: false, text: '1'},{id: 2, complete: false, text: '2'},{id: 3, complete: true, text: '3'}],
    TODO_UPD: jest.fn(),
    TODO_DELETE: jest.fn(),
  };

  it('should render todos without crashing', () => {
    const wrapper = shallow(<TodoList {...props} />);
    expect(wrapper.find(Todo)).toHaveLength(props.todos.length);
  });

  it('should render todos with OnBlockClick func', () => {
    const wrapper = mount(<TodoList {...props} />);
    const todo = wrapper.find(Todo).at(0);
    todo.simulate('click');
    expect(props.TODO_UPD).toBeCalled();
  });

  it('should render todos with OnDeleteClick func', () => {
    const wrapper = mount(<TodoList {...props} />);
    const todo = wrapper.find(Icon).at(0);
    todo.simulate('click');
    expect(props.TODO_DELETE).toBeCalled();
  });

});