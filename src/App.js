import logo from './logo.svg';
import './App.css';

function App() {

  const nayok =['shakib','emon','riyaj','ferdous','ananto','nerob','shuvo'];
  return (
    <div className="App">
      {/* {
        nayok.map(nayoks => <li>Name: {nayoks}</li>)
      } */}
      {
        nayok.map(nayoks => <Person>Name={nayoks}</Person> )
      }

      {
        nayok.map(nayoks => <person name={nayoks}></person>)

      }

      {/* <Person name={nayok[0]} nayka="bangladesh"></Person>
      <Person name={nayok[1]} nayka="bangladesh"></Person>
      <Person name={nayok[2]} nayka="bangladesh"></Person>
      <Person name={nayok[3]} nayka="bangladesh"></Person> */}
      <Person></Person>
      
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className='person'>
       <h1>{props.name}</h1>
       <p>{props.nayok}</p>
       <p> </p>
       {/* <p>team: Bangladesh</p> */}
    </div>
  )
}




export default App;
