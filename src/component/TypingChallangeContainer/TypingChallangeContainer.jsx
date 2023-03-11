import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';

import './TypingChallangeContainer.css';

const TypingChallangeContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onImputChange,
}) => {
  return (
    <div className='typing-challenge-container'>
      {/* Details Section */}
      <div className='details-container'>
        {/* Words Typed */}
        <ChallengeDetailsCard cardName='Words' cardValue={words} />
        {/* Characters typed */}
        <ChallengeDetailsCard cardName='Characters' cardValue={characters} />
        {/* speed */}
        <ChallengeDetailsCard cardName='Speed' cardValue={wpm} />
      </div>

      {/* The real chellenge */}
      <div className='typewriter-container'>
        <TypingChallenge
          testInfo={testInfo}
          timerStarted={timerStarted}
          timeRemaining={timeRemaining}
          selectedParagraph={selectedParagraph}
          onImputChange={onImputChange}
        />
      </div>
    </div>
  );
};

export default TypingChallangeContainer;
