import React from 'react'

const Notification = ({showNot}) => {
  return (
    <div className={`notification-container ${showNot ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification