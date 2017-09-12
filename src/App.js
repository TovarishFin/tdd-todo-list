import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/addTodo';
import TodoList from './components/todoList/todoList';
import actions from './actions/actions';

export const App = ({ submitTodo, todos, deleted, deleteTodo, restoreTodo }) => (
  <div>
    <h1>Todo list</h1>
    <AddTodo submitTodo={submitTodo} deleted={deleted} restoreTodo={restoreTodo} />
    <TodoList todos={todos} deleteTodo={deleteTodo} />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleted: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  restoreTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },

  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },

  restoreTodo: () => {
    dispatch(actions.restoreTodo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
