import React from 'react';

const Task = (task) => {
  console.log('task', task);
  return (
    <div style={{backgroundColor: 'rgb(253, 253, 253)', boxShadow: '2px 2px 3px rgb(240, 239, 233)', padding: 5, marginBottom: 15}}>
      <h3 style={{fontSize: 20, textAlign: 'left', paddingLeft: 10, marginBottom: 0}}>{task.task.taskName}</h3>
      <p style={{fontSize: 15, color: 'rgb(191, 190, 186)', textAlign: 'left', paddingLeft: 10, marginTop: 3}}>Due On: 13th may 2020</p>
    </div>
  );
}

export default Task;
