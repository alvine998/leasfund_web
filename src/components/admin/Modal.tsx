import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  isButtonClose?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  isButtonClose = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-black">
            {title || "Modal Title"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>
        {/* Content */}
        <div className="p-4">{children}</div>
        {/* Footer */}
        {isButtonClose ? (
          <div className="flex justify-end p-4 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600"
            >
              Tutup
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Modal;
