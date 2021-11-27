import React from 'react'
import styles from './styles'
import Comment from './children/comment'
import { getCaptionFromEdges, getCommentsFromEdges, highlightHashtags } from './helpers'

/**
 * Renders a div for displaying comments posted
 * @param {{data: json}} props 
*/
const CommentsBlock = (props) => {
    const { data } = { ...props }
    const caption = getCaptionFromEdges(data.edge_media_to_caption)
    const comments = getCommentsFromEdges(data.edge_media_to_comment)

    return (
        <div style={styles.container}>
            <div style={styles.captionContainer}>
                <span style={styles.username}>{data.owner.username}</span>
                {highlightHashtags(caption)}
            </div>
            {comments.map((comment) => (
                <Comment key={`c-${comment.id}`} data={comment} />
            ))}
        </div>
    )
}

export default CommentsBlock