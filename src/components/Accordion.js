import React, { useState } from 'react';

function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={item.question || index} className={`accordion-item ${openIndex === index ? 'open' : ''}`}>
          <button
            className="accordion-header"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className="accordion-title">{item.question}</span>
            <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <div className="accordion-content" role="region">
            <p className="accordion-text">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
