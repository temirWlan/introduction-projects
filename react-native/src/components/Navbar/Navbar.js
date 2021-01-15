import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Navbar() {
	return (
		<View style={styles.navbar}>
			<Text style={styles.title}>
				TodoList
			</Text>
		</View>
	)
}