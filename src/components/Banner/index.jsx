import React, { useEffect, useState } from 'react';
import reactLogo from '../../assets/react.svg'

import './index.css';

export default function Banner(props) {
  return (
    <header role='banner' className={'banner ' + props.className}>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1 className='banner-heading'>{props.title}</h1>
    </header>
  )
}
