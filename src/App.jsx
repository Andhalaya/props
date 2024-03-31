import './App.css'
import {useState} from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false 
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId ))
  }

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? {...task, completed: !task.completed } : task))
  }
  

  return (
    <div>
      <h1>Lista de tareas</h1>
      <AddTaskForm addTask={addTask}/>
      <div className="task-list">
        {tasks.map(task => (
          <Task
            id={task.id}
            key={task.id}
            text={task.text}
            completed={task.completed}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
