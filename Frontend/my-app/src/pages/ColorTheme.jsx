import React, { useEffect, useState } from 'react';
import { MdBrightness7, MdOutlineNightsStay } from "react-icons/md";
import '../ricky/Navbar.css';

const ColorTheme = () => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isActive ? "black" : "white";
  }, [isActive]);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <span className='themeChange'
      onClick={handleToggle}
    >
      {isActive ? <MdBrightness7 /> : <MdOutlineNightsStay />}
    </span>
  );
}

export default ColorTheme;
