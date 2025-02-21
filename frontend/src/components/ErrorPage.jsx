import React from 'react';

const ErrorPage = ({ errorValue }) => {
  return (
    <div className="pt-22 pl-6">
      <p className="text-red-900 font-bold text-left text-4xl">
        {errorValue ? errorValue : 'An unknown error!!!!'}
        <br />
        Try again later!!!!!!
      </p>
    </div>
  );
};

export default ErrorPage;
