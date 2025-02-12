import React, { useState } from 'react';
import './task.css'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddingTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <button className='addtaskbutton' onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddingTask;
