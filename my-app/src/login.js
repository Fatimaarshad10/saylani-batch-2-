// src/App.js

import React, { useState } from 'react';

function Login(props) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    // if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    // }
  };

  const removeTask = (index) => {
    console.log(index)
    setTasks(tasks.filter((data,i) => console.log(data)));
  };

  return (
    <div>
      <h1>{props.newData}</h1>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Login;
