import React, { useState, useEffect } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  // Use useEffect to update the value when the task prop changes
  useEffect(() => {
    setValue(task.task);
  }, [task.task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo({ task: value, id: task.id });
    // Comment out or remove the line below to keep the entered value in the input field
    // setValue("");
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder='Update Task'
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className='todo-btn'>
        Update Task
      </button>
    </form>
  );
};
