import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './comps/Header'
import Figure from './comps/Figure'
import WrongLetters from './comps/WrongLetters'
import Words from './comps/Words'
import showNotification from './helpers/helpers'
import Notification from './comps/Notification'
import Popup from './comps/Popup'


const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNot, setShowNot] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const {key, keyCode} = e;
      console.log(key, keyCode);
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
  
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(current => [...current, letter]);
          } else {
            showNotification(setShowNot)
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(current => [...current, letter]);
          } else {
            showNotification(setShowNot)
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [correctLetters, wrongLetters, playable])

  const playAgain = () => {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    selectedWord = words[Math.floor(Math.random() * words.length)];
  }

  return (
    <>
      <Header></Header>
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters} />
        <Words selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNot={showNot}/>
    </>
  );
}

export default App;
