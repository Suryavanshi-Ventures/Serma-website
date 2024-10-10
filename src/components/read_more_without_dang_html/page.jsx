import React, { useState } from "react";

// Function to strip HTML tags from a string
const stripHtmlTags = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const ReadMoreLessWithout_html = ({ text, maxLength, event_Id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Strip HTML tags from the provided text
  const cleanText = stripHtmlTags(text);

  // Toggle read more or less
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Only show the button if the text length is greater than maxLength
  const showButton = cleanText.length > maxLength;

  return (
    <div>
      {/* Render the text, and slice it if not expanded */}
      <p>{isExpanded ? cleanText : `${cleanText.slice(0, maxLength)}`}</p>

      {/* Conditionally render the button if the text is longer than maxLength */}
      {showButton && (
        <button
          onClick={toggleReadMore}
          className="read-more-less-btn text-xs text-primary"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ReadMoreLessWithout_html;
