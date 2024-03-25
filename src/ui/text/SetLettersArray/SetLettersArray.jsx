import React, { useEffect, useState } from 'react';

const LetterEffect = ({ words }) => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [activeLetters, setActiveLetters] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 4000); // Cambia la palabra cada 4 segundos

    return () => clearInterval(intervalId);
  }, [words]);

  useEffect(() => {
    const word = words[activeWordIndex];
    const letters = Array.from(word);

    setActiveLetters(letters);
  }, [activeWordIndex, words]);

  return (
    <div>
      <div className="word">
        {activeLetters.map((letter, index) => (
          <span
            key={index}
            className={index === 0 ? 'in' : 'out'}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LetterEffect;
