import React, {Component} from 'react';
import './App.css';
import BlockList from '../BlockList';
import FormMain from '../FormMain';
import {Pane} from 'evergreen-ui';
import store from '../../store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Pane className="App" display="flex" flex-direction="row" marginTop={50}>
          <FormMain />
          <BlockList />
        </Pane>
      </Provider>
    );
  }
}

export default App;
