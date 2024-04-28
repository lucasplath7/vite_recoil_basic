// Node Module Imports
import React from 'react';
import SpeedRead from 'speed-read-v1';

// Styles
import './index.css';

export default function Spinner() {
  const text = 'this is text and here is some more, it should be going pretty fast I hope you can grok whats going on here this is text and here is some more, it should be going pretty fast I hope you can grok whats going on here this is text and here is some more, it should be going pretty fast I hope you can grok whats going on here';
  const wpm = 450;
  const playing = false;
  return (
    <SpeedRead
      className='speed-read'
      text={text}
      wpm={wpm}
      playing={playing}
      style={{width: '300px'}}
    />
  );
}
