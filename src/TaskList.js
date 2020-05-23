import React from 'react';
import Task from './Task';

const TaskLists = (tasks) => {
  if (tasks.tasks && tasks.tasks.length > 0) {
    return tasks.tasks.map((task, index)=> {
      return (
        <div key={index}>
          <Task task={task} />
        </div>
      );
    })  
  }
}

export default TaskLists;
