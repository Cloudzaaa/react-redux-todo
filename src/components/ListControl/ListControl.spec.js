import React from 'react';
import {SegmentedControl} from 'evergreen-ui';
import ListControl from './';

describe('List', () => {
  it('List loaded without crashing', () => {
    const component = shallow(
      <ListControl />
    );

    expect(component.find(SegmentedControl)).toHaveLength(1);
  });
});