import React from 'react';
import Navbar from './components/Navbar';
import Location from './components/Location';

const App = () => {
  return (
    <div className="h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('./assets/background-image.jpg')] opacity-90"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <Location />
        </div>
      </div>
    </div>
  );
};

export default App;
