import React from 'react';
import User from './components/firstUser/User'
import Table from './table/Table'

function App() {
  return (
    <div className="App" >
        <nav style={{background: '#252079', width: '100%'}}>Nav</nav><br/>
        <User/><br/>
        <Table /><br/>
    </div>
  );
}

export default App;
