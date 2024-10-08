import { useState } from "react";

const ReadMoreLess = ({ content, maxLength = 200, className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle between expanded and collapsed states
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  // Function to return truncated content if not expanded
  const getDisplayedContent = () => {
    if (isExpanded) {
      return content;
    } else {
      return content.length > maxLength ? content.substring(0, maxLength) + "..." : content;
    }
  };

  return (
    <div>
      <p
        style={{
            wordWrap: "break-word",
            wordBreak: "break-word",
            whiteSpace: "normal",
          }}
        // className={className}
        dangerouslySetInnerHTML={{ __html: getDisplayedContent() }}
      >
       {/* { getDisplayedContent()} */}
      </p>
      {content.length > maxLength && (
        <button
          onClick={toggleReadMore}
          className={className}
        >
          {isExpanded ? "Read less.." : "Read more..."}
        </button>
      )}
    </div>
  );
};

export default ReadMoreLess;
