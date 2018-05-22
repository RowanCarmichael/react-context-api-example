import React from 'react';
import Provider from './Provider';
import Notifications from './components/notifications/Notifications';
import Creator from './components/creator/Creator';
import './App.css';

const App = () => (
  <Provider>
    <div className="App">
      <Creator />
      <Notifications />
    </div>
  </Provider>
);

export default App;
