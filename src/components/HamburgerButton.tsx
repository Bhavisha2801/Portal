import React from 'react';

type HamburgerButtonProps = {
  onClick: () => void;
};

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick }) => {
  return (
    <button className="hamburger-button" onClick={onClick}>
      ☰
    </button>
  );
};

export default HamburgerButton;
