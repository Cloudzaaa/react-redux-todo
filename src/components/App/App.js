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
    return (
      <Provider store={store}>
        <Pane className="App" marginTop={50} display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="400px" marginLeft="auto" marginRight="auto">
          <FormMain/>
          <VisibleTodoList/>
          <ActiveListControl/>
        </Pane>
      </Provider>
    );
  }
}

export default App;
