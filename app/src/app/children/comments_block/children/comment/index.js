import React, { useState } from 'react'
import styles from './styles'
import LikeButton from '../../../like_button'
import { highlightHashtags } from '../../helpers'

const Comment = (props) => {
    const { data, index } = { ...props }
    const [isLiked, setIsLiked] = useState(data.likedByViewer)

    const handleLikeClick = () => {
        setIsLiked(!isLiked)
    }

    return (
        <div style={{ ...styles.container, backgroundColor: index & 1 ? '#fbfbfb' : '#ffffff' }}>
            <span>
                <span style={styles.username}>{data.owner.username}</span>
                <span>{highlightHashtags(data.text)}</span>
            </span>
            <span><LikeButton size={16} isLiked={isLiked} onClick={handleLikeClick} /></span>
        </div>
    )
}

export default Comment