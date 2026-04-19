import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [hiddenNote, setHiddenNote] = useState('');
  const [showNote, setShowNote] = useState(false);
  const [forgiven, setForgiven] = useState(null);
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });
  const [showForgivenMessage, setShowForgivenMessage] = useState(false);
  const [showSecretMessage, setShowSecretMessage] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const response = await axios.get('/api/message');
      setMessage(response.data.mainMessage);
      setHiddenNote(response.data.hiddenNote);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching message:', error);
      setLoading(false);
    }
  };

  const handleForgiveClick = () => {
    setForgiven(true);
    setShowForgivenMessage(true);
  };

  const handleNotForgiveClick = () => {
    // Move the button to a random position
    const newTop = Math.random() * 70 + 10; // 10% to 80% from top
    const newLeft = Math.random() * 70 + 10; // 10% to 80% from left
    setButtonPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  const handleBackClick = () => {
    setShowForgivenMessage(false);
    setForgiven(null);
  };

  const handleSecretNoteClick = () => {
    setShowSecretMessage(!showSecretMessage);
  };

  if (loading) {
    return (
      <div className="App">
        <div className="loading">
          <div className="heart">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="header">
            <h1 className="title">A Super Cute Message For You</h1>
            <div className="sparkles"> ✨✨✨✨💖✨✨✨✨ </div>
            <div className="cute-emoji"> 🥰💕🌟🎈🦄 </div>
          </div>
          
          <div className="message-section">
            <div className="message-bubble">
              <p className="main-message">
                {message}
              </p>
            </div>
          </div>

          {showSecretMessage && (
            <div className="hidden-note-container">
              <div className="hidden-note">
                <div className="note-header">
                  <span className="note-icon"> 💌 </span>
                  <h3>Secret Message For You</h3>
                </div>
                <p className="note-content">
                  🌟 You're the most important person of my life. I know i irritate you a lot but its fun. I love when you are around me i love your company and i always wanted to be with you i get jealous when you are with others but i promise i will never hurt you from now i will try to improve myself. LOVE YOU💕✨
                </p>
                <div className="note-footer">
                  <span className="heart-icon"> ❤️ </span>
                  <span className="celebration-text"> 🎊🎈🎉🎊 </span>
                </div>
              </div>
            </div>
          )}

          {showForgivenMessage && (
            <div className="hidden-note-container">
              <div className="hidden-note">
                <div className="note-header">
                  <span className="note-icon"> 🎉 </span>
                  <h3>FOREVER BESTIE! 🎊</h3>

                </div>
                <p className="note-content">
                  🥰 FOREVER BESTIE AND ILU! I know i have hurt u alot in the past few time and i am really sorry for it. I know i'm not perfect but i am working on myself and changing myself and i will never hurt you again and this time you can trust me i promise 🌟💖 ℒ𝓸𝓿𝒆 𝔂𝓸𝓾𓆩 ♡ 𓆪🦋
                </p>

                <h3>🦋MY 𝐐𝐮𝐞𝐞𝐧♔</h3>
                <div className="note-footer">
                  <span className="heart-icon"> ❤️ </span>
                  <span className="celebration-text"> 🎊🎈🎉🎊 </span>
                </div>
              </div>
            </div>
          )}

          <div className="decorations">
            <div className="float-heart"> ❤️ </div>
            <div className="float-heart"> ❤️ </div>
            <div className="float-heart"> ❤️ </div>
            <div className="puppy-container">
              <div className="puppy puppy-1"> 🐶 </div>
              <div className="heart-small"> ❤️ </div>
            </div>
            <div className="puppy-container">
              <div className="puppy puppy-2"> 🐶 </div>
              <div className="heart-small"> ❤️ </div>
            </div>
            <div className="puppy-container">
              <div className="puppy puppy-3">🐶 </div>
              <div className="heart-small"> ❤️ </div>
            </div>
            <div className="floating-hearts">
              <div className="mini-heart mini-heart-1"> ❤️ </div>
              <div className="mini-heart mini-heart-2"> ❤️ </div>
              <div className="mini-heart mini-heart-3"> ❤️ </div>
              <div className="mini-heart mini-heart-4"> ❤️ </div>
              <div className="mini-heart mini-heart-5"> ❤️ </div>
            </div>
          </div>
        </div>

        {/* Buttons outside the card */}
        {!showForgivenMessage && (
          <>
            <button 
              className="not-forgive-button"
              style={{
                position: 'fixed',
                top: buttonPosition.top,
                left: buttonPosition.left,
                transform: 'translate(-50%, -50%)',
                zIndex: 1000
              }}
              onClick={handleNotForgiveClick}
            >
              😢 Not Forgiven 😢
            </button>
            <button 
              className="forgive-button"
              onClick={handleForgiveClick}
            >
              🥰 Forgive Me 🥰
            </button>
          </>
        )}

        {showForgivenMessage && (
          <div className="forgiven-buttons">
            <button 
              className="back-button"
              onClick={handleBackClick}
            >
              ⬅️ Back
            </button>
          </div>
        )}

        {/* Secret note button always visible */}
        <button 
          className="secret-note-button-main"
          onClick={handleSecretNoteClick}
        >
          💌 Secret Note
        </button>
      </div>
    </div>
  );
}

export default App;
