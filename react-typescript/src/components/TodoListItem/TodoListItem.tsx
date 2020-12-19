import React from 'react';
import './style.css';
import { ITodo } from '../../interfaces';

type todo = {
	onToggleTodo(id: number): void;
	onRemoveTodo(id: number): void;
}

const TodoListItem:React.FC<ITodo> = ({ id, title, completed }) => {
	return (
		<div></div>
	)
}

export default TodoListItem;
/*
  <li className={classes.join(' ')}>
			<label>
				<input 
					type="checkbox" 
					checked={completed}
				/>
				<span>{title}</span>
				<i className="material-icons red-text">
					delete
				</i>
			</label>
		</li>
*/