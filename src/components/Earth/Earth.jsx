import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const Earth = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/o5kLJ2yF0ptknzYP/scene.splinecode'); // model
  }, []);

  return <canvas id="canvas3d" className="w-full h-full absolute inset-0"></canvas>;
};

export default Earth;