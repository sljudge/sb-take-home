import React from 'react'
import styles from './styles'

/**
 * Renders a div for displaying User logo, name and location
 * @param {{data: json}} props 
*/
const UserBlock = (props) => {
    const { data } = { ...props }

    return (
        <div style={styles.container}>
            <img src={data.owner.profile_pic_url} style={styles.logo} alt="" />
            <div style={styles.textContainer}>
                <p style={styles.name}>{data.owner.username}</p>
                <p style={styles.location}>{data.location.name}</p>
            </div>
        </div>
    )
}

export default UserBlock