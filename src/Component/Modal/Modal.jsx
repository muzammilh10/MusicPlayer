import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg relative w-11/12 sm:w-3/4 md:w-2/3 lg:w-3/5 max-h-screen md:max-h-[80vh] overflow-auto">
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-600">X</button>
                    <div className="overflow-auto">
                        {children}
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('modal-root')
    );
}

export default Modal;
