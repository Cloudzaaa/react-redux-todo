import React from 'react';
import Todo from '../Todo'
import {Pane, Heading} from 'evergreen-ui';
import PropTypes from 'prop-types';

const TodoList = ({todos, TODO_UPD, TODO_DELETE}) => {
  const renderBlocks = () => {
    return todos.map(block => {
      return <Todo
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
      <Heading
        size={600}
        marginBottom={15}
      >
        Todo list
      </Heading>
      {renderBlocks()}
    </Pane>
  );
};

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
    }),
  ),
};

export default TodoList;