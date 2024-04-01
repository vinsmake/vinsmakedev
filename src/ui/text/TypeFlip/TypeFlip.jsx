import React, { useState, useEffect, useRef } from 'react';
import './typeflip.css';

export const TypeFlip = ({ propWords }) => {
    const [activeLetterBoxIndex, setActiveLetterBoxIndex] = useState(0);
    const [lastActiveLetterBoxIndex, setLastActiveLetterBoxIndex] = useState(0);
    const [totalLetterBoxDelay, setTotalLetterBoxDelay] = useState(0);

    const letterBoxesRefs = useRef([]);

    useEffect(() => {
        const setLetterEffect = () => {
            letterBoxesRefs.current.forEach((boxRef, i) => {
                const letters = propWords[i].trim();
                let letterAnimationDelay = 0;

                boxRef.textContent = "";

                for (let j = 0; j < letters.length; j++) {
                    const span = document.createElement("span");
                    span.style.animationDelay = `${letterAnimationDelay}s`;

                    if (i === activeLetterBoxIndex) {
                        span.classList.add("TypeFlip-in");
                    } else {
                        span.classList.add("TypeFlip-out");
                    }

                    span.textContent = letters[j];

                    if (letters[j] === " ") span.classList.add("TypeFlip-space");

                    boxRef.appendChild(span);

                    if (j >= letters.length - 1) break;
                    letterAnimationDelay += 0.05;
                }

                if (i === activeLetterBoxIndex) {
                    setTotalLetterBoxDelay(Number(letterAnimationDelay.toFixed(2)));
                }

                if (i === lastActiveLetterBoxIndex) {
                    boxRef.classList.add("TypeFlip-active");
                } else {
                    boxRef.classList.remove("TypeFlip-active");
                }
            });

            setTimeout(() => {
                setLastActiveLetterBoxIndex(activeLetterBoxIndex);
                setActiveLetterBoxIndex(activeLetterBoxIndex >= propWords.length - 1 ? 0 : activeLetterBoxIndex + 1);
            }, (totalLetterBoxDelay * 1000) + 3000);
        };

        setLetterEffect();

    }, [activeLetterBoxIndex, lastActiveLetterBoxIndex, totalLetterBoxDelay, propWords]);

    return (
        <p className='TypeFlip-wrapper'>
            {propWords.map((word, index) => (
                <span key={index} className="TypeFlip-word" ref={ref => (letterBoxesRefs.current[index] = ref)}>{word}</span>
            ))}
        </p>
    );
};
