import React, { useState, useEffect } from 'react'
import Image from './children/image'
import LikeBar from './children/like_bar'
import UserBlock from './children/user_block'
import CommentBlock from './children/comments_block'
import styles from './styles'

const App = (props) => {
  const { data } = props
  const [isLiked, setIsLiked] = useState(data.viewerHasLiked)

  const handleLikeClick = () => {
    setIsLiked(!isLiked)
  }

  useEffect(() => {
    console.log(data)

  }, [data])

  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <UserBlock data={data} />
        <CommentBlock data={data} />
        <LikeBar data={data} isLiked={isLiked} onLikeClick={handleLikeClick} />
      </div>
    </main>
  )
}

export default App
