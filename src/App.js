import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
       <Counter></Counter>
    </div>
  );
}
function Counter(){
  const [count,setCount]=useState(0)
  const incraseCount =()=> setCount(count +1)
  const decraseCount =()=> setCount(count -1)


  return(
<div className="btn-style">
  <h1>Count : {count}</h1>
  <button onClick={incraseCount}>Incrase</button>
  <button onClick={decraseCount }>Decrase</button>
</div>

  )
}

export default App;
