import { useState } from 'react'
//import Weather from './Weather'
import './App.css'

function App() {
  
  const [first,setFirst] = useState('');
  const [last,setLast] = useState('');
function handleSubmit(e){
  e.preventDefault();
  console.log(first,last);
}
  return (
    // <>
    //   <Weather />
    // </>
    <form onSubmit={handleSubmit}>
      first: <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} />
      <br/>
      last: <input type="text" value={last} onChange={(e) => setLast(e.target.value)} />
      <br/>
      <input type="submit" value="Submit"  />
    </form>
  )
}

export default App
