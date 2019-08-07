import React from 'react';
import {connect} from 'react-redux';
import ListControl from '../../components/ListControl';
import {TODO_FILTER_SWITCH} from '../../actions';

const mapStateToProps = ({filter}) => {
  return {
    filter,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterSwitch: (filter) => {
      dispatch(TODO_FILTER_SWITCH(filter))
    },
  }
};

const ActiveListControl = connect(mapStateToProps, mapDispatchToProps)(ListControl);

export default ActiveListControl;