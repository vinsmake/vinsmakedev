import React, { useState, useEffect } from 'react';
import './typeflip.css';

export const TypeFlip = ({ propWords }) => {

  const [activeLetterBoxIndex, setActiveLetterBoxIndex] = useState(0);
  const [lastActiveLetterBoxIndex, setLastActiveLetterBoxIndex] = useState(0);
  const [totalLetterBoxDelay, setTotalLetterBoxDelay] = useState(0);

  useEffect(() => {
    const letterBoxes = document.querySelectorAll("[data-letter-effect]");

    const setLetterEffect = () => {
      for (let i = 0; i < letterBoxes.length; i++) {
        let letterAnimationDelay = 0;
        const letters = letterBoxes[i].textContent.trim();
        letterBoxes[i].textContent = "";

        for (let j = 0; j < letters.length; j++) {
          const span = document.createElement("span");
          span.style.animationDelay = `${letterAnimationDelay}s`;

          if (i === activeLetterBoxIndex) {
            span.classList.add("in");
          } else {
            span.classList.add("out");
          }

          span.textContent = letters[j];

          if (letters[j] === " ") span.classList.add("space");

          letterBoxes[i].appendChild(span);

          if (j >= letters.length - 1) break;
          letterAnimationDelay += 0.05;
        }

        if (i === activeLetterBoxIndex) {
          setTotalLetterBoxDelay(Number(letterAnimationDelay.toFixed(2)));
        }

        if (i === lastActiveLetterBoxIndex) {
          letterBoxes[i].classList.add("active");
        } else {
          letterBoxes[i].classList.remove("active");
        }
      }

      setTimeout(() => {
        setLastActiveLetterBoxIndex(activeLetterBoxIndex);
        setActiveLetterBoxIndex(activeLetterBoxIndex >= letterBoxes.length - 1 ? 0 : activeLetterBoxIndex + 1);
      }, (totalLetterBoxDelay * 1000) + 3000);
    };

    setLetterEffect();

  }, [activeLetterBoxIndex, lastActiveLetterBoxIndex, totalLetterBoxDelay]);

  return (
    <div className="wrapper">
      {propWords.map((word, index) => (
        <p key={index} className="word" data-letter-effect>{word}</p>
      ))}
    </div>
  );
};
