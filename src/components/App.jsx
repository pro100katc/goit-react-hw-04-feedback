import { useState } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "components/Notification/Notification";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round((good / countTotalFeedback()) * 100);
    return positiveFeedbackPercentage
  }

  const countLeaveFeedback = (event) => {
    const feedbackType = event.target.name;
    if (feedbackType === 'Good') {
      setGood(prev => prev + 1)
    }
    if (feedbackType === 'Neutral') {
      setNeutral(prev => prev + 1)
    }
    if (feedbackType === 'Bad') {
      setBad(prev => prev + 1)
    }
  }

  return <>
    <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={countLeaveFeedback}/>
    </Section> 
    <Section title="Statistics">
      {countTotalFeedback() ? 
      <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/> :
      <Notification message="There is no feedback"/>}
    </Section> 
  </>
}
