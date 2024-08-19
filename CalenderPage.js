// src/pages/CalendarPage.js
import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import EventForm from '../components/EventForm';
import EventDetails from '../components/EventDetails';
import EventModal from '../components/EventModal';

const CalendarPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isFormOpen, setFormOpen] = useState(false);

  const openForm = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      <Calendar />
      {isFormOpen && (
        <EventModal onClose={closeForm}>
          <EventForm event={selectedEvent} onClose={closeForm} />
        </EventModal>
      )}
    </div>
  );
};

export default CalendarPage;
