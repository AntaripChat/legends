import React from 'react';
import Header from './components/Home';
import Events from './components/Events';
import Achievements from './components/Achievements';
import JoinUs from './components/JoinUs';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Events />
      <Achievements />
      <JoinUs />
    </div>
  );
}

export default App;