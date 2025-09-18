import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    // Add your sign out logic here
    console.log('User signed out');
    setIsDropdownOpen(false);
  };

  return (
    <nav style={navbarStyle}>
      {/* Add Google Font import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai&display=swap');
        `}
      </style>
      
      <div style={appNameStyle}>🌊 FlowChat – Ocean Data Assistant</div>
      
     
    </nav>
  );
};

// Navbar styles
const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.8rem 2rem',
  // background: linear-gradient(red, yellow),
  
  backgroundColor: "#1e2020ff",
  // boxShadow: '0 2px 30px rgba(255, 255, 255, 0.1)',
  position: 'relative',
  height: '8.6vh',
  boxSizing: 'border-box',
  zIndex: 1000,
  width : '100vw'
};

// App name styles
const appNameStyle = {
  // position: 'absolute',
  // left: '50%',
  // transform: 'translateX(-50%)',
  fontSize: '1.8rem',
  fontWeight: '800',
  color: '#ffffffff',
  fontFamily: "'Baloo Bhai', cursive",
  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  letterSpacing: '1px'
};



export default Navbar;