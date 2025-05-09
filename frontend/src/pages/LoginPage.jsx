import React, { useState } from 'react';
import Login from '../component/Login';
import Signup from '../component/Signup';

const LoginPage = () => {
  const [sigin, setSignin] = useState(false);

  const handleClick = () => {
    setSignin(!sigin);
  };
  return (
    <div>
      {!sigin ? (
        <div>
          <Login />
          <div className="text-center text-xl">
            Create a new user?{' '}
            <button
              className="text-blue-400 underline cursor-pointer"
              onClick={handleClick}
            >
              Signup
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Signup />
          <div className="text-center text-xl">
            Already an exisiting user?{' '}
            <button
              className="text-blue-400 underline cursor-pointer"
              onClick={handleClick}
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
