import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navbar from './src/components/Navbar';
import TodoAddForm from './src/components/TodoAddForm';
import TodoList from './src/components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos(prev => [
      {
        id: Math.random().toString(),
        title
      },
      ...prev
    ]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.wrapper}>
      <Navbar />
      <View style={styles.container}>
        <TodoAddForm onAddTodo={addTodo} />
        <TodoList 
          todos={todos} 
          removeTodo={removeTodo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000'
  },
  container: {
    flex: 1,
    paddingHorizontal: 15
  },
});
