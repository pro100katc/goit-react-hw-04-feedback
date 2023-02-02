import PropTypes from 'prop-types';
import styles from 'components/FeedbackOptions/FeedbackOptions.module.css';
import { options } from 'assets/options';

export const FeedbackOptions = ({onLeaveFeedback}) => {
    return <div className={styles.feedback}>
        {options.map(option => <button className={styles.button} type="button" name={option} onClick={onLeaveFeedback}>{option}</button>)}
    </div>
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}