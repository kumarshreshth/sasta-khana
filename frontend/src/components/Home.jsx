import Content from './Content';
import ErrorPage from './ErrorPage';
import Navbar from './Navbar';
import React from 'react';
import { useState } from 'react';

const Home = () => {
  const [isError, setError] = useState(false);
  const [errorValue, setErrorValue] = useState('');
  return (
    <div className="h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('./assets/background-image.jpg')] opacity-90"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          {isError ? (
            <ErrorPage errorValue={errorValue} />
          ) : (
            <Content
              isError={isError}
              setError={setError}
              errorValue={errorValue}
              setErrorValue={setErrorValue}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
