
// src/components/EventForm.js
import React, { useState, useContext } from 'react';
import { EventContext } from '../contexts/EventContext';

const EventForm = ({ event, onClose }) => {
  const [title, setTitle] = useState(event ? event.title : '');
  const { addEvent, editEvent } = useContext(EventContext);

  const handleSubmit = () => {
    if (event) {
      editEvent(event.id, { ...event, title });
    } else {
      addEvent({ id: Date.now(), title });
    }
    onClose();
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default EventForm;
