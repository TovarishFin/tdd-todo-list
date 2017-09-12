import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo, restoreTodo, deleted }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitTodo(input.value);
          input.value = '';
        }}
      >
        <input
          className="todo-input"
          ref={(element) => {
            input = element;
          }}
        />
        <button
          className="todo-submit"
          type="submit"
        >
          Add Todo
        </button>

        <button
          className="todo-restore"
          type="button"
          onClick={() => {
            if (deleted.length > 0) {
              restoreTodo();
            }
          }}
        >
          Undo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  restoreTodo: PropTypes.func.isRequired,
  deleted: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default AddTodo;
