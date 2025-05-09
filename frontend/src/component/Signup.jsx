import React, { useState } from 'react';
import { cartVariable } from '../store/useCart';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, signup, loginRedirect } = cartVariable();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(name, phoneNumber, email, password);
      if (isLoggedIn && loginRedirect) {
        navigate(loginRedirect);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="py-10 px-6 flex justify-center items-center">
      <div className="w-full max-w-4xl">
        <div className="text-5xl font-bold mb-6 text-center">SIGN IN</div>
        <form
          className="border-2 border-black rounded-xl p-6 bg-white space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="text-black text-lg mb-1">Name</label>
            <input
              type="text"
              required
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-500 rounded-xl p-2"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black text-lg mb-1">Phone Number</label>
            <input
              type="text"
              required
              autoComplete="off"
              pattern="[6-9]\d{9}"
              maxLength={10}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border-2 border-gray-500 rounded-xl p-2"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black text-lg mb-1">Email</label>
            <input
              type="text"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-500 rounded-xl p-2"
              placeholder="Enter your email Id"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black text-lg mb-1">Password</label>
            <input
              type="password"
              required
              minLength={6}
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-gray-500 rounded-xl p-2"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            SignIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
