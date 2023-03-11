import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallangeContainer from '../TypingChallangeContainer/TypingChallangeContainer';

import './TestContainer.css';

const TestContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onImputChange,
  startAgain,
}) => {
  return (
    <div className='test-container'>
      {timeRemaining > 0 ? (
        <div data-aos='fade-up' className='typing-challenge-cont'>
          <TypingChallangeContainer
            selectedParagraph={selectedParagraph}
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            words={words}
            characters={characters}
            wpm={wpm}
            testInfo={testInfo}
            onImputChange={onImputChange}
          />
        </div>
      ) : (
        <div className='try-again-cont'>
          <TryAgain
            words={words}
            characters={characters}
            wpm={wpm}
            startAgain={startAgain}
          />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
