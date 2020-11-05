import React from 'react';
import styles from './task-add-form.module.css';

export default function TaskAddForm() {
	const input = React.createRef();

	const onAddTask = e => {
		e.preventDefault();

		if (localStorage.getItem('tasks')) {
			const tasks = JSON.parse(localStorage.getItem('tasks'));

			localStorage.removeItem('tasks');
			localStorage.setItem('tasks', JSON.stringify([...tasks, input.current.value]));
		} else {
			const tasks = [];
			tasks.push(input.current.value);

			localStorage.setItem('tasks', JSON.stringify(tasks));
		}

		input.current.value = '';
	};

	return (
		<div>
			<form 
				className={styles.form}
				onSubmit={onAddTask}
			>
				<input 
					className={styles.input}
					type="text"
					ref={input}
				/>
				<button 
					className={styles.btn}
					type="submit" 
				/>
			</form>
		</div>
	);
}