import Image from "next/image";
import React from "react";
const Modal = ({
  position,
  isOpen,
  onClose,
  children,
  modalTitle,
  width,
  wantCrossButton,
  wantTocloseFromScreen
}) => {
  const ModalClass = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200 ease-in-out opacity-100"
    : "fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200 ease-in-out opacity-0 pointer-events-none";
  return (
    <div className={ModalClass} onClick={() => { if (wantTocloseFromScreen) onClose(); }}>
      {console.log(width)}
      <div className="modal-overlay absolute inset-0 bg-black backdrop-brightness-50 opacity-50"></div>
      <div
        className={`modal-container bg-white  w-full ${width}  relative max-sm:mx-5 mx-auto rounded-lg shadow-lg z-50 overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`flex justify-${position} items-center px-5 py-4`}>
          <h1 className={`md:text-xl  text-primary font-bold`}>{modalTitle}</h1>
          {wantCrossButton ? (
            <button
              onClick={onClose}
              className="modal-close absolute top-5 right-7  p-2 justify-end w text-gray-500 hover:text-gray-700  hover:bg-[#efeeee] rounded-full transition-all duration-[0.3s]"
            >
          
             <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6491 9.01484L17.6579 2.00579C18.114 1.54988 18.114 0.812735 17.6579 0.356825C17.202 -0.0990849 16.4649 -0.0990849 16.009 0.356825L8.9999 7.36588L1.99106 0.356825C1.53493 -0.0990849 0.798003 -0.0990849 0.342093 0.356825C-0.114031 0.812735 -0.114031 1.54988 0.342093 2.00579L7.35094 9.01484L0.342093 16.0239C-0.114031 16.4798 -0.114031 17.217 0.342093 17.6729C0.5693 17.9003 0.868044 18.0145 1.16657 18.0145C1.4651 18.0145 1.76364 17.9003 1.99106 17.6729L8.9999 10.6638L16.009 17.6729C16.2364 17.9003 16.5349 18.0145 16.8334 18.0145C17.132 18.0145 17.4305 17.9003 17.6579 17.6729C18.114 17.217 18.114 16.4798 17.6579 16.0239L10.6491 9.01484Z"
                  fill="black"
                />
              </svg>
        
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="modal-content py-4 text-left p-2 md:px-6 max-h-[80vh]">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal;
