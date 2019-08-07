import React, {Component} from 'react';
import {TextInput, Pane, Button, Heading} from 'evergreen-ui';
import {TODO_ADD, TODO_DELETE_ALL} from '../../actions';
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

          <Pane marginTop={10}>
            <Button
            appearance="primary"
            intent="success"
            type="submit"
            marginLeft={15}
          >
            Add
          </Button>
          </Pane>

        </form>
        <Button
          appearance="primary"
          intent="danger"
          marginLeft={15}
          onClick={this.props.onDeleteAll}
        >
          Clean List
        </Button>
      </Pane>
    );
  }
};

const mapStateToProps = ({todos}) => {
  return {
    todos,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (item) => {
      dispatch(TODO_ADD(item))
    },

    onDeleteAll: () => {
      dispatch(TODO_DELETE_ALL())
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormMain);
