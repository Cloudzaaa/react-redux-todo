import React from 'react';
import {Pane, Icon, Paragraph} from 'evergreen-ui';
import PropTypes from 'prop-types';
import './todo.css';

const Todo = ({complete, text, onBlockClick, onBlockDelete}) => {
  return (
    <Pane
      className="todo-block"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      onClick={onBlockClick}
      marginBottom={15}
    >
      <Paragraph
        className={complete}
        width="100%"
      >
        {text}
      </Paragraph>
      <Pane display="flex" justifyContent="space-between" alignItems="center" width={80}>
        <Pane display="flex">
          <Icon
            icon="ban-circle"
            color="danger"
            size={20}
            onClick={onBlockDelete}
          />
        </Pane>

      </Pane>
    </Pane>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.string,
  onBlockClick: PropTypes.func.isRequired,
};

export default Todo;
