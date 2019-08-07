import React, {Component} from 'react';
import './App.css';
import VisibleTodoList from '../../containers/VisibleTodoList';
import ActiveListControl from '../../containers/ActiveListControl';
import FormMain from '../FormMain';
import {Pane} from 'evergreen-ui';
import store from '../../store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    console.log(store.getState());

    return (
      <Provider store={store}>
        <Pane className="App" display="flex" flex-direction="row" marginTop={50}>
          <FormMain />
          <VisibleTodoList />
          <ActiveListControl />
        </Pane>
      </Provider>
    );
  }
}

export default App;
