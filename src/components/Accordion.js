import React, { useState } from 'react';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className={`accordion-item ${openIndex === index ? 'open' : ''}`}>
          <button className="accordion-header" onClick={() => toggle(index)}>
            <span className="accordion-title">{item.question}</span>
            <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <div className="accordion-content">
            <p className="accordion-text">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
