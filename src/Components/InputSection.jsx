import React, { useState } from 'react';

const InputSection = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask about ocean data... (e.g., Show salinity profiles near the equator)"
          style={inputStyle}
        />
        <button
          type="submit"
          style={{
            ...buttonStyle,
            ...(inputValue.trim() ? activeButtonStyle : {}),
          }}
          disabled={!inputValue.trim()}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

// 🔹 Styles
const containerStyle = {
  padding: '14px 20px',
  backgroundColor: '#040404ff',
  // borderTop: '1px solid #2c3e50',
  width: '100%',
  boxSizing: 'border-box',
  backdropFilter: 'blur(6px)',
};

// const formStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   backgroundColor: '#1a2433',
//   borderRadius: '28px',
//   border: '1px solid #2c3e50',
//   padding: '8px 12px 8px 18px',
//   boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
//   transition: 'all 0.3s ease',
//   width: '100%',
//   maxWidth: '900px',
//   margin: '0 auto',
//   position: 'fixed',
//   bottom: '5px'
// };

const formStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#000000ff',
  borderRadius: '28px',
  border: '1px solid #2c3e50',
  padding: '8px 12px 8px 18px',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
  transition: 'all 0.3s ease',
  width: '100%',
  maxWidth: '900px',
  margin: '0 auto'
};

const inputStyle = {
  flex: 1,
  border: 'none',
  outline: 'none',
  padding: '12px 0',
  fontSize: '15px',
  color: '#fff',
  backgroundColor: 'transparent',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: '#2c3e50',
  cursor: 'not-allowed',
  transition: 'all 0.2s ease',
  marginLeft: '10px',
};

const activeButtonStyle = {
  backgroundColor: '#1e1e1e',
  cursor: 'pointer',
  transform: 'scale(1.05)',
  boxShadow: '0 4px 10px rgba(46, 134, 222, 0.5)',
};

export default InputSection;
