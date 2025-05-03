import React from "react";
import './App.css';
import Jobs from './components/jobs'
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Jobs />
    </div>
  );
}

export default App;