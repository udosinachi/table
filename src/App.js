import React from 'react';
import Home from './home/Home'
import Home2 from './home2/Home2'
import Home3 from './home3/Home3'
import Home4 from './home4/Home4'

function App() {
  return (
    <div className="App" >
        <nav style={{background: '#252079', width: '100%'}}>Nav</nav><br/>
        <Home />
        <Home2 />
        <Home3 />
        <Home4 />
    </div>
  );
}

export default App;
