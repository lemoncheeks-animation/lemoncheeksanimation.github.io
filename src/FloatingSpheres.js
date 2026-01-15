import React from 'react';
import './FloatingSpheres.css';

const FloatingSpheres = () => {
  const spheres = [
    {
      size: '150px',
      color: 'rgba(251, 191, 36, 0.5)', // orange-300
      initial: { top: '10%', left: '5%' },
      animationDuration: '35s',
    },
    {
      size: '200px',
      color: 'rgba(252, 165, 165, 0.5)', // red-300
      initial: { top: '20%', left: '80%' },
      animationDuration: '45s',
    },
    {
      size: '100px',
      color: 'rgba(110, 231, 183, 0.5)', // green-300
      initial: { top: '70%', left: '60%' },
      animationDuration: '40s',
    },
    {
      size: '180px',
      color: 'rgba(125, 211, 252, 0.5)', // sky-300
      initial: { top: '80%', left: '10%' },
      animationDuration: '50s',
    },
    {
        size: '120px',
        color: 'rgba(244, 114, 182, 0.5)', // pink-400
        initial: { top: '40%', left: '45%' },
        animationDuration: '30s',
    },
  ];

  const textureStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="sphere-container">
      {spheres.map((sphere, index) => (
        <div
          key={index}
          className="sphere"
          style={{
            width: sphere.size,
            height: sphere.size,
            ...sphere.initial,
            backgroundColor: sphere.color,
            animationDuration: sphere.animationDuration,
            animationDelay: `${index * 5}s`,
            ...textureStyle,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingSpheres;
