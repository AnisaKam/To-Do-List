import './App.css';
import image from './people.jpg';
import imageTwo from './airplane.jpg';
import { ToDoList } from './ToDoList';


function App() {
  return (
    <div className='app'> 
      <div className='container'>
      <img src= {image} width='400px' alt='people' />
      </div>
      <div className='container'>
      <h1>To-do list</h1>
      </div>
      <ToDoList/>
      <div className='container'>
      <img src= {imageTwo} width='300px' alt='airplane' />
      </div>
    </div>
  );
}

export default App;
