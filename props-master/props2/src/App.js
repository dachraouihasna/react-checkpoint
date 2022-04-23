
import './App.css';
import {HandleName,Profile} from './profile/Profile';
import React from 'react';



function App() {
  const name="Khenissi Salwa "
  const profession=" Digital Marketing Officer"
  const bio= "I'm a futur developer"
  return (
    <div className="App">
      <Profile fullname={name} bio={bio} profession={profession} />
      <HandleName props={name} /> 
    
    </div>
  );
}

export default App;