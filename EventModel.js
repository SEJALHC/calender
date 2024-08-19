// src/components/EventModal.js
import React from 'react';

const EventModal = ({ children, onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      {children}
    </div>
  </div>
);

export default EventModal;
