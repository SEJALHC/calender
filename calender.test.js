// src/components/__tests__/Calendar.test.js
import { render, screen } from '@testing-library/react';
import Calendar from '../Calendar';
import { EventProvider } from '../../contexts/EventContext';

test('renders calendar with events', () => {
  render(
    <EventProvider>
      <Calendar />
    </EventProvider>
  );
  expect(screen.getByText(/event title/i)).toBeInTheDocument();
});
