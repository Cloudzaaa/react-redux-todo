import {TODO_ADD, TODO_UPD, TODO_DELETE, TODO_DELETE_ALL} from '../../actions';
import todos, {initialState} from './';

describe('Todos reducer test', () => {
  it('TODO_ADD must return new array with new item', () => {
    const newItem = {};
    expect(todos(initialState, TODO_ADD(newItem))).toHaveLength(1)
  });

  it('TODO_UPD must return new array with updated item by id', () => {
    const idToUpdate = 2;
    const initialState = [
      {id: 1, complete: false},
      {id: 2, complete: false},
      {id: 3, complete: false},
    ];

    const expectedState = [
      {id: 1, complete: false},
      {id: 2, complete: true},
      {id: 3, complete: false},
    ];

    expect(todos(initialState, TODO_UPD(idToUpdate))).toEqual(expectedState)
  });

  it('TODO_DELETE must return array without deleted item', () => {
    const idToDelete = 2;
    const initialState = [
      {id: 1, complete: false},
      {id: 2, complete: false},
      {id: 3, complete: false},
    ];

    const expectedState = [
      {id: 1, complete: false},
      {id: 3, complete: false},
    ];

    expect(todos(initialState, TODO_DELETE(idToDelete))).toEqual(expectedState)
  });

  it('TODO_DELETE_ALL must return new empty array', () => {
    const initialState = [
      {id: 1, complete: false},
      {id: 2, complete: false},
    ];

    const expectedState = [];

    expect(todos(initialState, TODO_DELETE_ALL())).toEqual(expectedState)
  });
});