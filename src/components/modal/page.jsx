import Image from "next/image";
import React from "react";
const Modal = ({ position, isOpen, onClose, children, modalTitle, width,wantCrossButton }) => {
  const ModalClass = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200 ease-in-out opacity-100"
    : "fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200 ease-in-out opacity-0 pointer-events-none";
  return (
    <div className={ModalClass} onClick={onClose}>
      <div className="modal-overlay absolute inset-0 bg-black backdrop-brightness-50 opacity-50"></div>
      <div
        className={`modal-container bg-white w-full ${width}  relative max-sm:mx-5 mx-auto rounded-lg shadow-lg z-50 overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`flex justify-${position} items-center px-5 py-4`}>
          <h1 className={`md:text-xl  text-primary font-bold`}>{modalTitle}</h1>
          {wantCrossButton ?  <button
            onClick={onClose}
            className="modal-close absolute top-1 right-3 justify-end w text-gray-500 hover:text-gray-700  hover:bg-[#efeeee] rounded-full transition-all duration-[0.3s]"
          >
            <Image
              src={"/new_assets/close_icon.svg"}
              width={30}
              height={30}
              alt="Close icon"
            ></Image>
          </button> : ""}
          
        </div>
        <div className="modal-content py-4 text-left p-2 md:px-6 max-h-[80vh]">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal;
