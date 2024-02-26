// TodoApp.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../reducers/actions';
import Todo from './Todo';

const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 m-2">Todo app</h3>
      <div className="m-2">
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="border p-2 mr-2" />
        <button onClick={handleAddTodo} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo}></Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
