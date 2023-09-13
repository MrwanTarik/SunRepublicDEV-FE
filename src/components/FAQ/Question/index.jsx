import classNames from 'classnames';
import React, { useState } from 'react';

import classes from './styles.module.scss';

export default function Question({ question }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  return (
    <div className={classes.Question}>
      <div
        className={classNames(
          classes.question,
          isAnswerVisible && classes.open
        )}
        onClick={() => setIsAnswerVisible((prevState) => !prevState)}
      >
        {question.question}
      </div>
      {isAnswerVisible && (
        <div
          className={classes.answer}
          onClick={() => setIsAnswerVisible(false)}
        >
          {question.answer}
        </div>
      )}
    </div>
  );
}
