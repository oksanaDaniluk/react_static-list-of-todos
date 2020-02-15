import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = (props) => {
  const { todos } = props;

  return (
    <div className="todoList">
      <h1>list of todo</h1>
      <div className="todo">
        {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
