import React, {useEffect} from 'react'
import {checkWin} from '../helpers/helpers'

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMes = '';
  let finalWord = '';
  let playable = true;
  if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
    finalMes = 'Congratulations you won!';
    playable = false;
  } else if(checkWin(correctLetters, wrongLetters, selectedWord) === 'lose'){
    finalMes = 'Unfortunately you lost. ';
    finalWord = `...the word was: ${selectedWord}`;
    playable = false;
  }
  useEffect(() => setPlayable(playable));

  return (
    <div className="popup-container" style={finalMes !== '' ? {display: 'flex'} : {}}>
      <div className="popup">
        <h2 id="final-message">{finalMes}</h2>
        <h3 id="final-message-reveal-word">{finalWord}</h3>
        <button id="play-button" onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup