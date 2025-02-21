import React from 'react';

const ErrorPage = ({ errorValue }) => {
  return (
    <div>
      <p className="text-red-800 text-left text-2xl">
        Error occured
        <br />
        {errorValue ? errorValue : 'An unknown error!!!!'}
        <br />
        Try again!!!!!!
      </p>
    </div>
  );
};

export default ErrorPage;
