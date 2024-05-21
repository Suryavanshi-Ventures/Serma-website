import React from "react";

const LoadingButton = ({
  disabledProp,
  style,
  text,
  spinnerWidth = "40",
  spinnerHeight = "40",
  loading,
}) => {
  const OnButtonClick = () => {};

  return (
    <button
      type="submit"
      onClick={() => OnButtonClick()}
      className={`${style} ${
        loading ? "cursor-wait" : ""
      } disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:text-gray-400`}
      disabled={loading || disabledProp}
    >
      {loading ? (
        <div className="flex justify-center">
          <svg
            className="animate-spin"
            width={spinnerWidth}
            height={spinnerHeight}
            viewBox="0 0 243 243"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="105.5"
              cy="105.5"
              r="105.5"
              transform="matrix(-1 0 0 1 227 16)"
              stroke="white"
              strokeWidth="32"
            />
            <path
              d="M16 121.5C16 135.354 18.7288 149.073 24.0307 161.873C29.3326 174.673 37.1037 186.303 46.9002 196.1C56.6968 205.896 68.3271 213.667 81.1269 218.969C93.9268 224.271 107.646 227 121.5 227"
              stroke="#ffa999"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : (
        <p>{text}</p>
      )}
    </button>
  );
};

export default LoadingButton;
