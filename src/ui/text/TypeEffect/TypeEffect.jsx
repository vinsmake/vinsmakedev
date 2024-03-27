import React, { useState, useEffect } from 'react';

export const TypeEffect = ({ propWord }) => {
  const [charIndex, setCharIndex] = useState(0);
  const [dynamicText, setDynamicText] = useState('');

  const currentWord = propWord;

  useEffect(() => {
    const typeEffect = () => {
      // Si ya se ha escrito toda la palabra, detener el efecto
      if (charIndex === currentWord.length) {
        return;
      }

      // Obtener el carácter actual para mostrar
      const currentChar = currentWord.substring(0, charIndex + 1);

      // Actualizar el texto dinámico
      setDynamicText(currentChar);

      // Actualizar el índice del carácter
      setCharIndex(prev => prev + 1);
    };

    // Establecer un intervalo para llamar a la función typeEffect
    const typingInterval = setTimeout(typeEffect, 200);

    // Limpiar el intervalo cuando el componente se desmonta o cuando el valor de charIndex cambia
    return () => clearTimeout(typingInterval);
  }, [charIndex, currentWord]);

  // Retornar el texto dinámico
  return dynamicText;
};

