import { useState } from 'react';
import './App.css';

function App() {
  
  const [count, setCount] = useState(0);

  function handleAdd(){
    setCount(count + 1)
  }
  function handleSub(){
    setCount(count - 1)
  }
  function handleReset(){
    setCount(0)
  }

  return (
    <div className="App">
      <button onClick={handleSub}>Sub</button>
        <div className='counterContainer'>
          <p>{count}</p>
        </div>
        <button onClick={handleAdd}>Add</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
