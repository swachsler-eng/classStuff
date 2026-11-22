import { useState,useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
    const interval = setInterval(() => {
        setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
    },[count]);

  return (
    <div> Counter: {count} </div>
  )
}

export default Counter