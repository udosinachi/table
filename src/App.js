import React from 'react';
import Home from './home/Home'
import Home2 from './home2/Home2'

function App() {
  return (
    <div className="App" >
        <nav style={{background: '#252079', width: '100%'}}>Nav</nav><br/>
        <Home />
        <Home2 />
    </div>
  );
}

export default App;
