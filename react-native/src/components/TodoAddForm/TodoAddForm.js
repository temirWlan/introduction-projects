import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

import styles from './styles';

export default function TodoAddForm({ onAddTodo }) {
	const [value, setValue] = useState('');

	const onPressBtn = () => {
		if (value.trim()) {
			onAddTodo(value);
			setValue('');
		} else {
			Alert.alert('Fill input!')
		}
	};

	return (
		<View style={styles.block}>
			<TextInput
				placeholder='write task' 
				placeholderTextColor='rgba(255, 255, 255, 0.5)'
				style={styles.input}
				autoCorrect={false}
				autoCapitalize='none'
				value={value}
				onChangeText={setValue}
			/>
			<Button 
				title='Add' 
				onPress={onPressBtn}
			/>
		</View>
	)
}