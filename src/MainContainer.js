import React, {useState} from 'react';
import Header from './Header';
import TaskList from './TaskList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const MainContainer = () => {
  const [tasks, setTasks] = useState([
    {
      taskName: 'Complete 10 push ups',
      isCompleted: false,
      dueDate: new Date(),
    },
    {
      taskName: 'Interview Scheduled for Mike',
      isCompleted: false,
      dueDate: new Date(),
    },{
      taskName: 'Meeting',
      isCompleted: false,
      dueDate: new Date(),
    },{
      taskName: `Party at Jason's house`,
      isCompleted: false,
      dueDate: new Date(),
    },
  ])
  console.log(tasks);
  return (
    <Container style={{backgroundColor: 'rgb(250, 250, 253)', padding: 30}}>
      <Header />
      <TaskList tasks={tasks}/>
      <a style={{textDecoration: 'none'}} href="#" class="float">
        <i style={{fontSize: 55, fontFamily: "Times New Roman", fontWeight: 900}} class="my-float">+</i>
      </a>
    </Container> 
  );
}

export default MainContainer;
