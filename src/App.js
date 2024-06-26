// src/App.js
import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BackgroundVideo />
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is an example of a website with a background video.</p>
      </div>
    </div>
  );
};

import React from 'react';
import './App.css';
import BackgroundVideo from './BackgroundVideo';

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
    </div>
  );
}

export default App;
