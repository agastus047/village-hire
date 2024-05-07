import React from 'react';

const Footer = () => {
  const buttonStyle = {
    color: 'black',
    textDecoration: 'none',
    marginRight: '1rem',
    fontSize: '0.875rem', // Adjust the font size as needed
    fontWeight: 'bold', // Optionally adjust the font weight
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  };

  return (
    <footer style={{ backgroundColor: 'rgba(120, 200, 200, 1)' }} className="p-4 text-center w-full">
      <div className="flex justify-between">
        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
        <div>
          <button style={buttonStyle}>Contact</button>
          <button style={buttonStyle}>Help</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
