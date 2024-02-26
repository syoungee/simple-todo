// TodoApp.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../reducers/actions';
import { MdDeleteForever } from 'react-icons/md';

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
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center bg-gray-200 p-2 rounded mb-2 m-2" // Tailwind CSS 클래스 추가
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            <span className="flex-grow">{todo.text}</span>
            <MdDeleteForever className="text-grey-500 cursor-pointer" onClick={() => handleDeleteTodo(todo.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
