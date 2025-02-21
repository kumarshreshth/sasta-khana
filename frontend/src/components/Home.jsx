import Content from './Content';
import ErrorPage from './ErrorPage';
import Navbar from './Navbar';
import React, { useState } from 'react';

const Home = () => {
  const [isError, setError] = useState(false);
  const [errorValue, setErrorValue] = useState(null);

  return (
    <div className="min-h-screen inset-0 bg-[url('./assets/background-image.jpg')] opacity-90">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Content */}
      <div>
        <div className="relative z-10 h-full">
          {isError ? (
            <div>
              <ErrorPage errorValue={errorValue} />
            </div>
          ) : (
            <div>
              <Content
                isError={isError}
                setError={setError}
                errorValue={errorValue}
                setErrorValue={setErrorValue}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
