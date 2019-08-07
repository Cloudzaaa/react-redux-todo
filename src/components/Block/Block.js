import React from 'react';
import {Pane, Icon} from 'evergreen-ui';
import PropTypes from 'prop-types';
import './block.css';

const Block = ({complete, text, onBlockClick, onBlockDelete}) => {
  return (
    <Pane
      className="todo-block"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width={300}
    >
      <p
        onClick={onBlockClick}
        className={complete}
        width="100%"
      >
        {text}
      </p>
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

Block.propTypes = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.string,
  onBlockClick: PropTypes.func.isRequired,
};

export default Block;
