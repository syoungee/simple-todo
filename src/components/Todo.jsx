import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

export default function Todo({ todo, handleToggleTodo, handleDeleteTodo }) {
  return (
    <li
      key={todo.id}
      className="flex items-center bg-gray-200 p-2 rounded mb-2 m-2" // Tailwind CSS 클래스 추가
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => handleToggleTodo(todo.id)}
    >
      <span className="flex-grow">{todo.text}</span>
      <MdDeleteForever className="text-grey-500 cursor-pointer" onClick={() => handleDeleteTodo(todo.id)} />
    </li>
  );
}
