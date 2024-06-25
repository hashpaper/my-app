// src/BackgroundVideo.js
import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/bganimation.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;

// src/App.js
import React from 'react';
import BackgroundVideo from './Backgroundvideo';
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

export default App;


