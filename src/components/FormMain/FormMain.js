import React, {Component} from 'react';
import {TextInputField, Pane, Button, Heading} from 'evergreen-ui';
import {TODO_ADD} from '../../actions/actions';
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
        width={200}
        marginLeft={30}
        marginRight={30}
      >
        <Heading size={600}>Add todo</Heading>
        <form onSubmit={this.onSubmit}>
          <TextInputField
            label="First name"
            name="text"
            placeholder="First name"
            value={this.state.text}
            onChange={this.handleInput}
            required
          />

          <Button
            appearance="primary"
            intent="success"
            type="submit"
          >
            Send
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
