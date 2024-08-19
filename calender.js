// src/components/Calendar.js
import React, { useContext } from 'react';
import { EventContext } from '../contexts/EventContext';

const Calendar = () => {
  const { events } = useContext(EventContext);

  return (
    <div className="calendar">
      {/* Calendar UI here */}
      {events.map((event) => (
        <div key={event.id}>
          <p>{event.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
