
import React, { useState } from 'react';
import TodoItem from './Todoitem';
import './Todolist.css'

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input 
          type="text" 
          placeholder="Add new task" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <TodoItem 
            key={task.id} 
            task={task} 
            toggleTask={toggleTask} 
            deleteTask={deleteTask} 
          />
        ))}
      </ul>
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {tasks.filter(task => task.completed).length}</p>
    </div>
  );
};

export default TodoList;
