import React from 'react';

import './TestLetter.css';

const TestLetter = ({ individualLetterInfo }) => {
  const { status } = individualLetterInfo;
  // let statusClass;

  // if (status === "correct") {
  //     statusClass = "tes-letter-correct"
  // }else if (status=== "incorrect") {
  //     statusClass= "test-letter-incorect"
  // }else {
  //     statusClass = "test-letter-not-attempted"
  // }

  const statusClassName = {
    correct: 'test-letter-correct',
    incorrect: 'test-letter-incorrect',
    notAttempted: 'test-letter-not-attempted',
  }[status];

  return (
    <span className={`test-letter ${statusClassName}`}>
      {individualLetterInfo.testLetter}
    </span>
  );
};

export default TestLetter;
