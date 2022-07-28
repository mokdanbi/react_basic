import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const [hc, setHc] = useState(false);
  return (
    <div>
      <i className='xi-heart'
      onClick={()=>(setNum(num + 1), setHc(!hc))}
      style={{ color: hc && 'red' }}></i> {num}
    </div>
  );
}

export default App;
