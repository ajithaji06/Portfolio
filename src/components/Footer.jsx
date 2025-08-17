import React from 'react';

const Footer = () => {
  return (
    <div className=' text-foreground md:text-lg sm:text-sm text-glow flex justify-center gap-2 items-center'>
      <p>© {new Date().getFullYear()}</p>
      <span>AJITH TS</span>
      <p>all rights reserved.</p>
    </div>
  );
};

export default Footer;
