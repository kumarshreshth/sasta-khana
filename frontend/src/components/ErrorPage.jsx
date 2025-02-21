import React from 'react';

const ErrorPage = ({ errorValue }) => {
  return (
    <div className="mt-16 ml-4 p-4">
      <p className="text-red-900 font-bold text-left text-4xl">
        {errorValue ? errorValue : 'An unknown error!!!!'}
        <br />
        Try again later!!!!!!
      </p>
    </div>
  );
};

export default ErrorPage;
