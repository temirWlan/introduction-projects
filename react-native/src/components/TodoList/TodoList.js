import React from 'react';
import { FlatList, Text } from 'react-native';

import Todo from '../Todo';

import styles from './styles';

export default function TodoList({ todos, removeTodo }) {
	return <FlatList 
		style={styles.todoList}
		data={todos}
		keyExtractor={todo => todo.id}
		renderItem={({ item }) => {
			return <Todo 
				todo={item} 
				onRemoveTodo={removeTodo}
			/>
		}}
	/>
}