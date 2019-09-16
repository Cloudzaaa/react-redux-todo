import React from 'react';
import {FormMain} from './FormMain';
import {Button, Pane, TextInput} from 'evergreen-ui';

describe('FormMain test', () => {
  const props = {
    onDeleteAll: jest.fn(),
    onSubmit: jest.fn(),
  };

  it('Rendered without crashing', () => {
    const wrapper = shallow(<FormMain {...props} />);
    expect(wrapper.find(Pane)).toHaveLength(2);
  });

  it('OnClick delete all button worked', () => {
    const wrapper = shallow(<FormMain {...props} />);
    wrapper.find(Button).at(1).simulate('click');
    expect(props.onDeleteAll).toBeCalled();
  });

  it('OnSubmit works', () => {
    const fakeEvent = { preventDefault: () => jest.fn() };
    const wrapper = shallow(<FormMain {...props} />);
    wrapper.find('form').simulate('submit', fakeEvent);

    expect(props.onSubmit).toBeCalled();
  });

  it('Handle input method changes state', () => {
    const wrapper = shallow(<FormMain {...props} />);
    const instance = wrapper.instance();
    const fakeEvent = {target: {name: 'text', value: 'kek'}};
    instance.handleInput(fakeEvent);

    expect(wrapper.state().text).toEqual('kek');
  });
});