'use client'

import React, { useState } from 'react';

const ContentContainer = () => {
  const [currentContent, setCurrentContent] = useState(1);

  const handlePrevClick = () => {
    setCurrentContent((prevContent) => Math.max(prevContent - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentContent((prevContent) => prevContent + 1);
  };

  return (
    <div>
      <div>
        <button onClick={handlePrevClick}>&lt; Previous</button>
        <span> Content {currentContent} </span>
        <button onClick={handleNextClick}>Next &gt;</button>
      </div>

      <div>
        {/* Render content based on the currentContent state */}
        {currentContent === 1 && <p>Content 1: This is the first content.</p>}
        {currentContent === 2 && <p>Content 2: Another content after the button press.</p>}
        {/* Add more content sections as needed */}
      </div>
    </div>
  );
};

export default ContentContainer;
