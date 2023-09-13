import React from 'react';

import Question from './Question';
import { t } from '../../i18n';

import classes from './styles.module.scss';

export default function FAQ() {
  const questions = [
    {
      question: t('faqQuestion1'),
      answer: t('faqAnswer1'),
    },
    {
      question: t('faqQuestion2'),
      answer: t('faqAnswer2'),
    },
    {
      question: t('faqQuestion3'),
      answer: t('faqAnswer3'),
    },
    {
      question: t('faqQuestion4'),
      answer: t('faqAnswer4'),
    },
    {
      question: t('faqQuestion5'),
      answer: t('faqAnswer5'),
    },
    {
      question: t('faqQuestion6'),
      answer: t('faqAnswer6'),
    },
  ];

  return (
    <div className={classes.FAQ}>
      <div className={classes.container}>
        {questions.map((question) => {
          return <Question question={question} key={question.question} />;
        })}
      </div>
    </div>
  );
}
