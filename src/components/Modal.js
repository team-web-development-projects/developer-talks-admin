import React from "react";

const Modal = ({ handleModal, handleSubmit, children }) => {
  const childrenArray = React.Children.toArray(children);
  const header = childrenArray.find((child) => child.type === Modal.Header);
  const body = childrenArray.find((child) => child.type === Modal.Body);
  const footer = childrenArray.find((child) => child.type === Modal.Footer);
  return (
    <>
      <div className="h-full w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 text-center">
        <div className="bg-white rounded w-10/12 md:w-1/3">
          <div className="border-b px-4 py-2 flex justify-between items-center">
            <h3 className="font-semibold text-lg">{header}</h3>
            <span onClick={handleModal} className="cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </div>
          <div className="px-4 py-8">{body}</div>
          {footer && (
            <div className="flex justify-end items-center w-100 border-t p-3 text-gray-500">
              <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded text-white">
                {footer}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Modal.Header = ({ children }) => {
  return <div className="modal-header">{children}</div>;
};

Modal.Body = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

Modal.Footer = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

export default Modal;
