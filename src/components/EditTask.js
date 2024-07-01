
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';
import './task.css'

const EditTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditTask = (taskId, newTask) => {
    dispatch(editTask(taskId, newTask));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button className='deletebutton' onClick={() => handleDeleteTask(task.id)}>Delete</button>
          <button className='editbutton' onClick={() => handleEditTask(task.id, prompt('Edit task', task.text))}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default EditTask;
