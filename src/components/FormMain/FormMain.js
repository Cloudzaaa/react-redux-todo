import React, {Component} from 'react';
import {TextInput, Pane, Button, Heading} from 'evergreen-ui';
import {TODO_ADD} from '../../actions';
import {connect} from 'react-redux';

class FormMain extends Component {
  state = {
    text: '',
  };

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <Pane
        marginLeft={20}
        marginRight={20}
      >
        <Heading
          size={600}
          marginBottom={15}
        >
          Add todo
        </Heading>

        <form onSubmit={this.onSubmit}>
          <TextInput
            name="text"
            placeholder="Task text..."
            value={this.state.text}
            onChange={this.handleInput}
            required
          />

          <Button
            appearance="primary"
            intent="success"
            type="submit"
            marginLeft={15}
          >
            Add
          </Button>

        </form>
      </Pane>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (item) => {
      dispatch(TODO_ADD(item))
    },
  }
};

export default connect(null, mapDispatchToProps)(FormMain);
