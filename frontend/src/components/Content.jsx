import React from 'react';
import LocationSearch from './LocationSearch';

const Content = ({ isError, setError, errorValue, setErrorValue }) => {
  return (
    <LocationSearch
      isError={isError}
      setError={setError}
      errorValue={errorValue}
      setErrorValue={setErrorValue}
    />
  );
};

export default Content;
