import React from 'react';
import App from './';
import {Provider} from 'react-redux';

describe('App test', () => {
  it('App loaded without crashing', () => {
    const component = shallow(
      <App />
    );

    expect(component.find(Provider)).toHaveLength(1);
  });
});