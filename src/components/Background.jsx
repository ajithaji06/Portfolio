import React, { useEffect, useState } from 'react';

const Background = () => {
  const [stars, setStars] = useState([]);
    const [methors,setMethors]=useState([])
  useEffect(() => {
    generateStars();
    generatemethors();

    const handle=()=>{
        generateStars()
        window.addEventListener("resize",handle)
    }
    return ()=> window.removeEventListener("resize",handle)
    
  }, []);
//stars
  const generateStars = () => {
    const numOfStars = Math.floor((window.innerWidth + window.innerHeight) /25); // more stars
    
    const newStars = [];

    for (let i = 0; i < numOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };
//methors
 const generatemethors = () => {
    const numOfmethors = 6
    
    const newMethors = [];

    for (let i = 0; i < numOfmethors; i++) {
      newMethors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 10,
        delay: Math.random() * 10,
        animationDuration: Math.random() * 2 + 2,
      });
    }

    setMethors(newMethors);
  };
  return (
    <div className='fixed overflow-hidden z-0 inset-0'>
      {stars.map((star) => (
        <div
          key={star.id}
          className='star animate-pulse-subtle absolute rounded-full bg-white'
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        ></div>
      ))}
      {methors.map((methors) => (
        <div
          key={methors.id}
          className='meteor animate-meteor'
          style={{
            width: `${methors.size*20}px`,
            height: `${methors.size*1}px`,
            left: `${methors.x}%`,
            top: `${methors.y}%`,
            delay: methors.delay,
            animationDuration: `${methors.animationDuration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Background;
