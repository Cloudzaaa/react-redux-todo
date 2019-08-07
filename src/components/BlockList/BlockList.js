import React from 'react';
import Block from '../Block'
import {Pane, Heading} from 'evergreen-ui';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TODO_UPD, TODO_DELETE} from '../../actions/actions';

const BlockList = ({todos, TODO_UPD, TODO_DELETE}) => {
  const renderBlocks = () => {
    return todos.map(block => {
      return <Block
        key={block.id}
        complete={block.complete ? 'completed' : ''}
        text={block.text}
        onBlockClick={() => TODO_UPD(block.id)}
        onBlockDelete={() => TODO_DELETE(block.id)}
      />
    });
  };

  return (
    <Pane
      width={400}

    >
      <Heading size={600}>Todo list</Heading>
      {renderBlocks()}
    </Pane>
  );
};

BlockList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
    }),
  ),
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    TODO_UPD: (id) => {
      dispatch(TODO_UPD(id))
    },
    TODO_DELETE: (id) => {
      dispatch(TODO_DELETE(id))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockList);