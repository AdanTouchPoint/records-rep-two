import React from 'react';


interface ErrorPopupProps {
  message: string;
  onClose: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ message, onClose }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h2 className="header">Error</h2>
        <p className="message">{message}</p>
        <button className="button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ErrorPopup;

