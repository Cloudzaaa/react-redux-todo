import {TODO_ADD, TODO_UPD, TODO_DELETE, TODO_DELETE_ALL, TODO_FILTER_SWITCH, actionTypes} from './';
import {v4} from 'node-uuid';

describe('TODO CRUD actions', () => {
  it('TODO_ADD return right object', () => {
    const newItem = {
      someProperty1: '',
      someProperty2: 2,
    };
    const id = v4();
    const expectedAction = {
      type: actionTypes.TODO_ADD,
      payload: {
        ...newItem,
        id: id,
        complete: false,
      },
    };

    expect(TODO_ADD(newItem)).toEqual(expectedAction);
  });

  it('TODO_UPD return updated object', () => {
    const idToUpdate = 1;
    const expectedAction = {
      type: actionTypes.TODO_UPD,
      payload: idToUpdate,
    };

    expect(TODO_UPD(idToUpdate)).toEqual(expectedAction);
  });

  it('TODO_DELETE return deletable object', () => {
    const idToDelete = 1;
    const expectedAction = {
      type: actionTypes.TODO_DELETE,
      payload: idToDelete,
    };

    expect(TODO_DELETE(idToDelete)).toEqual(expectedAction);
  });

  it('TODO_DELETE_ALL return delete All type', () => {
    const expectedAction = {
      type: actionTypes.TODO_DELETE_ALL,
    };

    expect(TODO_DELETE_ALL()).toEqual(expectedAction);
  });
});

describe('TODO_FILTER_SWITCH', () => {
  it('Return switched action by value', () => {
    const filteredVal = 1;
    const expectedAction = {
      type: actionTypes.TODO_FILTER_SWITCH,
      payload: filteredVal,
    };

    expect(TODO_FILTER_SWITCH(filteredVal)).toEqual(expectedAction);
  });
});