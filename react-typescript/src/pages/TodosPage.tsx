import React, { useState, useEffect } from 'react';
import { ITodo } from '../interfaces';

import TodoAddForm from '../components/TodoAddForm';
import TodoList from '../components/TodoList';

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		const savedTodos: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]');
		setTodos(savedTodos);
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const addTodo = (title: string): void => {
		const newTodo: ITodo = {
			id: Math.random(),
			title,
			completed: false
		};
		
		setTodos(prev => [newTodo, ...prev]);
	};

	const toggleTodo = (id: number): void => {
		setTodos(
			todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}

				return todo;
			})
		);
	};

	const removeTodo = (id: number): void => {
		setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div className="container">
      <TodoAddForm onAddTodo={addTodo} />
      <TodoList 
        todos={todos} 
        onToggleTodo={toggleTodo} 
        onRemoveTodo={removeTodo}
      />
    </div>
  )
};

export default TodosPage;