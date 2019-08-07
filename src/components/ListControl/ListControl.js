import React from 'react';
import {SegmentedControl} from 'evergreen-ui';

const ListControl = ({filter, onFilterSwitch}) => {
    return (
      <SegmentedControl
        width={240}
        options={[{label: 'All', value: 'ALL'}, {label: 'Completed', value: 'COMPLETED'}]}
        value={filter}
        onChange={onFilterSwitch}
      />
    )
};

export default ListControl;