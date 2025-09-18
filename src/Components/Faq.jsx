import React, { useState } from 'react';
import './faqs.css'; 
import { argoFloatsQA } from './FAQs';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">ARGO Floats Frequently Asked Questions</h2>
      <div className="faq-list">
        {argoFloatsQA.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
              type="button"
            >
              <span>{item.question}</span>
              <span
                className={`faq-icon${activeIndex === index ? ' open' : ''}`}
                aria-label={activeIndex === index ? "Collapse" : "Expand"}
              >
                {activeIndex === index ? '▲' : '▼'}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`faq-answer${activeIndex === index ? ' open' : ''}`}
              aria-hidden={activeIndex !== index}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Faqs;
