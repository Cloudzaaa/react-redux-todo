import {actionTypes} from '../../actions';
import filter, {initialState} from './';

describe('Filter reducer test', () => {
  it('TODO_FILTER_SWITCH return right payload', () => {
    const action = {
      type: actionTypes.TODO_FILTER_SWITCH,
      payload: '1',
    };

    expect(filter(initialState, action)).toEqual('1');
  });

  it('TODO_FILTER_SWITCH return default state if wrong type', () => {
    const action = {
      type: 'WRONG_TYPE',
      payload: '1',
    };

    expect(filter(initialState, action)).toEqual(initialState);
  })
});