import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask, toggleTask }) {
  if (tasks.length === 0) return <p>No tasks yet!</p>;

  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
