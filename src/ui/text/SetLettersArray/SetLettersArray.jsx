import React, { useEffect, useState } from 'react';

export const SetLettersArray = ({ propWords }) => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveWordIndex(prevIndex => (prevIndex + 1) % propWords.length);
    }, 4000); // Cambia la palabra cada 4 segundos

    return () => clearInterval(intervalId);
  }, [propWords]);

  return (
    <div className="array">
      {propWords.map((word, wordIndex) => (
        <div key={wordIndex} className={`word ${wordIndex === activeWordIndex ? 'active' : ''}`}>
          {[...word].map((letter, letterIndex) => {
            let letterAnimationDelay = 0.05 * letterIndex;

            return (

              <span key={letterIndex}
               className={wordIndex === activeWordIndex ? 'in' : 'out'} 
               style={ wordIndex === activeWordIndex ? { animationDelay: `${letterAnimationDelay}s` } : null}
               >
                {letter === ' ' ? '\u00A0' : letter}
              </span>

            );
          })}
        </div>
      ))}
    </div>
  );
};
