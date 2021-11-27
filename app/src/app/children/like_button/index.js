import React from 'react'
import LikedIcon from './children/liked_icon'
import UnlikedIcon from './children/unliked_icon'

const LikeButton = (props) => {
  const { isLiked, onClick, size = 26 } = { ...props }
  return (
    <button onClick={onClick} >
      {
        isLiked ?
          <LikedIcon size={size} />
          :
          <UnlikedIcon size={size} />
      }
    </button>
  )
}

export default LikeButton
