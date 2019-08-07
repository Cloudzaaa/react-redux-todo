import {actionTypes} from '../../actions';

const initialState = 'ALL';

const filter = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_FILTER_SWITCH :
      return action.payload;
    default:
      return state
  }
};

export default filter;
