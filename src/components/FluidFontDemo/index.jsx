// Node Module Imports
import React from 'react';

// Styles
import './index.css';

export default function FluidFontDemo() {
  const h1Text = '<h1>Text With Fluid</h1>';
  const h2Text = '<h2>REM Based On Calulated</h2>';
  const h3Text = '<h3>Root Font Size</h3>';
  const p1Text = '<p>Paragraph with 1.5rem</p>';
  const p2Text = '<p>Paragraph with 1rem</p>';
  const p3Text = '<p>Paragraph with .75rem</p>';
  const p4Text = '<p>Paragraph with default</p>';
  return (
    <div className="text-container">
      <h1>{h1Text}</h1>
      <h2>{h2Text}</h2>
      <h3>{h3Text}</h3>
      <p className="p-large">{p1Text}</p>
      <p className="p-med">{p2Text}</p>
      <p className="p-small">{p3Text}</p>
      <p className="p-default">{p4Text}</p>
    </div>
  );
}
