// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import { EventProvider } from './contexts/EventContext';

const App = () => (
  <EventProvider>
    <Router>
      <Switch>
        <Route path="/" component={CalendarPage} exact />
      </Switch>
    </Router>
  </EventProvider>
);

export default App;
