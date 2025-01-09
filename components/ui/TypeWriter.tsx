'use client';

import React, { FC } from 'react';
import { Typewriter } from 'react-simple-typewriter';

interface TypeWriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

const TypeWriter: FC<TypeWriterProps> = ({
  words,
  typeSpeed = 70,
  deleteSpeed = 50,
  delaySpeed = 2000,
}) => {
  if (!words.length) return null;

  return (
    <Typewriter
      words={words}
      cursor
      cursorStyle='|'
      typeSpeed={typeSpeed}
      deleteSpeed={deleteSpeed}
      delaySpeed={delaySpeed}
      loop={true}
    />
  );
};

export default TypeWriter;
