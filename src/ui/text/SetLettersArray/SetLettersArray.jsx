import React, { useEffect, useState } from 'react';

const LetterEffect = ({ words }) => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 4000); // Cambia la palabra cada 4 segundos

    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <div>
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className={`word ${wordIndex === activeWordIndex ? 'active' : ''}`}>
          {[...word].map((letter, letterIndex) => (
            <span key={letterIndex} className={wordIndex === activeWordIndex ? 'in' : 'out'} style={{ animationDelay: `${letterIndex * 50}ms` }}>
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LetterEffect;
