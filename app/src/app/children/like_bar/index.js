import React from 'react'
import styles from './styles'
import { getTimePassed, getLikeCountFromEdges } from './helpers'
import LikeButton from '../like_button'

const LikeBar = (props) => {
    const { data, isLiked, onLikeClick } = { ...props }

    return (
        <div style={styles.container}>
            <div>
                <div style={styles.likeCount}>{getLikeCountFromEdges(data)} likes</div>
                <div style={styles.date}>
                    {getTimePassed(Date.now(), data.taken_at_timestamp * 1000)}
                </div>
            </div>
            <LikeButton onClick={onLikeClick} isLiked={isLiked} />
        </div>
    )
}

export default LikeBar