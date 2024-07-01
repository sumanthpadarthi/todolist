export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId,
  });
  
  export const editTask = (taskId, newTask) => ({
    type: 'EDIT_TASK',
    payload: { taskId, newTask },
  });
  