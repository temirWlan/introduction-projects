import React from 'react';

import styles from './app.module.css';

import TaskAddForm from '../task-add-form';


export default function App() {
  return (
   <div className={styles.app}>
   	<div className={styles.container}>
      	<TaskAddForm />
      </div>
   </div>
  );
}

