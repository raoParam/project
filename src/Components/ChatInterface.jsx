import React, { useState, useRef, useEffect } from 'react';
import InputSection from './InputSection.jsx';
import './chatInterface.css';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm FlowChat. Ask me anything about oceanographic data from ARGO floats.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (messageText) => {
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: getBotResponse(messageText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 500);
  };

  // Simple function to generate bot responses based on keywords
  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('salinity') || lowerCaseMessage.includes('salt')) {
      return "I can help you with salinity data from ARGO floats. The average salinity in the open ocean ranges from 33 to 37 practical salinity units (PSU).";
    } else if (lowerCaseMessage.includes('temperature') || lowerCaseMessage.includes('temp')) {
      return "Ocean temperatures vary by depth and location. Surface temperatures can range from -2°C in polar regions to over 30°C in tropical waters.";
    } else if (lowerCaseMessage.includes('argo') || lowerCaseMessage.includes('float')) {
      return "ARGO floats are autonomous instruments that measure ocean properties. There are nearly 4,000 active floats worldwide, each profiling every 10 days.";
    } else if (lowerCaseMessage.includes('equator') || lowerCaseMessage.includes('tropical')) {
      return "The equatorial region has unique oceanographic characteristics, including high temperatures, low salinity in some areas due to rainfall, and strong currents.";
    } else if (lowerCaseMessage.includes('depth') || lowerCaseMessage.includes('deep')) {
      return "ARGO floats typically measure from the surface down to 2,000 meters depth, with some specialized floats going to 6,000 meters.";
    } else {
      return "I'm analyzing your query about ocean data. For more specific information, try asking about salinity, temperature, ARGO floats, or specific ocean regions.";
    }
  };

  return (
    <>
      <div className="chat-interface">
        {/* Header */}
        <div className="messages-container">

          {messages.map((message) => (
            <div key={message.id} className={`message-row ${message.sender}`}>
              <div className={`message-bubble ${message.sender}`}>
                <div className="message-text">{message.text}</div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-section">
          <InputSection onSendMessage={handleSendMessage} />
        </div>
      </div>
    </>
  );
};




export default ChatInterface;

