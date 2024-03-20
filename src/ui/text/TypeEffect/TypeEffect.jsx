import React, { useState, useEffect } from 'react';

const TypeEffect = ({propWords}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [dynamicText, setDynamicText] = useState(''); // Estado para almacenar el texto dinámico

  const words = propWords;

  useEffect(() => {
    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);

      setDynamicText(currentChar); // Actualizar el estado con el texto dinámico

      if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }

      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    };

    const typingInterval = setTimeout(typeEffect, isDeleting ? 100 : 200);

    return () => clearTimeout(typingInterval);
  }, [wordIndex, charIndex, isDeleting]);

  return dynamicText; // Mostrar el texto dinámico directamente en un elemento h1
};

export default TypeEffect;
