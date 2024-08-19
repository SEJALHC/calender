// src/components/EventDetails.js
import React from 'react';

const EventDetails = ({ event, onClose }) => (
  <div>
    <h2>{event.title}</h2>
    <button onClick={onClose}>Close</button>
  </div>
);

export default EventDetails;
