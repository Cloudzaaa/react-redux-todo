import React from 'react';
import Todo from './';
import {Pane, Paragraph} from 'evergreen-ui';

describe('Todo component', () => {
  const props = {
    complete: '',
    text: 'kek',
    onBlockClick: jest.fn(),
    onBlockDelete: jest.fn(),
  };

  it('Todo rendered', () => {
    const component = shallow(
      <Todo {...props} />,
    );
    expect(component.find(Pane)).toHaveLength(3);
  });

  it('Todo text rendered', () => {
    const component = shallow(
      <Todo {...props} />,
    );

    expect(component.find(Paragraph).prop('children')).toEqual(props.text);
  });

  it('Todo completed with css class', () => {
    const propsWithClass = {...props, complete: 'completed'};
    const component = shallow(
      <Todo {...propsWithClass} completed='completed1' />,
    );

    expect(component.find(Paragraph).prop('class')).toEqual(propsWithClass.completed);
  });

  it('Todo on click is work', () => {
    const component = shallow(
      <Todo {...props} />,
    );
    component.simulate('click');

    expect(props.onBlockClick.mock.calls.length).toEqual(1);
  });

});