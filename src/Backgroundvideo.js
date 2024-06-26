import React from 'react';
import './BackgroundVideo.css'; // We'll add some styling here

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop>
        <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;
