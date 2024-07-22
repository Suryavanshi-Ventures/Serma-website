export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div className="flex justify-center mt-9 gap-1.5">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="w-8 h-8 rounded-full bg-white border border-[#F1F1F1] flex justify-center items-center"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z"
            fill="black"
          />
        </svg>
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`w-8 h-8 rounded-full text-sm font-bold mx-1 ${
            currentPage === index + 1
              ? "bg-[#03989E] text-white"
              : "bg-white text-black border border-[#F1F1F1]"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="w-8 h-8 rounded-full bg-white border border-[#F1F1F1] flex justify-center items-center"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};
