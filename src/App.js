
import { useState } from 'react';
import './App.css';

function App() {
  const [count,Setcount]=useState(0)
  if(count>99){
    return Setcount(0)
  }
  return (
    <>
    <div className='one'>
    <button className=' number' ><h1>{count}</h1></button>
    </div>
    <div className='two'>
    <button className=' clear' onClick={()=>Setcount(0)}>Clear</button>
    <button className=' add' onClick={()=>Setcount(count+1)}>Add</button>

    </div>

    </>
  );
}

export default App;
