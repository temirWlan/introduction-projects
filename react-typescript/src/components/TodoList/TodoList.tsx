import React from 'react';
import { ITodo } from '../../interfaces';

type Props = {
	todos: ITodo[];
	onToggleTodo(id: number): void;
	onRemoveTodo(id: number): void;
}

const TodoList:React.FC<Props> = ({ todos, onToggleTodo, onRemoveTodo }) => {
	if (!todos.length) {
		return <p className="center">Список задач пуст</p>
	}

	return (
		<ul>
			{
				todos.map((todo: ITodo) => {
					const { id, title, completed } = todo;
					const classes = ['todo'];

					completed && classes.push('completed');
					
					return (
						<li key={id} className={classes.join(' ')}>
							<label>
								<input 
									type="checkbox" 
									checked={completed}
									onClick={() => onToggleTodo(id)}
								/>
								<span>{title}</span>
								<i 
									className="material-icons red-text" 
									onClick={() => onRemoveTodo(id)}
								>
									delete
								</i>
							</label>
						</li>	
					)
				})
			}
		</ul>
	)
}

export default TodoList;