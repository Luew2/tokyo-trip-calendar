import React, { useState, useEffect } from 'react';
import JapanTripCalendar from './components/JapanTripCalendar';
import './App.css';

function getRandomFaceFromList() {
  const faceImages = [
    'jake.png',
    'lucas.png',
    'august.png',
    'raj.png',
    'khaya.png',
    'toby.png'
  ];
  
  const randomIndex = Math.floor(Math.random() * faceImages.length);
  return `${process.env.PUBLIC_URL}/faces/${faceImages[randomIndex]}`;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState('spin');
  const [randomFace, setRandomFace] = useState('');

  useEffect(() => {
    // Select random face image
    const imageSrc = getRandomFaceFromList();
    setRandomFace(imageSrc);
    
    // Animation sequence timing
    setTimeout(() => setAnimationPhase('shake'), 700);
    setTimeout(() => setAnimationPhase('spin'), 1300);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="min-h-screen py-8">
      {loading ? (
        <div className="loading-container">
          <div className={`loading-image-container ${animationPhase}`}>
            <img 
              src={randomFace}
              alt="Loading" 
              className="loading-image" 
            />
          </div>
        </div>
      ) : (
        <JapanTripCalendar />
      )}
    </div>
  );
}

export default App;