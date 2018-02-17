import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import List, { ListSubheader } from 'material-ui/List';
const TodoList = ({ todos, onTodoClick }) => (
  <List>
    <ListSubheader>Todo List</ListSubheader>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </List>
  
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
