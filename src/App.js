import React from 'react';




// project components
import NewNote from './components/NewNote';
import Header from './components/Header';
import NotesContainer from './components/NotesContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <NewNote />
      <NotesContainer />
    </div >
  );
}

export default App;


