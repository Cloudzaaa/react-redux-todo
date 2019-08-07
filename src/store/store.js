import { createStore } from 'redux';
import todoApp from '../reducers'
import {loadState, saveState} from '../localStorage';
import {throttle} from 'lodash';

const preloadState = loadState();

let store = createStore(todoApp, preloadState);

store.subscribe(() => {
  throttle(() => {
  const {todos, filter} = store.getState();
  saveState({
    todos,
    filter
  });
  }, 1000);
});

export default store;