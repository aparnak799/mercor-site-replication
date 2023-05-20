import React, { useState } from 'react';
import logo from "../assets/logo.jpg";

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    backgroundColor: 'transparent',
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 1000, // to ensure the header stays on top of other elements
  },
  logo: {
    height: '60px',
    width: '45px',
    marginTop: '13px',
    marginLeft: '-16%',
  },
  button: {
    padding: '10px 20px',
    marginTop: '15px',
    backgroundColor: 'white',
    color: '#000',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    outline: 'none',
    width: '120px',
    height: '45px',
    fontWeight: 'bold',
  },
};

const Header = () => {
  const [isButtonHovered, setButtonHovered] = useState(false);

  const handleButtonMouseEnter = () => {
    setButtonHovered(true);
  };

  const handleButtonMouseLeave = () => {
    setButtonHovered(false);
  };

  const buttonStyles = {
    ...styles.button,
    backgroundColor: isButtonHovered ? '#a695fd' : 'white',
  };

  return (
    <header style={styles.header}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <button
        style={buttonStyles}
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
      >
        Join Beta
      </button>
    </header>
  );
};

export default Header;
