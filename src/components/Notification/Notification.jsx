import PropTypes from 'prop-types';
import styles from 'components/Notification/Notification.module.css'

export const Notification = ({message}) => {
    return <h2 className={styles.title}>{message}</h2>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}