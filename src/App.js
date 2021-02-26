import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import DrumMachine from './components/DrumMachine';

class App extends React.Component {
  render() {
    return (
      <div className="container py-5" id="app">
        <h1 className="mb-5 text-center">Drum Machine</h1>
        
        <DrumMachine />
      </div>
    )
  }
}

export default App;