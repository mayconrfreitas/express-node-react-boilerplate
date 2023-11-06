import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
  }, [])


  if (!message) {
    return <div>loading...</div>
  }
  
  return (
    <div className="App">
        <h1>{message}</h1>
    </div>
  );
}

export default App;
