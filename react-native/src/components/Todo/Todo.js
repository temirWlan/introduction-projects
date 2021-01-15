import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './styles';

export default function Todo({ todo, onRemoveTodo }) {
	return (
		<TouchableOpacity 
			activeOpacity={0.7}
			onLongPress={() => onRemoveTodo(todo.id)}
		>
			<View style={styles.todo}>
				<Text>{todo.title}</Text>
			</View>
		</TouchableOpacity>
	)
}