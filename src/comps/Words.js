import React from 'react'

const Words = ({selectedWord, correctLetters}) => {
  return (
    <div className="word">
      {selectedWord
			.split('')
			.map(
				(letter, i) => (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
			)}
    </div>
  )
}

export default Words