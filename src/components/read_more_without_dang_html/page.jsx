import React, { useState } from "react";

// Function to strip HTML tags from a string
const stripHtmlTags = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const ReadMoreLessWithout_html = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Strip HTML tags from the provided text
  const cleanText = stripHtmlTags(text);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>{isExpanded ? cleanText : `${cleanText.slice(0, maxLength)}...`}</p>
      <button
        onClick={toggleReadMore}
        className="read-more-less-btn text-xs text-primary"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreLessWithout_html;
