import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className='person'>
       <h1>shakib al hasan </h1>
       <p>profession : Cricketer </p>
       <p>team: Bangladesh</p>
    </div>
  )
}




export default App;
